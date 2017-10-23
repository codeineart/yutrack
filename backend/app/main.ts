import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as expensesController from './controllers/expenses'

// Class to reference application
class App {

  // typedef ref for express module inside the class
  public express: express.Application;
  public db: mongoose.Connection;
  public mongoose: any;

  constructor() {
    /* 
    *  On instance creation, create corresponding objects
    *  middleware function defines middleware like CORS, 
    *  templating engine, etc, while the routes function 
    *  registers the routes, which have been set.
    */
    this.express = express();
    this.middleware();
    this.routes();
    this.mongoose = mongoose.connect('mongodb://localhost:27017/test', {
       useMongoClient: true 
      });
    this.mongoose.Promise = global.Promise;
    this.db = mongoose.connection;
  }

  // Configure Express middleware.
  private middleware(): void {

    this.express.use(bodyParser.json({ 
      type: 'application/json' 
    }));

  }

  // Configure API endpoints.
  private routes(): void {

    // Creates an instance of router
    let router = express.Router();

    // Routes functions defined in controller
    router.get('/', expensesController.test);
    router.post('/endpoint/create', expensesController.postCreate);
    router.get('/endpoint/read', expensesController.getRead);
    router.post('/endpoint/update', expensesController.postUpdate);
    router.get('/endpoint/delete', expensesController.getDelete);
    
    // Lnk router with the app
    this.express.use(router);

  }
}

// On export, ref to express of App instance
export default new App().express;
