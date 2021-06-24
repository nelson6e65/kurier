import app from "./app";
import * as Koa from "koa";
import * as express from "express";
import { createServer as createVercelServer } from "vercel-node-server";
import { jsonApiKoa, jsonApiExpress, jsonApiVercel } from "./kurier";

const koaApp = new Koa();
koaApp.use(jsonApiKoa(app));

const expressApp = express();
expressApp.use(jsonApiExpress(app));

const vercelApp = createVercelServer(jsonApiVercel(app));

export { expressApp, koaApp, vercelApp };
export default koaApp;
