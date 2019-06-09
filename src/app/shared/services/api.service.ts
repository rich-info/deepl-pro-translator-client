import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

    authKey = environment.deeplAuthKey;
    endpoint = environment.deeplApiEndpoint;
    // TODO: Send a POST request: https://www.deepl.com/pro-faq.html
    // httpOptions = {
    //     headers: new HttpHeaders({
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     })
    // };

    constructor(private http: HttpClient) { }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }

    getTranslation(text, fromLanguage, targetLanguage): Observable<any> {
        // TODO: Send a POST request: https://www.deepl.com/pro-faq.html
        // const formData = new FormData();
        // formData.append('auth_key', this.authKey);
        // formData.append('text', text);
        // formData.append('target_lang', targetLanguage);

        // return this.http.post<any>(this.endpoint, formData).pipe(
        //     map(this.extractData));

        var sourceLangString = "";
        if (fromLanguage) {
            sourceLangString = "&source_lang=" + fromLanguage;
        }

        return this.http.get(this.endpoint + "auth_key=" + this.authKey +
            "&text=" + text + sourceLangString + "&target_lang=" + targetLanguage).pipe(
                map(this.extractData));
    }

}
