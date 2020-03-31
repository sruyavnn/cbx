import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BxrootComponent } from './bxroot.component';
import { AssetsComponent } from '../pages/assets/assets.component';
import { LandingComponent } from '../pages/landing/landing.component';
import { GridviewComponent } from '../pages/gridview/gridview.component';
import { SearchComponent } from '../shared/search/search.component';
import { ProfiledetailsComponent } from '../shared/profiledetails/profiledetails.component';
import { ListviewComponent } from '../pages/listview/listview.component';
import { AssetdetailsComponent } from '../pages/assetdetails/assetdetails.component';

import { LeftmenuComponent } from '../shared/leftmenu/leftmenu.component';
import { AnnouncementsComponent } from '../shared/announcements/announcements.component';
import { TopmenuComponent } from '../shared/topmenu/topmenu.component';
import { TreelistviewComponent } from '../pages/treelistview/treelistview.component';
import { ProfileComponent } from '../pages/profile/profile.component';

const routes: Routes = [
{
path: '', component: BxrootComponent,
children: [

  
 { path: '', component: LandingComponent },
 { path: 'listview', component: TreelistviewComponent },
 { path: 'collections', component: LandingComponent },
 { path: 'recent-downloads', component: LandingComponent },
 { path: 'profile-deails', component: ProfileComponent },

// { path: 'collections', component: AssetsComponent },
// { path: 'gridview', component: GridviewComponent },
// { path: 'assets', component: AssetsComponent },
// { path: 'search', component: SearchComponent },
// { path: 'profile', component: ProfiledetailsComponent },
// { path: 'listview', component: ListviewComponent },
// { path: 'assetdetails', component: AssetdetailsComponent },
//new
{ path: 'leftmenu', component: LeftmenuComponent },
{ path: 'announcements', component: AnnouncementsComponent },
{ path: 'topmenu', component: TopmenuComponent },


]
}
];
@NgModule({
 imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class BXlayoutRoutingModule { }