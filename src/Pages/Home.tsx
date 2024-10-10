import React, { useEffect, useState } from 'react';
import { CelestialBody } from '../types/celestialBody';
import CelestialBodyCard from '../components/CelestialBodyCard';

const Home: React.FC = () => {
  const [bodies, setBodies] = useState<CelestialBody[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.le-systeme-solaire.net/rest.php/bodies?rowData=false');
        if (!response.ok) throw new Error('Error en la API');
        const data = await response.json();
        setBodies(data.bodies);
      } catch (error) {
        setError(error.message);
      }
    };
    
    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid">
      {bodies.map((body) => (
        <CelestialBodyCard key={body.id} body={body} />
      ))}
    </div>
  );
};

export default Home;
