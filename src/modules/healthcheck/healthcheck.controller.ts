import { Request, Response } from "express";

export const healthcheckPingHtml = (req: Request, res: Response): void => {
    res.set('Content-Type', 'text/html').status(200).send('OK');
}

export const healthcheckPingJson = (req: Request, res: Response): void => {
    res.status(200).json({ statusCode: 200, message: 'OK'})
}
