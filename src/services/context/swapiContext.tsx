import React, { useEffect, useState, createContext, ReactNode } from "react";
import axios from "axios";

interface swapiContextInterface {
  films: Record<string, any> | null;
  starShips: Record<string, any> | null;
  people: Record<string, any> | null;
  vehicles: Record<string, any> | null;
  species: Record<string, any> | null;
  isLoading: boolean;
  error: any;
}

interface Props {
  children: ReactNode;
}

export const SwapiContext = createContext({} as swapiContextInterface);

const SwapiContextProvider = (props: Props) => {
  const [films, setFilms] = useState<null | Record<string, any>>(null);
  const [starShips, setStarShips] = useState<null | Record<string, any>>(null);
  const [people, setPeople] = useState<null | Record<string, any>>(null);
  const [vehicles, setVehicles] = useState<null | Record<string, any>>(null);
  const [species, setSpecies] = useState<null | Record<string, any>>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const baseUrl = "https://swapi.dev/api/";

  useEffect(() => {
    const fetchData = async () => {
      const [filmData, starShipData, peopleData, vehicleData, speciesData] =
        await Promise.all([
          axios.get(`${baseUrl}/films`),
          axios.get(`${baseUrl}/starships`),
          axios.get(`${baseUrl}/people`),
          axios.get(`${baseUrl}/vehicles`),
          axios.get(`${baseUrl}/species`),
        ]);

      setFilms(filmData.data);
      setStarShips(starShipData.data);
      setPeople(peopleData.data);
      setVehicles(vehicleData.data);
      setSpecies(speciesData.data);
      setIsLoading(false);
    };
    try {
      setIsLoading(true);
      fetchData();
    } catch (err) {
      setError(err.data.message);
      setIsLoading(false);
    }
  }, []);

  const values = {
    films,
    starShips,
    people,
    vehicles,
    species,
    isLoading,
    error,
  };

  return (
    <SwapiContext.Provider value={values}>
      {props.children}
    </SwapiContext.Provider>
  );
};

export default SwapiContextProvider;
