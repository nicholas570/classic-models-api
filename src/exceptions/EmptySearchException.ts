import HttpException from './HttpException';

export class EmptySearchException extends HttpException {
  constructor(search: string) {
    super(200, `It seems like there are no ${search}`);
  }
}
