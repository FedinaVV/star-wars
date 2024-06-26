/**
 * Интерфейс для жителя
 */
export interface Resident {
  "name"?: string,
  "height"?: number,
  "mass"?: number,
  "hair_color"?: string,
  "skin_color"?: string,
  "eye_color"?: string,
  "birth_year"?: string,
  "gender"?: string,
  "homeworld"?: string,
  "films"?: string[],
  "species"?: [],
  "vehicles"?: string[],
  "starships"?: string[],
  "created"?: Date,
  "edited"?: Date,
  "url"?: string
}
