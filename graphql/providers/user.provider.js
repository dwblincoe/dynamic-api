import Users from "../../models/user";

export default class UserProvider {
  getUsers = async () => {
    const users = await Users.findAll();
    return users;
  };

  register = async (user) => {
    const newUser = await Users.create(user);
    return newUser;
  };
}
