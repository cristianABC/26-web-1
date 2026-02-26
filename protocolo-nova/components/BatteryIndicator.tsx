"use client";
import { useState, useEffect } from "react";

export default function BatteryIndicator() {
  // 1. Estado local del hardware
  const [battery, setBattery] = useState({
    level: 1,
    charging: true,
  });


  // 2. Conexión al hardware (Efecto de lado)
  useEffect(() => {
    // Verificamos si la API existe en el navegador
    if (!("getBattery" in navigator)) {
      console.warn("La Battery API no está disponible en este navegador.");
      return;
    }

    // @ts-ignore
    navigator.getBattery().then((bat: any) => {
      const updateBattery = () => {
        setBattery({
          level: bat.level,
          charging: bat.charging,
        });
      };

      updateBattery(); // Carga inicial

      // Escuchamos cambios en tiempo real
      bat.addEventListener("levelchange", updateBattery);
      bat.addEventListener("chargingchange", updateBattery);

      // Limpieza de eventos al desmontar el componente
      return () => {
        bat.removeEventListener("levelchange", updateBattery);
        bat.removeEventListener("chargingchange", updateBattery);
      };
    });
  }, []);

  // 3. Lógica de UI basada en condiciones
  const isLowPower = battery.level <= 0.2;
  const percentage = Math.round(battery.level * 100);

  return (
    <div className={`flex items-center gap-4 font-mono p-2 border ${
      isLowPower ? "border-red-500 bg-red-950/20" : "border-emerald-500 bg-emerald-950/10"
    } rounded-lg transition-colors`}>
      
      <div className="flex flex-col items-end">
        <span className={`text-[10px] ${isLowPower ? "text-red-400" : "text-emerald-400"}`}>
          {battery.charging ? "⚡ NÚCLEO_CARGANDO" : "🔋 MODO_RESERVAS"}
        </span>
        <span className={`text-xl font-black ${isLowPower ? "text-red-500" : "text-emerald-500"}`}>
          {percentage}%
        </span>
      </div>

      {/* Representación visual dinámica */}
      <div className="w-10 h-16 border-2 border-current relative p-1 flex flex-col-reverse">
        <div 
          className={`w-full transition-all duration-500 ${isLowPower ? "bg-red-500" : "bg-emerald-500"}`}
          style={{ height: `${percentage}%` }}
        />
        {/* Parte superior de la pila */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-current" />
      </div>

      {/* Renderizado condicional de alerta visual */}
      {isLowPower && !battery.charging && (
        <div className="absolute top-20 right-5 bg-red-600 text-white text-[10px] px-2 py-1 animate-bounce rounded shadow-lg shadow-red-500/50">
          ⚠️ ALERTA: ENERGÍA CRÍTICA
        </div>
      )}
    </div>
  );
}
