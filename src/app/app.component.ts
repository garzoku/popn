import { Component, OnInit } from '@angular/core';
import { ActivityService } from './activity.service';
import { Listing } from './Listing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'popn';
  activityList: Listing[] = [];
  constructor(private service: ActivityService){}

  ngOnInit(): void {
    this.service.activityList.subscribe(response => {
      this.activityList = response.listings;
    })
  }
}
