import { Injectable } from '@angular/core';
import {Activity} from "./Activity"

import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

type ActivitiesReponse = {
  activities: Activity[];
}

type ActivityReponse = {
  activity: Activity;
}

const baseApiUrl = environment.baseApiUrl;

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

constructor(private http: HttpClient){}

get activityList(){
  return this.http.get<ActivitiesReponse>(`${environment.baseApiUrl}/api/activities`)
  }

addActivity(activity: Activity){
  return this.http.post<ActivityReponse>(`${environment.baseApiUrl}/api/activities`, activity)
}
}
