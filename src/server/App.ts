import express, { Application } from 'express';
import cors from 'cors';
import options from '../config/cors';
import errorHandler from '../middlewares/errorsMiddleware';
import ApiController from '../controllers/ApiController';
import dotenv from 'dotenv';
import connect from '../database/connection';

dotenv.config();

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeControllers();
    this.initializeErrorHandling();
  }

  public listen() {
    const port = process.env.PORT || '3000';
    this.app.listen(port, () => {
      console.log(`App listening on the port ${port}`);
    });
  }

  public getServer(): Application {
    return this.app;
  }

  private initializeMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(cors(options));
  }

  private initializeErrorHandling(): void {
    this.app.use(errorHandler);
  }

  private initializeControllers(): void {
    const apiController = new ApiController();
    this.app.use('/', apiController.router);
  }

  private connectToTheDatabase(): void {
    connect();
  }
}

export default App;
