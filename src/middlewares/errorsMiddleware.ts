import { NextFunction, Request, Response } from 'express';
import { ApiResponse, ErrorResponse, ResponseContent } from '../controllers/apiResponse';
import HttpException from '../exceptions/HttpException';

const errorMiddleware = (
  error: HttpException,
  request: Request,
  response: ApiResponse<ResponseContent<ErrorResponse>>,
  next: NextFunction
) => {
  const status: number = error.status || 500;
  const message: string = error.message || 'Something went wrong';
  response.status(status).json({
    payload: {
      status,
      message,
    },
  });
};

export default errorMiddleware;
