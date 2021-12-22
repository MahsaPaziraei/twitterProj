import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {

  constructor() { }
@Input() person: any;
  ngOnInit(): void {
  }

}
