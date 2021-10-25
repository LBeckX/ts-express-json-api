import {BaseResponseAbstract} from "./base-response.abstract";
import {Response} from "express";
import {JsonResponseModel} from "./_model/json-response.model";

export class JsonResponse extends BaseResponseAbstract {
    constructor(response: Response) {
        super(response);
    }

    handleResponse() {
        const response: JsonResponseModel = {
            data: this.data,
            status: this.status,
        }
        this._response.json(response);
    }
}
