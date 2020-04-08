

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TreeModule} from 'primeng/tree'; 
import {PanelMenuModule} from 'primeng/panelmenu';

import { FormsModule } from '@angular/forms';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxSpinnerModule } from "ngx-spinner";
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import {PaginatorModule} from 'primeng/paginator';
import {DropdownModule} from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import {MultiSelectModule} from 'primeng/multiselect';
import {TooltipModule} from 'primeng/tooltip';
import { LandingRouting } from './landing-routing.module';
import { TopdgridviewComponent } from './topdgridview/topdgridview.component';
import { TopdlistviewComponent } from './topdlistview/topdlistview.component';


@NgModule({
  declarations: [
    TopdgridviewComponent,
    TopdlistviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LandingRouting,
    TreeModule,
    PanelMenuModule,
    FormsModule,
    CarouselModule,
    NgxSpinnerModule,
    TableModule,
    AccordionModule,
    PaginatorModule,
    DropdownModule,
    ToastModule,
    MultiSelectModule,
    TooltipModule,
  ]
})
export class LandingModule { }
