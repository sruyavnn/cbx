import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BxrootComponent } from './bxroot.component';

import { LandingComponent } from '../pages/landing/landing.component';

import { SearchComponent } from '../shared/search/search.component';

import { ListviewComponent } from '../pages/listview/listview.component';
import { AssetdetailsComponent } from '../pages/assetdetails/assetdetails.component';

import { LeftmenuComponent } from '../shared/leftmenu/leftmenu.component';
import { AnnouncementsComponent } from '../shared/announcements/announcements.component';
import { TopmenuComponent } from '../shared/topmenu/topmenu.component';
import { TreelistviewComponent } from '../pages/treelistview/treelistview.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { CartComponent } from '../pages/landing/cart/cart.component';
import { AssetsComponent } from '../pages/assets/assets.component';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { MycollectionsComponent } from '../pages/mycollections/mycollections.component';


const routes: Routes = [
    {
        path: '', component: BxrootComponent,
        children: [


            { path: '', component: LandingComponent },
            { path: 'treelistview', component: TreelistviewComponent },
            { path: 'collections', component: LandingComponent },
            { path: 'recent-downloads', component: LandingComponent },
            { path: 'cart', component: CartComponent },
            { path: 'profile-deails', component: ProfileComponent },
            { path: 'leftmenu', component: LeftmenuComponent },
            { path: 'announcements', component: AnnouncementsComponent },
            { path: 'topmenu', component: TopmenuComponent },
            { path: 'assets', component: AssetsComponent },
            { path: 'breadcrumb', component: BreadcrumbComponent },
            { path: 'mycollections', component: MycollectionsComponent },

        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BXlayoutRoutingModule { }