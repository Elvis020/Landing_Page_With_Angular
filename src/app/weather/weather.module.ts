import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForeCastComponent } from './fore-cast/fore-cast.component';



@NgModule({
  declarations: [ForeCastComponent],
  imports: [
    CommonModule
  ],
  exports: [ForeCastComponent]
})
export class WeatherModule { }
