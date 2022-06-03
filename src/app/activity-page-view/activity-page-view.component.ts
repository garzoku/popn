import { Component, OnInit, Input } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Activity } from '../Activity';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-activity-page-view',
  templateUrl: './activity-page-view.component.html',
  styleUrls: ['./activity-page-view.component.css']
})
export class ActivityPageViewComponent implements OnInit {
  @Input() activity?: Activity;

  error = false;

  @Input() id?: string;
  @Input() imageUrl?: string;
  @Input() name?: string;
  @Input() description!: string;
  @Input() hourBeginning!: string;
  @Input() hourEnding!: string;
  @Input() dateBeginning!: string;
  @Input() dateEnding!: string;

  constructor(private service: ActivityService, private router: ActivatedRoute) { }

  ngOnInit(): void {


  }
}
