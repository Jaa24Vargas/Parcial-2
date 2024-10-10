import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CelestialBody } from '../types/celestialBody';

const BodyDetails: React.FC = () => {
  const { id } = useParams();
  const [body, setBody] = useState<CelestialBody | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBodyDetails = async () => {
      try {
        const response = await fetch(`https://api.le-systeme-solaire.net/rest.php/bodies/${id}`);
        if (!response.ok) throw new Error('Error en la API');
        const data = await response.json();
        setBody(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBodyDetails();
  }, [id]);

  if (error) return <div>Error: {error}</div>;
  if (!body) return <div>Loading...</div>;

  return (
    <div>
      <h1>{body.name}</h1>
      <p>Mass: {body.mass.massValue} x 10^{body.mass.massExponent} kg</p>
      <p>Density: {body.density} kg/m³</p>
      <p>Gravity: {body.gravity} m/s²</p>
      <p>Diameter: {body.diameter} km</p>
      {}
    </div>
  );
};

export default BodyDetails;
