import {Injectable} from '@angular/core';
import {Request} from '../interfaces/request.interface';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import * as queryString from 'query-string';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Injectable()
export class RequestService implements Request {

    private urlToRedirect: string;

    constructor(public http: HttpClient, private router: Router) {
        this.urlToRedirect = 'auth/sign-in';
    }

    errorHandler(error: HttpErrorResponse) {
        console.log(error);
        // switch (error.status) {
        //     case 401:
        //         this.router.navigate([this.urlToRedirect]);
        //         break;
        // }
    }

    /**
     *
     * @param {string} url
     * @param {Object} body
     * @returns {Observable<Object>}
     */
    public get(url: string, body: Object = null) {
        if (body !== null) {
            if (Object.keys(body).length > 0) {
                url += '?' + queryString.stringify(body);
            }
        }
        return this.http.get(url)
            .pipe(tap(() => {
            }, error => {
                this.errorHandler(error);
            }));
    }

    /**
     *
     * @param url
     * @param credentials
     * @returns {Observable<ArrayBuffer>}
     */
    public post(url: string, credentials: any) {
        return this.http.post(url, credentials)
            .pipe(tap(() => {
            }, error => {
                this.errorHandler(error);
            }));
    }

    /**
     *
     * @param {string} url
     * @param credentials
     * @returns {Observable<Object>}
     */
    public put(url: string, credentials: any) {
        return this.http.put(url, credentials)
            .pipe(tap(() => {
            }, error => {
                this.errorHandler(error);
            }));

    }

    /**
     *
     * @param {string} url
     * @returns {Observable<Object>}
     */
    public delete(url: string) {
        return this.http.delete(url)
            .pipe(tap(() => {
            }, error => {
                this.errorHandler(error);
            }));
    }
}
