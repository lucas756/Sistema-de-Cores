import { Router } from 'express';
import multer from 'multer';


import CorController from './app/controllers/CorController';


const routes = new Router();


routes.post('/cor', CorController.store);
routes.get('/cor', CorController.index);


export default routes;
