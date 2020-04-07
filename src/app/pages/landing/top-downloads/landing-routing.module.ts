import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopdlistviewComponent } from './topdlistview/topdlistview.component';
import { TopdgridviewComponent } from './topdgridview/topdgridview.component';



const routesLanding: Routes = [
{
 path: '', component: TopdlistviewComponent,
children: [
    { path: '', component: TopdlistviewComponent },
  


// { path: 'collections', component: AssetsComponent },
// 
// { path: 'assets', component: AssetsComponent },
// { path: 'search', component: SearchComponent },
// { path: 'profile', component: ProfiledetailsComponent },
// { path: 'listview', component: ListviewComponent },
// { path: 'assetdetails', component: AssetdetailsComponent },
//new
// { path: 'leftmenu', component: LeftmenuComponent },
// { path: 'announcements', component: AnnouncementsComponent },
// { path: 'topmenu', component: TopmenuComponent },
// { path: 'assets', component: AssetsComponent },
// { path: 'breadcrumb', component: BreadcrumbComponent },




]
}
];
@NgModule({
 imports: [RouterModule.forChild(routesLanding)],
exports: [RouterModule]
})
export class LandingRouting { }