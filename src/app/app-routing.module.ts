import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlanetsComponent} from "./components/planets/planets.component";
import {PlanetDetailsComponent} from "./components/planet-details/planet-details.component";

const routes: Routes = [
  {path: '', component: PlanetsComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'planet', component: PlanetDetailsComponent},
  {path: "**", redirectTo: '', component: PlanetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
