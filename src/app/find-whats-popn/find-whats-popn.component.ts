import { Component, Input, Output } from '@angular/core';
import { Activity } from '../Activity';
import { ActivityService } from '../activity.service';


@Component({
  selector: 'app-find-whats-popn',
  templateUrl: './find-whats-popn.component.html',
  styleUrls: ['./find-whats-popn.component.css']
})
export class FindWhatsPopnComponent {

  activityList: Activity[] = [];

    @Output() imageUrl!: string;
    @Output() name!: string;
    @Output() description!: string;
    @Output() hourBeginning!: string;
    @Output() hourEnding!: string;
    @Output() dateBeginning!: string;
    @Output() dateEnding!: string;

  constructor(private service: ActivityService){}

  ngOnInit(): void {
    this.service.activityList.subscribe(response => {
      this.activityList = response.activities;
    })
  }
}
