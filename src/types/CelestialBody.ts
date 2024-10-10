export interface CelestialBody {
    id: string;
    name: string;
    mass: { massValue: number; massExponent: number };
    density: number;
    gravity: number;
    diameter: number;
  }
  