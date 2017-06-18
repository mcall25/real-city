import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

  @Input('number') number: number;

  notice = 'you are pending status'

  constructor() { }

  ngOnInit() {
  }

  OddWinner() {
    if(this.number == 3) {
      this.notice = 'you are a winner'
    }
    else {
      this.notice = ' you are a losser'
    }
  }

  ngOnChanges() {
    this.OddWinner()
  }

}

