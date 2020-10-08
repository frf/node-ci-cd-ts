import express, {Request, Response} from 'express';
import HomeController from './controllers/HomeController';

const routes = express.Router();

const homeController = new HomeController();

routes.get('/', homeController.index);

export default routes;
