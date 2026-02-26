"use client";
import { useEffect, useState } from "react";
import { Tripulante } from "../types/mission";
import CardTripulante from "@/components/CardTripulante";

export default function TripulacionPage() {
  // 🔴 TAREA ESTUDIANTE:
  // 1. Crear estado [tripulantes, setTripulantes]
  const [tripulantes, setTripulantes] = useState<Tripulante[]>([]);
  // 2. useEffect para llamar a 'https://dummyjson.com/users'
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://dummyjson.com/users')
      const data = await response.json();
      console.log(data.users);
      setTripulantes(data.users.filter((user: Tripulante, index: number)=> index <= 10))
    }

    fetchUsers();
  }, [])
  
  // 3. Mapear los datos a componentes Card

  return (
    <div className="p-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-emerald-500 mb-8">MANIFIESTO DE TRIPULACIÓN</h1>
        <p className="mt-2 font-bold text-emerald-500">{tripulantes.length} tripulantes</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Renderizado de Cards aquí */}
        
{tripulantes.map(tripulante => <CardTripulante key={tripulante.id} user={tripulante}/>)}
      </div>
    </div>
  );
}