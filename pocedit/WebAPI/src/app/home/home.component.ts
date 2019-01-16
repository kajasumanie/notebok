import { Component, OnInit } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';
import { HttpClient } from '@angular/common/http';

import { UrlResolver } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homes: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:7254/api/item/GetAll').subscribe(data => {
      this.homes = data;
    });
  }

}