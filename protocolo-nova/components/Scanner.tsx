"use client";
import { useEffect, useRef, useState } from "react";

export default function Scanner() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 🔴 TAREA ESTUDIANTE:
    // 1. Crear función asíncrona para pedir acceso a cámara
    // 2. Usar navigator.mediaDevices.getUserMedia({ video: true })
    // 3. Asignar el stream a videoRef.current.srcObject
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl border-2 border-emerald-500/20 bg-black aspect-video">
      <div className="scan-line" />
      <video 
        ref={videoRef} 
        autoPlay 
        muted 
        className="w-full h-full object-cover opacity-60" 
      />
      <div className="absolute bottom-4 left-4 font-mono text-xs text-emerald-500">
        SENSOR_ACTIVO // SEÑAL_ESTABLE
      </div>
    </div>
  );
}