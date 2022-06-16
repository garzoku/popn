import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Activity } from '../Activity';
import { CensorService } from '../censor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.css'],
})
export class EditActivityComponent implements OnInit {
  censoredDescrip = '';
  activities: any = [];
  activity!: Activity;
  // var to hold shortlink from api response
  shortLink: string = '';
  loading: boolean = false; // Flag variable
  file!: File; // var to store file
  selectedFile?: File;
  imageUrl = '';

  error = false;
  id: string = '';

  element?: HTMLTextAreaElement;

  constructor(
    private service: ActivityService,
    private censorService: CensorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    this.service.activityList.subscribe((response) => {
      this.activities = response;
      this.activity = this.activities.find(
        (activity: any) => activity.id === +this.id
      );
    });
  }
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

  editActivity(newActivity: Activity) {
    this.censorService
      .getCensoredText(newActivity.description)
      .subscribe((response) => {
        let parsedResponse = JSON.stringify(response);
        this.censoredDescrip = parsedResponse.slice(
          11,
          parsedResponse.length - 2
        );
      });

    newActivity.id = +this.id;
    newActivity.description = this.censoredDescrip;
    this.service.editActivity(newActivity).subscribe((response) => response);
    //this.activities = [response.activity, ...this.activities];
  }

  removeActivity() {
    this.service
      .deleteActivity(this.activity.id)
      .subscribe((response) => response);
  }
}
