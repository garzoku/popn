import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindWhatsPopnComponent } from './find-whats-popn/find-whats-popn.component';
import { AddWhatsPopnComponent } from './add-whats-popn/add-whats-popn.component';
import { ActivityPageComponent } from './activity-page/activity-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '**',
    pathMatch: 'full',
    component: PagenotfoundComponent,
  },
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full',
  },
  {
    path: 'home-page',
    component: HomePageComponent,
  },
  {
    path: 'find-whats-popn',
    component: FindWhatsPopnComponent,
  },
  {
    path: 'add-whats-popn',
    component: AddWhatsPopnComponent,
  },
  {
    path: 'activity/:id',
    component: ActivityPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
