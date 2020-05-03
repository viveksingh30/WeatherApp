import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../services/weather.service";
import { CityModel } from "./../models/CityModels";
import { Observable } from "rxjs";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
  providers: [WeatherService]
})
export class SearchComponent implements OnInit {
  citiesArray = [];
  cities = "";
  public weatherData: any;
  public SingleCityData: any;
  public multipleCityData = [];
  public productsToDisplay = "";
  constructor(private weatherService: WeatherService) {}
  ngOnInit() {}

  getCityWeatherReport() {
    let city = this.cities.split(",");
    // Single city search
    if (city.length == 1) {
      this.productsToDisplay = "single";
      this.weatherService
        .searchWeatherInfo(this.cities, this.productsToDisplay)
        .subscribe((data: CityModel) => {
          this.SingleCityData = data;
        });
    } 
    // Multiple city search
    else if (city.length > 1) {
      this.productsToDisplay = "multiple";
      this.weatherService
        .searchWeatherInfo(this.cities, this.productsToDisplay)
        .subscribe((data: CityModel) => {
          this.multipleCityData = data.list;
        });
    }
  }
}
