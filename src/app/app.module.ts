import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FindWhatsPopnComponent } from './find-whats-popn/find-whats-popn.component';
import { HttpClientModule } from '@angular/common/http';
import { AddWhatsPopnComponent } from './add-whats-popn/add-whats-popn.component';
import { ActivityListingComponent } from './activity-listing/activity-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FindWhatsPopnComponent,
    AddWhatsPopnComponent,
    ActivityListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
