import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FindWhatsPopnComponent } from './find-whats-popn/find-whats-popn.component';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { AddWhatsPopnComponent } from './add-whats-popn/add-whats-popn.component';
import { ActivityListingComponent } from './activity-listing/activity-listing.component';
import { ActivityPageComponent } from './activity-page/activity-page.component';
import { ActivityPageViewComponent } from './activity-page-view/activity-page-view.component';
import { HomePageComponent } from './home-page/home-page.component';

import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { InfoIconComponent } from './info-icon/info-icon.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FindWhatsPopnComponent,
    AddWhatsPopnComponent,
    ActivityListingComponent,
    ActivityPageComponent,
    ActivityPageViewComponent,
    HomePageComponent,
    InfoIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({
      projectId: 'popn-media',
      appId: '1:367603372360:web:6f6a853bb12086057be37d',
      storageBucket: 'popn-media.appspot.com',
      apiKey: 'AIzaSyD5sofh7DSaeoYAaL8lUA599KPjnhmiNBU',
      authDomain: 'popn-media.firebaseapp.com',
      messagingSenderId: '367603372360',
      measurementId: 'G-T0M2SSE041' })),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
