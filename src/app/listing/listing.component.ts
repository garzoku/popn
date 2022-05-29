import { Component, OnInit } from '@angular/core';
import { Listing } from '../Listing'
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  constructor(private service: ActivityService) { }
  listings: Listing[] = [];
  ngOnInit(): void {
    this.listings = this.service.Listing;
  }

}
