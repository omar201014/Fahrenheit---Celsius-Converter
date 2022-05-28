import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  Fahrenheit:number = 0;
  Celsius:number = 0;

  
  ngOnInit(): void {
  }

}
