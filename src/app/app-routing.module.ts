import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//routes tell the router which view to display when a user
//clicks a link or pastes a URL into the browser address bar.
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
];

//initializes the router and starts it listening for browser location changes.
@NgModule({
  //following line adds the RouterModule to the AppRoutingModule imports array and 
  //configures it with the routes in one step by calling RouterModule.forRoot()
  imports: [RouterModule.forRoot(routes)],
  //exporting this makes it available throughout the app
  exports: [RouterModule]
})
export class AppRoutingModule { }