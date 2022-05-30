import { Component, Input } from '@angular/core';
import { Listing } from '../Listing';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  @Input() activities!: Listing[];
  constructor() { }
}
