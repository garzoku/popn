import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CensorService implements OnInit {
  constructor(private service: HttpClient) {}

  ngOnInit(): void {}

  getCensoredText(description: String) {
    return this.service.get(
      `https://www.purgomalum.com/service/json?text=${description}`
    );
  }
}
