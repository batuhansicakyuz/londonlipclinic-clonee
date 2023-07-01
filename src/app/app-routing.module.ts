import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ReferenzenComponent } from './referenzen/referenzen.component';
import { UberunsComponent } from './uberuns/uberuns.component';
import { SecondSection } from './secondsection/secondsection.component';
import { FifthSection } from './fifthsection/fifthsection.component';

const routes: Routes = [
{path:'',component:StartComponent },
{ path: 'start-component', component: StartComponent },
  {path:'uberuns-component',component:UberunsComponent},
  { path: 'referenzen-component', component: ReferenzenComponent },
  { path: 'secondsection-component', component: SecondSection },
  { path: 'fithsection-component', component: FifthSection },
//   { path:'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
