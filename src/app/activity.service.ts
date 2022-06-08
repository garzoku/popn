import { Injectable } from '@angular/core';
import {Activity} from "./Activity"

import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

type ActivityReponse = {
  activities: Activity[];
}

const abaseApiUrl = environment.baseApiUrl;

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

constructor(private http: HttpClient){}

get activityList(){
  return this.http.get<ActivityReponse>(`${environment.baseApiUrl}/api/activities`)
  }
}
