import { ExpressionBinding } from '@angular/compiler';
import { Component} from '@angular/core';
import { ActivityService} from '../activity.service';
import {Activity} from '../Activity';

@Component({
  selector: 'app-add-whats-popn',
  templateUrl: './add-whats-popn.component.html',
  styleUrls: ['./add-whats-popn.component.css']
})
export class AddWhatsPopnComponent {
activities: Activity[]= [];
constructor(private service: ActivityService){}

addActivity(newActivity: Activity){
  this.service.addActivity(newActivity).subscribe(response => {
  this.activities = [response.activity, ...this.activities]
});
  }
}
