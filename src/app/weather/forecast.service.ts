import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor() { }

  getForeCast() {
    return this.getlocation().pipe(
      map(coords => {
        return new HttpParams()
          .set('lat', String(coords.latitude))
          .set('lon', String(coords.longitude))
          .set('units', 'metrics')
          .set('appid', '79c46d65d676ff601149e47ad14aa357');
      })
    )
  }

  getlocation(): Observable<Coordinates> {
    return new Observable((observer) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (err) => observer.error(err));

    });
  }
}
