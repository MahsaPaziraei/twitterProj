import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }
  search: string = "";
  ngOnInit(): void {
  }
  openSnackBar(event:string){
    this._snackBar.open(event,'close');
  }
}
