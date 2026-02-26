"use client";
import { useEffect, useState } from "react";
import CardTripulante from "@/components/CardTripulante";
import { Character } from "@/app/types/character";
import { Tripulante } from "@/app/types/mission";

export default function TripulacionPage() {
  const [tripulantes, setTripulantes] = useState<Tripulante[]>([]);

  const mapCharacterToTripulante = (character: Character): Tripulante => {
    const [firstName, ...restNames] = character.name.split(" ");
    const lastName = restNames.join(" ") || "N/A";

    return {
      id: character.id,
      firstName,
      lastName,
      image: character.image,
      company: { title: `${character.species} | ${character.status}` },
      email: `${character.name.toLowerCase().replace(/\s+/g, ".")}@nova.space`,
    };
  };

  useEffect(() => {
    const ids = [1, 2, 3, 4, 5, 6, 7, 8];

    fetch(`https://rickandmortyapi.com/api/character/${ids.join(",")}`)
      .then((res) => res.json())
      .then((data) => {
        const characters = Array.isArray(data) ? data : [data];
        setTripulantes(characters.map(mapCharacterToTripulante));
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-emerald-500 mb-8">MANIFIESTO DE TRIPULACIÓN</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tripulantes.map((tripulante) => (
          <CardTripulante key={tripulante.id} user={tripulante} />
        ))}
      </div>
    </div>
  );
}