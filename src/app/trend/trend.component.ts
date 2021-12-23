import { TrendService } from './trend.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.css']
})
export class TrendComponent implements OnInit {
  @Input() text: any;
  followList:any;
  constructor(private trendService:TrendService) { }

  ngOnInit(): void {
    this.followList= this.trendService.getFollowList();
  }

}
