import {Component} from '@angular/core';
import {PlanetsService} from "../../services/planets.service";
import {Planet} from "../../interfaces/planet";
import {ResidentsService} from "../../services/residents.service";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent {
  perPage: number = 10;
  planets: Planet[] = [];
  pages: number[] = [];

  constructor(private planetsService: PlanetsService,
              private residentsService: ResidentsService) {
  }

  ngOnInit() {
    this.planetsService.getPlanets().subscribe({
      next: planetsResponse => {
        this.planets = planetsResponse.results;
        for (let i = 1; i <=  Math.ceil(planetsResponse.count / this.perPage); i++) {
          this.pages.push(i);
        }
      },
      error: err => alert("Упс... Планеты не загрузились!")
    });
  }

  getPlanet(urlPlanet: string) {
    this.planetsService.getPlanet(urlPlanet).subscribe({
      next: planet => {
        this.planetsService.planet.next(planet);
        this.residentsService.filteredResidents.getValue().length = 0;
        this.residentsService.residents.getValue().length = 0;
        planet.residents.forEach(item => {
          this.residentsService.getResident(item).subscribe({
            next: resident => {
              this.residentsService.residents.getValue().push(resident);
              this.residentsService.filteredResidents.getValue().push(resident);
            },
            error: err => alert("Не удалось загрузить жителей")
          });
        })
      },
      error: err => alert("Не удалось загрузить выбранную планету")
    });
  }

  getPlanetsByPageNumber(pageNumber: number) {
    this.planetsService.getPlanetByPageNumber(pageNumber).subscribe({
      next: planetsResponse => this.planets = planetsResponse.results,
      error: err => alert("Не удалось загрузить планеты")
    });
  }

}
