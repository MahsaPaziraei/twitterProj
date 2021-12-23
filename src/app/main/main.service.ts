import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
 getTweets (){
    let tweets = [
      {
        text: "What did the cheese say when it looked in the mirror?",
        img: "../../assets/img/1.png"
      },
      {
        text: "What kind of cheese do you use to disguise a small horse?",
        img: "../../assets/img/2.png"
      },
      {
        text: "use to disguise a small horse",
        img: "../../assets/img/3.png"
      },
      {
        text: "What did the cheese say when it looked in the mirror?",
        img: "../../assets/img/1.png"
      },
      {
        text: "What kind of cheese do you use to disguise a small horse?",
        img: "../../assets/img/2.png"
      },
      {
        text: "use to disguise a small horse",
        img: "../../assets/img/3.png"
      },     {
        text: "What did the cheese say when it looked in the mirror?",
        img: "../../assets/img/1.png"
      },
      {
        text: "What kind of cheese do you use to disguise a small horse?",
        img: "../../assets/img/2.png"
      },
      {
        text: "use to disguise a small horse",
        img: "../../assets/img/3.png"
      }
    ];
    return tweets;
  }

}


