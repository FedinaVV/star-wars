import {Planet} from "./planet";

/**
 * Интерфейс ответа на запрос списка планет
 */
export interface PlanetsResponse {
  "count": number,
  "next": string,
  "previous": string,
  "results": Planet[]
}
