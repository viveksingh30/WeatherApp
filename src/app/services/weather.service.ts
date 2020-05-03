import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CityModel } from "./../models/CityModels";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  
  searchWeatherInfo(city: string, productsToDisplay: string): Observable<CityModel> {
    if(productsToDisplay == "single")
    {
      return this.http.get<CityModel>(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&APPID=7776ef0a5d66cd5163cf7d77378bda46"
      );
    }else {
      return this.http.get<CityModel>(
        "http://api.openweathermap.org/data/2.5/group?id=1259229,1273294,1275339&APPID=7776ef0a5d66cd5163cf7d77378bda46"
      );
    }
  }
}
