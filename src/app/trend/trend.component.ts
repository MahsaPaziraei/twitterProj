import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.css']
})
export class TrendComponent implements OnInit {
  @Input() text: any;
  constructor() { }

  ngOnInit(): void {
  }
  followList = [
    {
      name:"Mahsa Pz",
      id:"@mahsaPz",
      img: "../../assets/img/1.png"
    },
    {
      name:"Mahsa Pz",
      id:"@mahsaPz",
      img: "../../assets/img/2.png"
    },
    {
        name:"Mahsa Pz",
    id:"@mahsaPz",
    img: "../../assets/img/3.png"
    }
  ]
}
