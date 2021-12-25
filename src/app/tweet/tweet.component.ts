import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input() tweet: any;
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  openSnackBar(event: string) {
    this._snackBar.open(event, 'close');
  }
}
