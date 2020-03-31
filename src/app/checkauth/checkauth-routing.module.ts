import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckauthComponent } from './checkauth.component';
const routes: Routes = [
{ path: '', component: CheckauthComponent }
];
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CheckauthRoutingModule { }