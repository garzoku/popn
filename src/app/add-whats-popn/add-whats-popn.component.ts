import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivityService} from '../activity.service';
import {Activity} from '../Activity';

@Component({
  selector: 'app-add-whats-popn',
  templateUrl: './add-whats-popn.component.html',
  styleUrls: ['./add-whats-popn.component.css']
})
export class AddWhatsPopnComponent implements OnInit {
activities: Activity[]= [];
// var to hold shortlink from api response
shortLink: string = "";
loading: boolean = false; // Flag variable
file?:File; // var to store file
url="./assets/imagepreview.png";

constructor(private service: ActivityService){}

ngOnInit(): void {

}

onSelectFile(event: any){
  if(event.target.files){
    this.file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result;
    }
  }
}

addActivity(newActivity: Activity){

      this.service.addActivity(newActivity).subscribe(response => {
      this.activities = [response.activity, ...this.activities]
    });
  }
}
