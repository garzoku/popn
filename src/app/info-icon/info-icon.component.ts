import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../Activity';

@Component({
  selector: 'app-info-icon',
  templateUrl: './info-icon.component.html',
  styleUrls: ['./info-icon.component.css'],
})
export class InfoIconComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {

}

  @Input() activity?: Activity;
}
