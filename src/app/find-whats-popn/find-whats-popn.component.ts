import { Component, Input, Output, SecurityContext } from '@angular/core';
import { Activity } from '../Activity';
import { ActivityService } from '../activity.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-find-whats-popn',
  templateUrl: './find-whats-popn.component.html',
  styleUrls: ['./find-whats-popn.component.css']
})
export class FindWhatsPopnComponent {

  activityList: Activity[] = [];
  error = false;


  constructor(private service: ActivityService, private sanitizer:DomSanitizer){}

  ngOnInit(): void {
    this.service.activityList.subscribe(response => {
      this.activityList = response.activities;
    })
  }
}
