import { Router } from 'express';
import  { handleGenerateNewURL,handleURLRedirect }  from '../controllers/url.js';

const urlRouter = Router();

urlRouter.post('/', handleGenerateNewURL);
urlRouter.get('/:id', handleURLRedirect);
export default urlRouter;