import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

const routes: Routes = [
    { path: 'not-found', component: PageNotFoundComponent },
    { path: 'access-denied', component: AccessDeniedComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorPagesRoutingModule { }
