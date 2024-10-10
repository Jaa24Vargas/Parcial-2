import React from 'react';
import { CelestialBody } from '../types/celestialBody';
import { Link } from 'react-router-dom';

interface CelestialBodyCardProps {
  body: CelestialBody;
}

const CelestialBodyCard: React.FC<CelestialBodyCardProps> = ({ body }) => {
  return (
    <Link to={`/cuerpo/${body.id}`} className="card">
      <h3>{body.name}</h3>
      <p>Gravedad: {body.gravity} m/s²</p>
      <p>Diámetro: {body.diameter} km</p>
    </Link>
  );
};

export default CelestialBodyCard;


