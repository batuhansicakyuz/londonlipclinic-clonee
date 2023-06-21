import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ReferenzenComponent } from './referenzen/referenzen.component';
import { HomeComponent } from './home/home.component';
import { SecondSection } from './secondsection/secondsection.component';

const routes: Routes = [
{path:'',component:StartComponent },
  {path:'home-component',component:HomeComponent},
  { path: 'start-component', component: StartComponent },
  { path: 'referenzen-component', component: ReferenzenComponent },
  { path: 'secondsection-component', component: SecondSection },
//   { path:'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
