import UserKey from "../../models/user_key";

export default class UserKeyProvider {
  getUserKeys = async (userId) => {
    try {
      const keys = await UserKey.findAll({ where: { userId } });

      return keys;
    } catch (err) {
      console.log(err);
    }
  };
  createKey = (key) => {};
}
