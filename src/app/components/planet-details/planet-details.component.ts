import {Component} from '@angular/core';
import {PlanetsService} from "../../services/planets.service";
import {PlanetsComponent} from "../planets/planets.component";
import {Planet} from "../../interfaces/planet";
import {BehaviorSubject, Subscription} from "rxjs";
import {Resident} from "../../interfaces/resident";
import {ResidentsService} from "../../services/residents.service";
import {Filter} from "../../interfaces/filter";

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent {

  /**
   * Ссылка на загруженную планету
   */
  planet: BehaviorSubject<Planet> = this.planetsService.planet;

  /**
   * Ссылка на загруженных жителей
   */
  residents: BehaviorSubject<Resident[]> = this.residentsService.residents;

  /**
   * Ссылка на отфильтрованных жителей
   */
  filteredResidents: BehaviorSubject<Resident[]> = this.residentsService.filteredResidents;

  /**
   * Фильтр по полу
   */
  filter: Filter = {female: true, male: true, n_a: true};

  constructor(private planetsService: PlanetsService,
              private residentsService: ResidentsService) {
  }

  ngOnInit() {}

  /**
   * Фильтрует жителей планеты по полу
   * @param event - событие чекбокса
   * @param gender - пол
   */
  filterResidents(event: Event, gender: string) {
    const target = event.target as HTMLInputElement;
    let residents: Resident[] = [];

    if (gender === 'female') {
      this.filter.female = target.checked;
    }
    if (gender === 'male') {
      this.filter.male = target.checked;
    }
    if (gender === 'n_a') {
      this.filter.n_a = target.checked;
    }

    if (this.filter.female) {
      residents = residents.concat(this.residents.getValue().filter(resident => resident.gender === 'female'));
    }
    if (this.filter.male) {
      residents = residents.concat(this.residents.getValue().filter(resident => resident.gender === 'male'));
    }
    if (this.filter.n_a) {
      residents = residents.concat(this.residents.getValue().filter(resident => resident.gender === 'n/a'));
    }

    this.filteredResidents.next(residents);

  }
}
