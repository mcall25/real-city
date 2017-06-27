import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../city-search/hero.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {

  @Input('currentCity') data: any;

  today = new Date()


  // constructor(private loggingService: LoggingService,
  //             private accountsService: AccountsService) {
  //   this.accountsService.statusUpdated.subscribe(
  //     (status: string) => alert('New Status: ' + status)
  //   );
  // }

  constructor(private heroService: HeroService) { }






  ngOnInit() {


  }




}
