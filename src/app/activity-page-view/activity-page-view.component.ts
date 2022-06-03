import { Component, Input } from '@angular/core';
import { Activity } from '../Activity';


@Component({
  selector: 'app-activity-page-view',
  templateUrl: './activity-page-view.component.html',
  styleUrls: ['./activity-page-view.component.css']
})
export class ActivityPageViewComponent {
  @Input() activity!: Activity;
  error = false;
}
