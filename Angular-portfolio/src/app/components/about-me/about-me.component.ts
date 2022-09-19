import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public web: string;
  constructor() {
    this.title = "Carlos Juan";
    this.subtitle = "Desarollador Junior";
    this.web = "Carlos web";
  }
  
    ngOnInit(): void {
  }

}
