const { createContainer, asClass, asFunction, asValue } = require('awilix');

// Configs
const config = require('../config');

// Controllers
const { HomeController } = require('../controllers');

// Services
const { HomeService } = require('../services');

// Routes
const { HomeRoutes } = require('../routes/index.routes.js');
const Routes = require('../routes');

// App
const app = require('./index');

// Models
const { User, Idea, Comment } = require('../models');

const container = createContainer();

container.register({
        router: asFunction(Routes).singleton(),
        config: asValue(config),
        app: asClass(app).singleton()
    })
    .register({
        HomeService: asClass(HomeService).singleton()
    }).register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    }).register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    }).register({
        User: asValue(User),
        Idea: asValue(Idea),
        Comment: asValue(Comment)
    });

module.exports = container;