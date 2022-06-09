import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FindWhatsPopnComponent } from './find-whats-popn/find-whats-popn.component';
import { HttpClientModule } from '@angular/common/http';
import { AddWhatsPopnComponent } from './add-whats-popn/add-whats-popn.component';
import { ActivityListingComponent } from './activity-listing/activity-listing.component';
import { ActivityPageComponent } from './activity-page/activity-page.component';
import { ActivityPageViewComponent } from './activity-page-view/activity-page-view.component';
import { ImagekitioAngularModule } from 'imagekitio-angular';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FindWhatsPopnComponent,
    AddWhatsPopnComponent,
    ActivityListingComponent,
    ActivityPageComponent,
    ActivityPageViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ImagekitioAngularModule.forRoot({
      publicKey: "public_lAolm4Cepti5GOedhXE0o4yzCuA=",
      urlEndpoint: "https://ik.imagekit.io/popn",
      authenticationEndpoint: `${environment.urlEndpoint}/api/activities`
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
