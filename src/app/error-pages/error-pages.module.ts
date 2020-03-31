import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  imports: [
    CommonModule,
    ErrorPagesRoutingModule
  ],
  declarations: [
      AccessDeniedComponent,
      PageNotFoundComponent
  ]
})
export class ErrorPagesModule { }
