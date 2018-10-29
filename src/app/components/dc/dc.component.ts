import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../services/weather.service';


@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }
  humidity: number;
  avgTemp: number;
  highTemp: number;
  lowTemp: number;
  status: string;

  ngOnInit() {
    this.getDCWeather();
  }
  getDCWeather() {
    const observable = this.weatherService.getData(4350878);
    observable.subscribe(data => {
      this.humidity = data.main.humidity;
      this.status = data.weather[0].description;
      this.highTemp = data.main.temp_max;
      this.lowTemp = data.main.temp_min;
      this.avgTemp = Math.round((this.highTemp + this.lowTemp) / 2);
    });
  }

}
