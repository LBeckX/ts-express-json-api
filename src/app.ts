import 'reflect-metadata';
import {Container} from "typedi";
import {ExpressService} from "./_modules/express/service/express.service";

export class App {

    private _express = Container.get<ExpressService>(ExpressService);

    constructor() {
    }

    init(): App {
        this._express.init();
        return this;
    }
}

(new App()).init();
