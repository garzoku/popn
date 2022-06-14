import { Component, Input, Output } from '@angular/core';
import { Activity } from '../Activity';

@Component({
  selector: 'app-activity-listing',
  templateUrl: './activity-listing.component.html',
  styleUrls: ['./activity-listing.component.css'],
})
export class ActivityListingComponent {
  @Input() activity!: Activity;

  //@Output() activityOut?: Activity;

  constructor() {}

  public dateFormatter(date: string) {
    if (!date) {
      return;
    }
    return `${date.slice(5, 7)}/${date.slice(8, date.length)}/${date.slice(
      0,
      4
    )}`;
  }

  public timeFormatter(time: string) {
    if (!time) {
      return;
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
