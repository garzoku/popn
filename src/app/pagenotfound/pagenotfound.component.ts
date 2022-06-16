import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css'],
})
export class PagenotfoundComponent implements OnInit {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {}

  onClick() {
    this.router.navigate(['/home-page']);
  }
}
