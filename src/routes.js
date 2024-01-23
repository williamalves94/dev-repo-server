import { Router } from "express";

import HelloController from "./controllers/helloControler";

const routes = new Router();

routes.get("/hello", HelloController.index);

export default routes;
