import { Component, Input } from '@angular/core';
import { Activity } from '../Activity';

@Component({
  selector: 'app-activity-listing',
  templateUrl: './activity-listing.component.html',
  styleUrls: ['./activity-listing.component.css']
})
export class ActivityListingComponent {
  @Input() id!: number;
  @Input() image!: string;
  @Input() name!: string;
  @Input() description!: string;
  @Input() hourBeginning!: string;
  @Input() hourEnding!: string;
  @Input() dateBeginning!: string;
  @Input() dateEnding!: string;
  constructor() { }
}
