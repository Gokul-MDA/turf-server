import jwt from "jsonwebtoken";
import { createError } from "./helpers.js";

export const verifyToken = (req, res, next) => {
  const token = req?.cookies?.access_token;
  if (!token) {
    req.user = { type: "Guest" };
    next();
  } else {
    jwt.verify(token, process.env.JWT, (err, user) => {
      if (err) return next(createError(403, "Token is not valid!"));
      req.user = user;
      next();
    });
  }
};
