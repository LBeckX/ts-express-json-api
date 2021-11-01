import * as dotenv from "dotenv";

dotenv.config();

export class Env {
    static env = process.env;
}

