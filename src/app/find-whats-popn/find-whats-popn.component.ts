import { Component, Input, Output, SecurityContext } from '@angular/core';
import { Activity } from '../Activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-find-whats-popn',
  templateUrl: './find-whats-popn.component.html',
  styleUrls: ['./find-whats-popn.component.css'],
})
export class FindWhatsPopnComponent {
  activityList: any = [];
  error = false;

  constructor(private service: ActivityService) {}

  ngOnInit(): void {
    this.service.activityList.subscribe((response) => {
      this.activityList = response;
    });
  }
}
