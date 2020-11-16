import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  public optionalRendering : boolean = false;
  public information = [
    {
    id:1,
    country:'india'
    },
    {
      id:2,
      country:'germany'
      },
    {
      id:3,
      country:'bangladesh'
      },

    {
      id:4,
      country:'sri lanka'
      },
    {
      id:5,
      country:'Nepal'
      },
      {
      id:6,
      country:'Bhutan'
      },
];
people: any[] = [
  {
    "name": "Douglas  Pace",
    "age": 35,
    "country": 'MARS'
  },
  {
    "name": "Mcleod  Mueller",
    "age": 32,
    "country": 'USA'
  },
  {
    "name": "Day  Meyers",
    "age": 21,
    "country": 'HK'
  },
  {
    "name": "Aguirre  Ellis",
    "age": 34,
    "country": 'UK'
  },
  {
    "name": "Cook  Tyson",
    "age": 32,
    "country": 'USA'
  }
];
  constructor(public router:Router) { }

  ngOnInit(): void {

  }
  pagechange(){
   this.router.navigate(['page2']);
  }
}
