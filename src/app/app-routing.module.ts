import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes = [
  { path:'', redirectTo: '/dashboard', pathMatch:'full' },
  { path: 'heroes', component: HeroesComponent},
  { path: 'dashboard', component:DashboardComponent },
  { path: 'details/:id', component: HeroDetailsComponent },
];

/* A typical Angular Route has two properties:

    path: a string that matches the URL in the browser address bar.
    component: the component that the router should create when navigating to this route. */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
