import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckauthRoutingModule } from './checkauth-routing.module';
import { CheckauthComponent } from './checkauth.component';
//import { LoginService } from './login.service';
// import { TranslateModule } from '@ngx-translate/core';
// import { SharedModule } from '../shared/shared.module';
//import { UserProfileService } from '../services/user-profile.service';
@NgModule({
imports: [
CommonModule,
FormsModule,
//NgbModule,
CheckauthRoutingModule,
CheckauthComponent

//SharedModule
],
declarations: [CheckauthComponent],
providers: [
//LoginService,
//UserProfileService
]
})
export class CheckauthModule { }