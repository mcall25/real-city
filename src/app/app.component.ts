import { Component, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  oddArray: number[] = [];
  evenArray: number[] = [];
  currenNumber: number;


  onfired(number: number) {

    if (number % 2 == 0 ) {
      this.evenArray.push(number)
    }else {

      this.oddArray.push(number)
    }
    console.log(number)

    this.currenNumber = number;
  }

  search: any;

  ngOnInit(): void {
    this.search = true;
  }



  currentCity: {name: string; score: number; zmv: number; zmlp: number; mls: number; al: number;};


  onCurrentCity( obj: {name: string; score: number; zmv: number; zmlp: number; mls: number; al: number;}) {
    this.currentCity = obj;
    this.search = false;

  }
}
