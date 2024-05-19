import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PlanetsResponse} from "../interfaces/planets-response";
import {Planet} from "../interfaces/planet";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  /**
   * Базовый адрес API
   */
  url: string = 'https://swapi.dev/api';

  /**
   * Загруженная планета
   */
  planet: BehaviorSubject<Planet> = new BehaviorSubject<Planet>({
    climate: "",
    created: undefined,
    diameter: "",
    edited: undefined,
    films: [],
    gravity: "",
    name: "",
    orbital_period: "",
    population: "",
    residents: ["1"],
    rotation_period: "",
    surface_water: "",
    terrain: "",
    url: ""
  });

  constructor(private http: HttpClient) {}

  /**
   * Возвращает ответ с планетами
   */
  getPlanets() {
    return this.http.get<PlanetsResponse>(this.url + '/planets');
  }

  /**
   * Возвращает ответ с выбранной планетой
   * @param urlPlanet - адрес страницы планеты
   */
  getPlanet(urlPlanet: string) {
    return this.http.get<Planet>(urlPlanet);
  }

  /**
   * Возвращает ответ с планетами по номеру страницы пагинации
   * @param pageNumber - номер страницы
   */
  getPlanetByPageNumber(pageNumber: number) {
    return this.http.get<PlanetsResponse>('https://swapi.dev/api/planets/?page=' + pageNumber);
  }
}
