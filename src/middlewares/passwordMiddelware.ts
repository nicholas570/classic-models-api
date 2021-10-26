import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

const passwordMiddleware = {
  hash: async (request: Request, response: Response, next: NextFunction) => {
    try {
      const password = request.body.password;
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
      request.body.password = hashedPassword;
      next();
    } catch (error) {
      throw error;
    }
  },
};

export default passwordMiddleware;
