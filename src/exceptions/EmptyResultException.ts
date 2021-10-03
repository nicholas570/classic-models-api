import HttpException from './HttpException';

export class EmptyResultException extends HttpException {
  constructor(entity: string) {
    super(200, `${entity} table does not contain any row`);
  }
}
