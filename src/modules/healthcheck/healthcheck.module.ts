import { Router } from "express";
import { healthcheckPingHtml, healthcheckPingJson } from "./healthcheck.controller";

const PATH = 'healthcheck'
export const healthcheckModule = Router();

healthcheckModule.get(`/${PATH}/ping/html`, healthcheckPingHtml);
healthcheckModule.get(`/${PATH}/ping/json`, healthcheckPingJson)