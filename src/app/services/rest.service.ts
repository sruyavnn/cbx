import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class RestService {  
  constructor(private _http: HttpClient ) {
  }
   servceUrl='http://cdam-app-dev-01:11090/otmmapi/';

  private handleError(operation: String) {
    return (err: any) => {
      if (err.error.Message == null) {
        //err.error.Message = this.langService.getTranslation('MESSAGES.SERVER-ERROR');
      }
      return Observable.throw(err);
    }
  }
    sessionData: { message_digest: string | string[]; };
    private setHeaders(): HttpHeaders {
        this.sessionData = JSON.parse(window.localStorage['session']);
            if(this.sessionData){
                const headers = new HttpHeaders()
                // .set("Content-Type", "application/json")
                // .set("Accept", "application/json")
                // .set('Inception', window.location.href)
                .set('otmmauthtoken', this.sessionData.message_digest);
                return headers;
            }
    }
    private setWOHeaders(): HttpHeaders {
        const headers = new HttpHeaders()
            .set("Content-Disposition", "form-data")
            .set('Inception', window.location.href)
            .set('Authorization', 'Bearer ' + window.localStorage['access_token'])
            .set('otmmauthtoken', this.sessionData.message_digest);

        return headers;
    }

    get_All_Service(APIName): Observable<any> {
        return this._http.get(this.servceUrl + APIName,
            {
                headers: this.setHeaders()
            })
            .pipe(
            catchError(this.handleError('getData'))
            );
    }
    

    get_put_by_Params_Service(APIName, Body) {
        const bodyString = JSON.stringify(Body); // Stringify payload

        const apiURL = this.servceUrl + APIName;
        return this._http.put(apiURL, bodyString, {
            headers: this.setHeaders()
        }) // ...using post request
            //.map((res: Response) => res) // ...and calling .json() on the response to return data
          .pipe(
          catchError(this.handleError('getData'))
          );
    }

    get_post_by_Params_Service(APIName, Body) {
        const bodyString = JSON.stringify(Body); // Stringify payload
        const apiURL = this.servceUrl + APIName;
        return this._http.post(apiURL, bodyString, {
            headers: this.setHeaders()
        }) // ...using post request
            //.map((res: Response) => res) // ...and calling .json() on the response to return data
          .pipe(
          catchError(this.handleError('getData'))
          );
    }

    post_WO_Params_Service(APIName, formData) : Observable<any>{
        const apiURL = this.servceUrl + APIName;
        return this._http.post(apiURL, formData, {
            headers: this.setWOHeaders()
        }) // ...using post request
            //.map((res: Response) => res) // ...and calling .json() on the response to return data
          .pipe(
          catchError(this.handleError('getData'))
          );
    }

    get_delete_by_Params_Service(APIName) {
        const apiURL = this.servceUrl + APIName;
        return this._http.delete(apiURL, {
            headers: this.setHeaders()
        }) // ...using post request
            //.map((res: Response) => res) // ...and calling .json() on the response to return data
          .pipe(
          catchError(this.handleError('getData'))
          );
    }
    delete_by_Body_Service_WithPost(APIName, Body) {
        const bodyString = JSON.stringify(Body); // Stringify payload
        const apiURL = this.servceUrl + APIName;
        return this._http.post(apiURL, bodyString, {
            headers: this.setHeaders()
        }) // ...using post request
            //.map((res: Response) => res) // ...and calling .json() on the response to return data
          .pipe(
          catchError(this.handleError('getData'))
          );
            //.catch(
            //(error: any) => Observable.throw(error)
            //);
    }
}
