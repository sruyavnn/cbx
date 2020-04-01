

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BxrootComponent } from './bxroot.component';
import { BXlayoutRoutingModule } from './bxlayout-routing.module';
import {TreeModule} from 'primeng/tree'; 
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import { SafeHtmlPipe } from '../pipes/safe-html.pipe';

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
import { LeftmenuComponent } from '../shared/leftmenu/leftmenu.component';
import { AnnouncementsComponent } from '../shared/announcements/announcements.component';
import { TopmenuComponent } from '../shared/topmenu/topmenu.component';
import { LandingComponent } from '../pages/landing/landing.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CarouselComponent } from '../pages/landing/carousel/carousel.component';
import { TopDownloadsComponent } from '../pages/landing/top-downloads/top-downloads.component';
import { ListviewComponent } from '../pages/listview/listview.component';
import { TreeTableModule } from 'primeng/treetable'
import { TreelistviewComponent } from '../pages/treelistview/treelistview.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import {CheckboxModule} from 'primeng/checkbox';
import { CartComponent } from '../pages/landing/cart/cart.component';

@NgModule({
  declarations: [
    BxrootComponent,
    LeftmenuComponent,
    AnnouncementsComponent,
    TopmenuComponent,
    SafeHtmlPipe,
    LandingComponent,
    FooterComponent,
    CarouselComponent,
    TopDownloadsComponent,
    ListviewComponent,
    TreelistviewComponent,
    ProfileComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BXlayoutRoutingModule,
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
    TreeTableModule,
    CheckboxModule
  ]
})
export class BxlayoutModule { }
