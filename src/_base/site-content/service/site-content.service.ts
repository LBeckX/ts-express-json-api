import {Container, Service} from "typedi";
import * as cheerio from 'cheerio';
import {CheerioAPI} from "cheerio/lib/load";
import {RequestService} from "../../request/service/request.service";

@Service()
export class SiteContentService {

    private _request = Container.get<RequestService>(RequestService);

    async get(url: URL): Promise<CheerioAPI> {
        const content = await this._request.request(url);

        return new Promise((resolve, reject) => {
            if (typeof content?.data === "string") {
                resolve(cheerio.load(content.data));
                return;
            }
            reject('No site content available');
        });
    }
}
