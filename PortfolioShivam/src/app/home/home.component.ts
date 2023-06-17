import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
 public wordList:string[]=['Interactive','Appealing','Amazing']
  public currentWord:string=''
ngOnInit(): void {
  this.changingWord(); 
}
 
  changingWord(){
    let index = 0;
    setInterval(() => {
      this.currentWord = this.wordList[index];
      index = (index + 1) % this.wordList.length;
      console.log(this.currentWord)
    }, 2000);
  }
 
}

