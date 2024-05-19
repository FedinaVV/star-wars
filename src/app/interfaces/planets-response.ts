import {Planet} from "./planet";

export interface PlanetsResponse {
  "count": number,
  "next": string,
  "previous": string,
  "results": Planet[]
}
