import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Activity } from '../Activity';
import { CensorService } from '../censor.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-whats-popn',
  templateUrl: './add-whats-popn.component.html',
  styleUrls: ['./add-whats-popn.component.css'],
})
export class AddWhatsPopnComponent implements OnInit {
  // placeholders for presentation
  $name: string = 'The Grand Ole Opry';
  $city: string = 'Nashville';
  $state: string = 'Tennessee';
  $websiteUrl: string = 'https://www.opry.com/';
  $description: string =
    "The Grand Ole Opry is the home of Country music and if ya don't like country music then ya just ain't country!";
  censoredDescrip = '';
  activities: Activity[] = [];
  // var to hold shortlink from api response
  shortLink: string = '';
  loading: boolean = false; // Flag variable
  file!: File; // var to store file
  selectedFile?: File;
  imageUrl = './assets/imagepreview.png';

  element?: HTMLTextAreaElement;

  constructor(
    private service: ActivityService,
    private censorService: CensorService
  ) {}

  ngOnInit(): void {}

  addBadgeToActivity(event: Event) {}
  removeBadgeFromActivity(event: Event) {}

  resetImage() {
    this.imageUrl = './assets/imagepreview.png';
  }

  onSelectFile(event: any) {
    if (event.target.value) {
      this.imageUrl = event.target.value;
    } else {
      this.resetImage();
    }
  }

  censorText(event: Event) {
    if (event.target) {
      let e = event.target as HTMLTextAreaElement;
      this.censorService.getCensoredText(e.value).subscribe((response) => {
        let parsedResponse = JSON.stringify(response);
        this.censoredDescrip = parsedResponse.slice(
          11,
          parsedResponse.length - 2
        );
      });
    }
  }

  addActivity(newActivity: Activity) {
    console.log(newActivity.description);
    console.log(`api returns: ${this.censoredDescrip}`);
    newActivity.imageUrl = this.imageUrl;
    if (this.censoredDescrip !== '') {
      newActivity.description = this.censoredDescrip;
    }
    console.log(newActivity);
    this.service.addActivity(newActivity).subscribe((response) => {
      this.activities = [response.activity, ...this.activities];
    });
  }
}
