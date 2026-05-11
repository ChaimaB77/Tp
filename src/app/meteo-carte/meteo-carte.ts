import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../services/meteo';

@Component({
  selector: 'app-meteo-carte',
  imports: [],
  templateUrl: './meteo-carte.html',
  styleUrl: './meteo-carte.css'
})
export class MeteoCarte implements OnInit {

  ville = "Paris";
  temperature = 0;
  condition = "Inconnue";
  humidite = 45; 
  vent = 0;

  constructor(private meteoService: MeteoService) {}

  ngOnInit() {
    this.meteoService.getMeteoParis().subscribe((data: any) => {

      const weather = data.current_weather;

      this.temperature = weather.temperature;
      this.vent = weather.windspeed;

      // mapping simple code météo
      if (weather.weathercode === 0) {
        this.condition = "Ensoleillé";
      } else if (weather.weathercode <= 3) {
        this.condition = "Nuageux";
      } else {
        this.condition = "Pluvieux";
      }

    });
  }

  get emoji() {
  if (this.condition === 'Ensoleillé') return '☀️';
  if (this.condition === 'Nuageux') return '☁️';
  if (this.condition === 'Pluvieux') return '🌧️';
  return '❓';
}
}