import { Response } from 'express';
import { Send } from 'express-serve-static-core';

export interface ResponseContent<T> {
  payload: T;
}

export interface ApiResponse<T> extends Response {
  json: Send<T, this>;
}

export interface ErrorResponse {
  status: number;
  message: string;
}

export interface AuthResponse {
  isAuthenticated: boolean;
  token: string;
}

export interface SuccessResponse {
  message: string;
}
