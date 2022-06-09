import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindWhatsPopnComponent } from './find-whats-popn/find-whats-popn.component';
import { AddWhatsPopnComponent } from './add-whats-popn/add-whats-popn.component'
import { ActivityPageComponent } from './activity-page/activity-page.component'


const routes: Routes = [{
  path: "",
  redirectTo: "find-whats-popn",
  pathMatch: "full"
},
{
  path: "find-whats-popn",
  component: FindWhatsPopnComponent
},
{
  path: "add-whats-popn",
  component: AddWhatsPopnComponent
},
{
  path: "activity/:id",
  component:ActivityPageComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
