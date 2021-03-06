import { Component, OnInit, Input } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Activity } from '../Activity';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.css'],
})
export class ActivityPageComponent implements OnInit {
  activityList: any = [];
  activity?: Activity;
  error = false;
  id!: string;

  constructor(
    private service: ActivityService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id') || '';

    this.service.activityList.subscribe((response) => {
      this.activityList = response;
      this.activity = this.activityList.find(
        (activity: Activity) => activity.id === +this.id
      );
    });
  }
}
