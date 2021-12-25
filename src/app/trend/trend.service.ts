import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendService {

  constructor() { }
  getFollowList() {
    let followList = [
      {
        name: "Mahsa Pz",
        id: "@mahsaPz",
        img: "../../assets/img/1.png"
      },
      {
        name: "Mahsa Pz",
        id: "@mahsaPz",
        img: "../../assets/img/2.png"
      },
      {
        name: "Mahsa Pz",
        id: "@mahsaPz",
        img: "../../assets/img/3.png"
      },
      {
        name: "Mahsa Pz",
        id: "@mahsaPz",
        img: "../../assets/img/1.png"
      },
    ]
    return followList;
  }
}
