import { DallasComponent } from './components/dallas/dallas.component';
import { SeattleComponent } from './components/seattle/seattle.component';
import { BurbankComponent } from './components/burbank/burbank.component';
import { SanjoseComponent } from './components/sanjose/sanjose.component';
import { DcComponent } from './components/dc/dc.component';
import { ChicagoComponent } from './components/chicago/chicago.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'seattle', component: SeattleComponent },
  { path: 'sanjose', component: SanjoseComponent },
  { path: 'burbank', component: BurbankComponent },
  { path: 'dallas', component: DallasComponent },
  { path: 'dc', component: DcComponent },
  { path: 'chicago', component: ChicagoComponent },
  { path: '', pathMatch: 'full', redirectTo: '/seattle' }
  // { path: '**', component: '/PageNotFoundComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

