import {Service} from "typedi";
import express from "express";
import {UserRoutes} from "../../user/routes/user.routes";
import {ExpressConfig} from "../../../_config/express.config";
import {RoutesAbstract} from "../../../_abstract/routes.abstract";

@Service()
export class ExpressService {

    public app = express();

    constructor(
        private _userR: UserRoutes
    ) {
        this.addRouter(this._userR);
    }

    addRouter(routes: RoutesAbstract): ExpressService {
        this.app.use(routes.baseRoute, routes.getRouter());
        return this;
    }

    init(): void {
        this.app.listen(ExpressConfig.port, () => {
            console.log('listen on port', ExpressConfig.port);
        });
    }
}
