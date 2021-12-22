import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tweets = [
    {
      text: "What did the cheese say when it looked in the mirror?",
      img: "../../assets/img/1.png"
    },
    {
      text: "What kind of cheese do you use to disguise a small horse?",
      img: "../../assets/img/2.png"
    },
    {
      text: "fvvvvvvvvvvvvvvvvvvvvv",
      img: "../../assets/img/3.png"
    }
  ]
}
