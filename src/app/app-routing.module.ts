import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindWhatsPopnComponent } from './find-whats-popn/find-whats-popn.component';

const routes: Routes = [{
  path: "",
  component: FindWhatsPopnComponent
},
{
  path: "find-whats-popn",
  component: FindWhatsPopnComponent
},
{
  path: "add-whats-popn",
  component: FindWhatsPopnComponent
},
{
  path: "activity/:id",
  component: FindWhatsPopnComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
