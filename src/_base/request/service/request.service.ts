import * as axios from "axios";
import {AxiosResponse} from "axios";
import * as URL from "url";
import {Service} from "typedi";

@Service()
export class RequestService {

    public axios = axios.default;

    protected _userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
        '(KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36';

    private _language: string = 'en-US;q=0.8,en;q=0.7';

    request(url: URL): Promise<AxiosResponse> {
        return this.axios.get(url.href, {
            baseURL: url.origin,
            headers: {
                'User-Agent': this.getUserAgent(),
                'accept-language': this.getLanguage(),
                'cache-control': 'no-cache',
                'accept': '*/*',
                'accept-encoding': ''
            }
        });
    }

    setLanguage(language: string): RequestService {
        this._language = language;
        return this;
    }

    getLanguage(): string {
        return this._language;
    }

    setUserAgent(userAgent: string): RequestService {
        this._userAgent = userAgent;
        return this;
    }

    getUserAgent(): string {
        return this._userAgent;
    }
}
