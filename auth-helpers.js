import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import User from "./models/user";

dotenv.config();

const { JWT_SECRET } = process.env;

export const saveCurrentUser = async ({ req }) => {
  let authToken = null;
  let currentUser = null;

  try {
    authToken = req.headers.authorization;

    if (authToken) {
      const user = await tradeTokenForUser(authToken);

      currentUser = user;
    }
  } catch (error) {
    console.warn(`Could not authenticate with token ${authToken}`);
  }

  return {
    authToken,
    currentUser,
  };
};

export const isAuthenticated = () => (next) => (root, args, context, info) => {
  if (!context.currentUser) {
    throw new Error("Unathenticated");
  }

  return next(root, args, context, info);
};

export const createSessionToken = (userId) => {
  try {
    return jwt.sign({ id: userId }, JWT_SECRET, {
      expiresIn: 60 * 60 * 12,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const tradeTokenForUser = async (token) => {
  try {
    const decoded = await jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ where: { id: decoded.id } });

    return user;
  } catch (err) {
    throw new Error(err);
  }
};
