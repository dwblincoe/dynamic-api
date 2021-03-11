import Users from "../../models/user";
import bcrypt from "bcrypt";

import { createSessionToken } from "../../auth-helpers";

export default class UserProvider {
  getUsers = async () => {
    try {
      let users = await Users.findAll();
      users = users.map((user) => user.dataValues);

      return users;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  register = async (user) => {
    try {
      const values = {
        ...user,
        password: bcrypt.hashSync(user.password, 10),
      };

      const newUser = await Users.create(values);

      const token = await createSessionToken(newUser.id);

      newUser.sessionToken = token;

      return newUser;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  signIn = async (signInUser) => {
    const user = await Users.findOne({ where: { email: signInUser.email } });

    const matches = await bcrypt.compare(signInUser.password, user.password);

    if (matches) {
      const token = await createSessionToken(user.id);
      user.sessionToken = token;

      return user;
    }

    throw new Error("Password did not match!");
  };
}
