import { ForecastService } from './../forecast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fore-cast',
  templateUrl: './fore-cast.component.html',
  styleUrls: ['./fore-cast.component.css']
})
export class ForeCastComponent implements OnInit {

  constructor(private foreCasty: ForecastService) {
    foreCasty.getlocation().subscribe( coords => {
      console.log(coords);
    });
   }


  ngOnInit(): void {
  }

}
