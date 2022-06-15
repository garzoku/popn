import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../Activity';
import { Badge } from '../Badge';

@Component({
  selector: 'app-info-icon-column',
  templateUrl: './info-icon-column.component.html',
  styleUrls: ['./info-icon-column.component.css'],
})
export class InfoIconColumnComponent implements OnInit {
  badge?: Badge;

  constructor() {}

  ngOnInit(): void {}

  @Input() activity?: Activity;
}
