import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Resident} from "../interfaces/resident";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResidentsService {

  residents: BehaviorSubject<Resident[]> = new BehaviorSubject<Resident[]>([]);
  filteredResidents: BehaviorSubject<Resident[]> = new BehaviorSubject<Resident[]>([]);

  constructor(private  http: HttpClient) { }

  getResident(urlResident: string) {
    return this.http.get<Resident>(urlResident);
  }

}
