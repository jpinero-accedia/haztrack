//

export enum HazmatLevel {
  Safe = 'safe',
  Caution = 'caution',
  Danger = 'danger',
  Critical = 'critical',
}

//

export interface GeoLocation {
  lat: number;
  lng: number;

  // "Almacén Norte", "Planta Oriente", etc.
  description: string;
}
