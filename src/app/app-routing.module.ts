import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { UeberunsComponent } from './ueberuns/ueberuns.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:'',component:HomeComponent},
  {path:'home-component',component:HomeComponent},
  { path: 'first-component', component: FirstComponent },
  { path: 'ueberuns-component', component: UeberunsComponent },
//   { path:'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
