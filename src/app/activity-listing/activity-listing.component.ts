import { Component, Input } from '@angular/core';
import { Activity } from '../Activity';
import { ImagekitioAngularModule } from 'imagekitio-angular';

@Component({
  selector: 'app-activity-listing',
  templateUrl: './activity-listing.component.html',
  styleUrls: ['./activity-listing.component.css']
})
export class ActivityListingComponent {
  @Input() id!: number;
  @Input() imageUrl!: string;
  @Input() name!: string;
  @Input() description!: string;
  @Input() hourBeginning!: string;
  @Input() hourEnding!: string;
  @Input() dateBeginning!: string;
  @Input() dateEnding!: string;

  constructor(private imageKit: ImagekitioAngularModule) { }
}
