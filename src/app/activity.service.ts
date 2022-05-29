import { Injectable } from '@angular/core';
import {Listing} from "./Listing"

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  listing: Listing[] = [{
  imageUrl:"https://img.money.com/2017/05/170515-walt-disney-world-cost.jpeg?crop=0px%2C279px%2C2700px%2C1519px&quality=85",
  name: "Disney World",
  websiteUrl: "www.disneyworld.com",
  directionsUrl!: "#",
  description: "Disney world is a badass place.",
  hourBeginning: "1",
  hourEnding: "1",
  dateBeginning: "1",
  dateEnding: "1",
},
{
  imageUrl:"https://img.money.com/2017/05/170515-walt-disney-world-cost.jpeg?crop=0px%2C279px%2C2700px%2C1519px&quality=85",
  name: "Disney World",
  websiteUrl: "www.disneyworld.com",
  directionsUrl!: "#",
  description: "Disney world is a badass place.",
  hourBeginning: "1",
  hourEnding: "1",
  dateBeginning: "1",
  dateEnding: "1",
}];

get Listing(){
  return this.listing;
}
}
