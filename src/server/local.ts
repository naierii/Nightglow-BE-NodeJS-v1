import express from 'express';
import { bootstrap } from './bootstrap';

/**
 * Initialize Express Application
 */
const application: express.Application = express();

/**
 * Initialize Application Bootstrap
 */
bootstrap(application);


const PORT = 5009;

/**
 * Start Local Server
 */
application.listen(PORT, (): void => {
    const message = `Test server started on ${PORT}`
    console.log(message)
});
