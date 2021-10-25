import {Service} from "typedi";
import {RoutesAbstract} from "../../../_abstract/routes.abstract";
import {UserController} from "../controller/user.controller";

@Service()
export class UserRoutes extends RoutesAbstract {

    baseRoute = '/user';

    constructor(
        protected _userC: UserController
    ) {
        super();

        this._router.get('/:id', this._userC.getUser());
        this._router.post('', this._userC.setUser());
    }
}
