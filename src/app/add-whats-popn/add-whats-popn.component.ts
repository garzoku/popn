import { ExpressionBinding, ReadVarExpr } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { ActivityService} from '../activity.service';
import {Activity} from '../Activity';

@Component({
  selector: 'app-add-whats-popn',
  templateUrl: './add-whats-popn.component.html',
  styleUrls: ['./add-whats-popn.component.css']
})
export class AddWhatsPopnComponent implements OnInit {
activities: Activity[]= [];
selectedFile!: File;

constructor(private service: ActivityService){}

ngOnInit(): void {

}

url="./assets/imagepreview.png"

onSelectFile(event: any){
if(event.target.files){
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
