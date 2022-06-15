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

  public dateFormatter(date: string) {
    if (!date) {
      return `No Dates`;
    }
    return `${date.slice(5, 7)}/${date.slice(8, date.length)}/${date.slice(
      0,
      4
    )}`;
  }

  public timeFormatter(time: string) {
    if (!time) {
      return `No Hours`;
    }
    let timeFormat = '';
    if (time.slice(0, 2).includes('00')) {
      timeFormat = `12:${time.slice(3, 5)} AM`;
    } else if (time.slice(0, 2).includes('12')) {
      timeFormat = `12:${time.slice(3, 5)} PM`;
    } else if (time.slice(0, 1).includes('0')) {
      timeFormat = `${time.slice(1, 5)} AM`;
    } else if (+time.slice(0, 2) > 12) {
      let hour = +time.slice(0, 2) - 12;
      timeFormat = `${hour}${time.slice(2, 5)} PM`;
    } else {
      timeFormat = `${time.slice(0, 5)} AM`;
    }
    return timeFormat;
  }
}
