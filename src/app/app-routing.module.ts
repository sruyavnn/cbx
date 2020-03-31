import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { LandingComponent } from './pages/landing/landing.component';
import { CheckauthComponent } from './checkauth/checkauth.component';

//import { AssetsComponent } from './pages/assets/assets.component';


const routes: Routes = [{
  path: '',
  component: CheckauthComponent
},
{
  path: 'layout',
  //canActivate: [LoginGuard],
  // loadChildren: './layout/layout.module#LayoutModule',
  loadChildren: './layout/bxlayout.module#BxlayoutModule',
 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
