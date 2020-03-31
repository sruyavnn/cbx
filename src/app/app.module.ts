import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { BxlayoutModule } from './layout/bxlayout.module';
import { CheckauthComponent } from './checkauth/checkauth.component';
import { LoginService } from './services/login.service';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TreeModule } from 'primeng/tree';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MessageService } from 'primeng/api';
import { APP_BASE_HREF } from '@angular/common';


//import { AssetdetailsComponent } from './pages/assetdetails/assetdetails.component';
//import { ProfiledetailsComponent } from './shared/profiledetails/profiledetails.component';

@NgModule({
  declarations: [
    AppComponent,
  //   HeaderComponent,
  //  // BxrootComponent,
  //   FooterComponent,
  //   LeftnavbarComponent,
  //   LandingComponent,
  //   AssetsComponent,
    CheckauthComponent,
  
  
  //ProfiledetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    BxlayoutModule,
    HttpClientModule,
    TreeModule,
    CheckboxModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [RestService, LoginService,MessageService, { provide: APP_BASE_HREF, useValue: '/' }],
 // bootstrap: [AppComponent],
  entryComponents: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 

  constructor(private injector: Injector) { }
  ngDoBootstrap() {

    console.log("in NG Boot Strap");
    const appElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('cbx-ng', <any>appElement);
  }

}
