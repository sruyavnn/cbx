import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  //private sessionURL = "http://cdam-app-dev-01:11090/otmmapi/v5/ARTESIA.PUBLIC.TREEN/children";
  //private sessionURL = "http://cdam-app-dev-01:11090/otmmapi/v4/sessions";
  
 private headers = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8') };
 private headersJson = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
 private headersJsession = { 
   headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded') 
    .set('Accept','text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9')
   
  };
 

 //Content-Type:application/json; charset=UTF-8
  constructor(private http: HttpClient) {
 }
  
  public getSessionJSON( serviceURL, params): Observable<any> {
    return this.http.post(serviceURL, params, this.headers);
  }
  public getCSNPRD( serviceURL): Observable<any> {
    return this.http.get(serviceURL);
  }
  public getSessionJSON_Get( serviceURL): Observable<any> {
    return this.http.get(serviceURL, {responseType: 'text'});
    }
    public getTokenJSON( serviceURL): Observable<any> {
      return this.http.get(serviceURL);
      }

      public postDubToken( serviceURL, params): Observable<any> {
        return this.http.post(serviceURL, params,this.headersJson);
      }
    
      public postJsessionId( serviceURL, params): Observable<any> {
        //return this.http.post(serviceURL, params,this.headersJsession);
        return this.http.post(serviceURL, params,{
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
          responseType: 'text' 
          });

        //return this.http.post(serviceURL,{params: params, headers:this.headersJsession,observe:'response',responseType:'text'});

      }
}
