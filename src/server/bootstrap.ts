import 'dotenv/config';
import express from 'express';
import parser from 'body-parser';
import { healthcheckModule } from '../modules/healthcheck/healthcheck.module';

export const bootstrap = (application: express.Application): void => {
    application.use(parser.urlencoded({ extended: true }));
    application.use(parser.json());

    /**
     * SETUP MODULES HERE
     */

    application.use(healthcheckModule)
}
