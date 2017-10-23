"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const expensesController = require("./controllers/expenses");
// Class to reference application
class App {
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
    middleware() {
        this.express.use(bodyParser.json({
            type: 'application/json'
        }));
    }
    // Configure API endpoints.
    routes() {
        let router = express.Router();
        router.get('/', expensesController.test);
        router.post('/endpoint/create', expensesController.postCreate);
        router.get('/endpoint/read', expensesController.getRead);
        router.post('/endpoint/update', expensesController.postUpdate);
        router.get('/endpoint/delete', expensesController.getDelete);
        this.express.use(router);
    }
}
exports.default = new App().express;
