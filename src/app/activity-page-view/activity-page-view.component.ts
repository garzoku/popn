import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Activity } from '../Activity';
import { ActivityService } from '../activity.service';
import { Badge } from '../Badge';

@Component({
  selector: 'app-activity-page-view',
  templateUrl: './activity-page-view.component.html',
  styleUrls: ['./activity-page-view.component.css'],
})
export class ActivityPageViewComponent {
  @Input() activity!: Activity;
  error = false;

  isChildFriendly = false;

  element!: HTMLInputElement;

  constructor(private service: ActivityService) {}

  addBadgeToActivity(event: Event) {
    if (event) {
      this.element = event.target as HTMLInputElement;
      this.service.getbadge(+this.element.value).subscribe((response) => {
        this.service
          .addBadgeToActivity(this.activity, response)
          .subscribe((response) => {
            this.isChildFriendly = true;
            return response;
          });
      });
    }
  }
  removeBadgeFromActivity(event: Event) {
    if (event.target && this.isChildFriendly) {
      this.element = event.target as HTMLInputElement;
      this.service.getbadge(+this.element.value).subscribe((response) => {
        this.service
          .addBadgeToActivity(this.activity, response)
          .subscribe((response) => {
            this.isChildFriendly = false;
            return response;
          });
      });
    }
  }
}
