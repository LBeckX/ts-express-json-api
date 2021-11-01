import 'reflect-metadata';
import {Container} from "typedi";
import {ExpressService} from "./_base/express/service/express.service";

export class App {

    private _express = Container.get<ExpressService>(ExpressService);

    init(): App {
        this._express.init();
        return this;
    }
}

(new App()).init();
