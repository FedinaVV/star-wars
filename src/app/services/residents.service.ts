import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Resident} from "../interfaces/resident";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResidentsService {

  /**
   * Загруженные жители планеты
   */
  residents: BehaviorSubject<Resident[]> = new BehaviorSubject<Resident[]>([]);

  /**
   * Отфильтрованные жители планеты
   */
  filteredResidents: BehaviorSubject<Resident[]> = new BehaviorSubject<Resident[]>([]);

  constructor(private  http: HttpClient) { }

  /**
   * Возвращает жителя планеты
   * @param urlResident - адрес жителя планеты
   */
  getResident(urlResident: string) {
    return this.http.get<Resident>(urlResident);
  }

}
