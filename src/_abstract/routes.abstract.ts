import express from "express";

export abstract class RoutesAbstract {

    abstract baseRoute: string;

    protected _router: express.Router = express.Router();

    getRouter(): express.Router {
        return this._router;
    }
}
