import {Service} from "typedi";
import {Env} from "./env";

@Service()
export class ExpressConfig {
    static port = Env.env.PORT || 8080;
}
