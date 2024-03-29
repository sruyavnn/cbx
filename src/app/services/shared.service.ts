import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

//  private postHeadersLocal = { 
//      headers: new HttpHeaders()
//      .set('Content-Type', 'application/x-www-form-urlencoded') 
//      .set('x-requested-by', '340664671') 
//      .set('otmmauthtoken',localStorage.session)
//     };
//     private postHeadersServer = { 
//       headers: new HttpHeaders()
//       .set('Content-Type', 'application/x-www-form-urlencoded') 
//       .set('x-requested-by', JSON.parse(sessionStorage.session).id) 
//       .set('otmmauthtoken',JSON.parse(sessionStorage.session).message_digest)
//      };
//     private deleteHeadersLocal = { 
//       headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
//       .set('x-requested-by', '340664671') 
//       .set('otmmauthtoken',localStorage.session)
//      };
//      private deleteHeadersServer = { 
//       headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
//       .set('x-requested-by', JSON.parse(sessionStorage.session).id) 
//       .set('otmmauthtoken',JSON.parse(sessionStorage.session).message_digest)
//      };
   
  constructor(private http: HttpClient,
      
    ) {
 }
  
  public postService( serviceURL, params): Observable<any> {
    if(window.location.host.split(':')[0]=="localhost"){
      //headers
      // let headers = new HttpHeaders(
      //   {
      //   'otmmauthtoken': '6c59838076f0f4fbaffe286e3d25fdafee3f8a98',
      //   'X-Requested-By': '374244757',
      //   'Content-Type' : 'application/x-www-form-urlencoded'
      //   }  
      //   );
      // return this.http.post(serviceURL, params,  {headers:headers});
      //headers
    return this.http.post(serviceURL, params,  {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    .set('x-requested-by', JSON.parse(sessionStorage.session).session_resource.session.id) 
      .set('otmmauthtoken',JSON.parse(sessionStorage.session).session_resource.session.message_digest)});
      }
    else{
    return this.http.post(serviceURL, params, {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    .set('x-requested-by', JSON.parse(sessionStorage.session).id) 
    .set('otmmauthtoken',JSON.parse(sessionStorage.session).message_digest)});
    }
  }
  public getService_textResponse( serviceURL): Observable<any> {
    return this.http.get(serviceURL, {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') 
    .set('otmmauthtoken',localStorage.session),
    responseType: 'text' 
    });
  }
  // public getService( serviceURL): Observable<any> {
  //   var getHeaders = { 
  //       headers: new HttpHeaders()
  //       .set('Content-Type', 'application/x-www-form-urlencoded')
  //       .set('otmmauthtoken',JSON.parse(localStorage.session).message_digest) 
  //       //.set('cookie','JSESSIONID=WediWPptgQKySu5wNNyNA_Jow1r4pj86GTSImFWR.DEVOTMM')   
  //      }
  //   return this.http.get(serviceURL,getHeaders);
  // }

  public getService( serviceURL): Observable<any> {
    var getHeaders = { 
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('otmmauthtoken',localStorage.session) 
    //.set('cookie','JSESSIONID=WediWPptgQKySu5wNNyNA_Jow1r4pj86GTSImFWR.DEVOTMM') 
    }
  
    return this.http.get(serviceURL,getHeaders);
    }
    public deleteService( serviceURL): Observable<any> {
      if(window.location.host.split(':')[0]=="localhost"){
        
      return this.http.delete(serviceURL, {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .set('x-requested-by', JSON.parse(sessionStorage.session).session_resource.session.id) 
      .set('otmmauthtoken',JSON.parse(sessionStorage.session).session_resource.session.message_digest)});
       }
      else{
       
      return this.http.delete(serviceURL, {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .set('x-requested-by', JSON.parse(sessionStorage.session).id) 
      .set('otmmauthtoken',JSON.parse(sessionStorage.session).message_digest)});
      }
    }

    public patchService( serviceURL,params): Observable<any> {
      if(window.location.host.split(':')[0]=="localhost"){
     
      return this.http.patch(serviceURL,params,  {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .set('x-requested-by', JSON.parse(sessionStorage.session).session_resource.session.id) 
      .set('otmmauthtoken',JSON.parse(sessionStorage.session).session_resource.session.message_digest)});
      }
      else{
      return this.http.patch(serviceURL,params, {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .set('x-requested-by', JSON.parse(sessionStorage.session).id) 
      .set('otmmauthtoken',JSON.parse(sessionStorage.session).message_digest)});
      }
    }
    
    
}
