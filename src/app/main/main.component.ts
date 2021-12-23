import { MainService } from './main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private mainService:MainService) { }
  tweets:any;
  ngOnInit(): void {
this.tweets = this.mainService.getTweets();
  }

}
