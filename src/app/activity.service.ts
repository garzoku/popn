import { Injectable } from '@angular/core';
import { Activity } from './Activity';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Badge } from './Badge';

type ActivitiesReponse = {
  activities: Activity[];
};

type ActivityReponse = {
  activity: Activity;
};

export type BadgesResponse = {
  badges: Badge[];
};

export type BadgeResponse = {
  badge: Badge;
};

const baseApiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  constructor(private http: HttpClient) {}

  get activityList() {
    return this.http.get<ActivitiesReponse>(`${baseApiUrl}/api/activities`);
  }

  get badgeList() {
    return this.http.get<ActivitiesReponse>(`${baseApiUrl}/api/activities`);
  }

  getbadge(id: number) {
    return this.http.get<Badge>(`${baseApiUrl}/api/badges/${id}`);
  }

  addBadgeToActivity(activity: Activity, badge: Badge) {
    return this.http.post<any>(
      `${baseApiUrl}/api/activities/${activity.id}/badges/${badge.id}/add`,
      activity
    );
  }

  removeBadgeFromActivity(activity: Activity, badge: Badge) {
    return this.http.delete<any>(
      `${baseApiUrl}/api/activities/${activity.id}/badges/${badge.id}/remove`
    );
  }

  addActivity(activity: Activity) {
    return this.http.post<ActivityReponse>(
      `${baseApiUrl}/api/activities`,
      activity
    );
  }

  editActivity(activity: Activity) {
    console.log(activity.id);
    return this.http.put<ActivityReponse>(
      `${baseApiUrl}/api/activities/${activity.id}`,
      activity
    );
  }

  deleteActivity(id: number) {
    console.log('method fired in service');
    return this.http.delete(`${baseApiUrl}/api/activities/${id}`);
  }
}
