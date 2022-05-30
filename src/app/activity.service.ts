import { Injectable } from '@angular/core';
import {Activity} from "./Activity"

import { HttpClient } from '@angular/common/http'

type ActivityReponse = {
  activities: Activity[];
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

constructor(private http: HttpClient){}

get activityList(){
  return this.http.get<ActivityReponse>("../assets/activities.json")
  }
}
