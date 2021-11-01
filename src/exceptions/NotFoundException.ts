import HttpException from './HttpException';
abstract class NotFoundExpection extends HttpException {
  constructor(id: string, entity: string) {
    super(404, `${entity} ${id} not found`);
  }
}
export class EntityNotFoundException extends NotFoundExpection {
  constructor(id: string, entity: string) {
    super(id, entity);
  }
}
