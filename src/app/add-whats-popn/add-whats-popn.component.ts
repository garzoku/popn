import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Activity } from '../Activity';

@Component({
  selector: 'app-add-whats-popn',
  templateUrl: './add-whats-popn.component.html',
  styleUrls: ['./add-whats-popn.component.css'],
})
export class AddWhatsPopnComponent implements OnInit {
  // placeholders for presentation
  $name: string = 'The Grand Ole Opry';
  $address: string = '2804 Opryland Dr, Nashville';
  $websiteUrl: string = 'https://www.opry.com/';
  $description: string =
    "The Grand Ole Opry is the home of Country music and if ya don't like country music then ya just ain't country!";
  activities: Activity[] = [];
  // var to hold shortlink from api response
  shortLink: string = '';
  loading: boolean = false; // Flag variable
  file!: File; // var to store file
  selectedFile?: File;
  imageUrl = './assets/imagepreview.png';

  constructor(private service: ActivityService) {}

  ngOnInit(): void {}

  addBadgeToActivity(event: Event) {}
  removeBadgeFromActivity(event: Event) {}

  resetImage() {
    this.imageUrl = './assets/imagepreview.png';
  }

  onCheck(event: any) {}

  onSelectFile(event: any) {
    if (event.target.value) {
      this.imageUrl = event.target.value;

      // this.file = event.target.files[0];
      // let reader = new FileReader();
      //  reader.readAsDataURL(event.target.files[0]);
      //  reader.onload=(event:any)=>{
      //    this.imageUrl=event.target.result;
    } else {
      this.resetImage();
    }
  }

  /*onUpload(event: any) {
if(event.target.files){
    this.file = event.target.files[0];
    const fd = new FormData();
    let reader = new FileReader();
    reader.readAsDataURL(event.target?.files[0]);
    reader.onload=(event:any)=>{
      this.imageUrl=event.target.result;
    }
  //fd.append('image', this.file, this.file.name)

 // this.http.post(`https://us-central1-popn-media.cloudfunctions.net/uploadFile`, fd, ).subscribe(res => {

 // console.log(res);
//})
}

}*/

  addActivity(newActivity: Activity) {
    newActivity.imageUrl = this.imageUrl;
    this.service.addActivity(newActivity).subscribe((response) => {
      this.activities = [response.activity, ...this.activities];
    });
  }
}
