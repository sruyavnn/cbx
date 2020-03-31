import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';
import { LoginService } from '../services/login.service';
import { SharedService } from '../services/shared.service';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-checkauth',
  templateUrl: './checkauth.component.html',
  styleUrls: ['./checkauth.component.css']
})
export class CheckauthComponent implements OnInit {

  constructor(private _restService: RestService,
    private _loginservice: LoginService,
    private _sharedservice: SharedService,
    public router: Router,


  ) {

  }
  public sessions;
  //private serviceURL = "/otmmapi/v5/sessions";
  private serviceURL = "/cbx-app/login";
  private params = "username=vemachir&password=Oct2019$";
  ngOnInit() {
    this.getSessionData();
    console.log('oninit');
    // var tokenConfigurationDev_bac = {
    //   implicitCodeForm: "https://cloudsso-test.cisco.com/as/authorization.oauth2",
    //   clientId: "ciscoadmin.gen",
    //   responseType: "token",
    //   redirectUri: "https://ciscoshare-dev.cisco.com/cbx/"
    //   //redirectUri: "https://google.com"
    //   //redirectUri: "https://ciscoshare-dev.cisco.com/alfext/ui/checkauth.html"
    //   };
    //console.log(window.location.host);
    var tokenConfigurationDev = {
      implicitCodeForm: "https://cdam-dev.cisco.com/otdsws/login",
      clientId: "cbxcustom",
      responseType: "token",
      redirectUri: window.location.href
      //redirectUri: "http://cdam-app-dev-01:11090/cbx"
    };

    var accessToken = sessionStorage.getItem("AccessToken");
    if (location.href.split('#').length==3 && accessToken == null) {
      //debugger;
      this.getToken();


      // // Extract the Access Token from the URI fragment.
      // var getAccessToken = location.hash.split('&')[0].split('=')[1];
      // location.hash = '';
      // sessionStorage.setItem("AccessToken", getAccessToken);
      // this.router.navigate(['/layout']);

    }
    else if (location.href.split('#').length==2 && accessToken == null) {

      console.log('calling sso page');
      if(window.location.host.split(':')[0]=="localhost"){
      this.getSessionData();
      }
      else{
      //if(window.location.host.toString().indexOf('-dev') !== -1){
      document.getElementById("tokenForm").setAttribute("action", tokenConfigurationDev.implicitCodeForm);
      document.getElementById("client_id").setAttribute("value", tokenConfigurationDev.clientId);
      document.getElementById("response_type").setAttribute("value", tokenConfigurationDev.responseType);
      document.getElementById("redirect_uri").setAttribute("value", tokenConfigurationDev.redirectUri);
      document.forms["implicitCodeForm"].submit();
      //}
      }
    }
    
    else {

    }


  }


  getSessionData() {
    console.log('session');
    this._loginservice.getSessionJSON_Get(this.serviceURL).subscribe(data => {

      console.log('in session');

      window.localStorage['session'] = data;
      sessionStorage['session'] = data;
      console.log(localStorage);
      this.router.navigate(['/layout']);
    });
  }
  public tokenData: any = null;
  public resourceData: any = null;

  getToken() {
    console.log('Token');
    this._loginservice.getTokenJSON('/otdsws/rest/authentication/headers').subscribe(data => {

      //console.log('In Token, ', data);
      this.tokenData = data;
      this.getResourceId();
      //this.router.navigate(['/layout']);
    });
  }

  getResourceId() {
    console.log('Resource');
    this._loginservice.getTokenJSON('/otmmapi/v5/systemdetails').subscribe(data => {

      //console.log('In Resource, ', data);
      this.resourceData = data.system_details_resource.system_details_map.entry[4].value;
      this.getDubTicket();
      //this.router.navigate(['/layout']);
    });
  }

  getDubTicket() {
    var params = {
      "ticket": this.tokenData.ticket,
      "targetResourceId": this.resourceData
    }
    this._loginservice.postDubToken('/otdsws/rest/authentication/ticketforresource', params).subscribe(data => {

      //console.log('dub Ticket, ', data);
      this.getJsessionId(data.ticket)
      //this.router.navigate(['/layout']);
    });
  }

  getJsessionId(ticket) {
    var frmData=new FormData();
    frmData.append('OTDSTicket',ticket);

    let params = new HttpParams().set('OTDSTicket',  ticket);
  
    // var params = {
    //   "OTDSTicket": ticket,
     
    // }
    this._loginservice.postJsessionId('/otmm', params).subscribe(data => {

      //console.log('Jsession, ', data);
      this.getAuthToken();

      //this.router.navigate(['/layout']);
    }
    ,
      error=>
      {
        if(error.status == 302 || error.status == 307 ||error.status == 200)
        {
         //this.getAuthToken();
        }
      }
    );
  }


  getAuthToken() {
    console.log('AuthToken');
    this._loginservice.getTokenJSON('/otmmapi/v5/sessions').subscribe(data => {

      console.log(' in AuthToken, ', data);
      window.localStorage['session'] = JSON.stringify(data.session_resource.session);
      sessionStorage['session'] = JSON.stringify(data.session_resource.session);
      this.router.navigate(['/layout']);
    });
  }

}
