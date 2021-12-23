import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }
@Input() person: any;
  ngOnInit(): void {
  }
  openSnackBar(event:string){
    this._snackBar.open(event,'close');
  }
}
