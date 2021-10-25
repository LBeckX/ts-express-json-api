import {Response} from "express";

export abstract class BaseResponseAbstract {

    status: number = 200;

    data: {[key:string]: any} = {};

    protected constructor(
        protected _response: Response
    ) {
        this._response.status(this.status);
    }

    abstract handleResponse();

    updateStatus(status: number): BaseResponseAbstract {
        this._response.status(status);
        this.status = status;
        return this;
    }

    setParameter(parameter: {[key:string]: any}): BaseResponseAbstract {
        this.data = parameter;
        return this;
    }

    addParameter(key: string, value: any): BaseResponseAbstract {
        this.data[key] = value;
        return this;
    }
}
