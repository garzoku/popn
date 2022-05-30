import { Injectable } from '@angular/core';
import {Listing} from "./Listing"

import { HttpClient } from '@angular/common/http'

type ActivityReponse = {
  listings: Listing[];
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

constructor(private http: HttpClient){}

get activityList(){
  return this.http.get<ActivityReponse>("../assets/listings.json")
  }
}
