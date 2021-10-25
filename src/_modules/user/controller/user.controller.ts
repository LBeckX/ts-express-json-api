import {Service} from "typedi";
import UserService from "../service/user.service";
import {ControllerAbstract} from "../../../_abstract/controller.abstract";
import {NextFunction, Request} from "express-serve-static-core";
import {RequestHandler, Response} from "express";
import {JsonResponse} from "../../../_classes/response/json-response";

@Service()
export class UserController extends ControllerAbstract {

    stack = 0;

    constructor(protected _userS: UserService) {
        super();
    }

    getUser(): RequestHandler {
        return async (req, res) => {
            this.stack++;
            const jsonResponse = new JsonResponse(res);
            jsonResponse.setParameter({stack: this.stack});
            jsonResponse.handleResponse();
        }
    }

    setUser(): RequestHandler {
        return async (req, res) => {
            this.stack++;
            const jsonResponse = new JsonResponse(res);
            jsonResponse.setParameter({stack: this.stack});
        }
    }
}
