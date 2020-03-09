import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Ma Super Agence';
  isdisabled = true;

  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
    this.isdisabled =false;
  }

}
