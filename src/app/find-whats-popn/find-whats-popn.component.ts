import { Component, Input } from '@angular/core';
import { Activity } from '../Activity';


@Component({
  selector: 'app-find-whats-popn',
  templateUrl: './find-whats-popn.component.html',
  styleUrls: ['./find-whats-popn.component.css']
})
export class FindWhatsPopnComponent {

  @Input() activities!: Activity[];
  constructor() { }
}
