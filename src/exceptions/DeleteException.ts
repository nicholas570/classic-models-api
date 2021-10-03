import HttpException from './HttpException';

export class DeleteException extends HttpException {
  constructor(id: string, entity: string) {
    super(500, `Unable to delete ${entity} with id ${id}`);
  }
}
