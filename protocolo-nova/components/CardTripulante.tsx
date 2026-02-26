"use client";
import { Tripulante } from "@/app/types/mission";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Asumiendo que instalaste shadcn dialog
import Image from "next/image";

export default function CardTripulante({ user }: { user: Tripulante }) {
  return (
    <div className="group relative rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition-all hover:border-emerald-500/50">
      {/* Avatar y Datos Básicos */}
      <Image 
        src={'https://picsum.photos/200/300'} 
        alt={user.firstName} 
        width={500}
        height={500}
        className="mb-4 h-32 w-full rounded-lg object-cover grayscale group-hover:grayscale-0" 
      />
      <h3 className="font-mono text-lg font-bold text-emerald-400">
        {user.firstName} {user.lastName}
      </h3>
      <p className="text-xs text-slate-500 uppercase tracking-widest">
        {user.company.title}
      </p>

      {/* 🔴 TAREA ESTUDIANTE: Implementar el Dialog de Detalles */}
      <Dialog>
        <DialogTrigger asChild>
          <button className="mt-4 w-full rounded bg-emerald-500/10 py-2 text-xs font-bold text-emerald-500 transition-colors hover:bg-emerald-500 hover:text-black">
            VER EXPEDIENTE
          </button>
        </DialogTrigger>
        
        <DialogContent className="bg-slate-900 border-emerald-500 text-slate-100">
          <DialogHeader>
            <DialogTitle className="text-emerald-500 font-mono">
              EXPEDIENTE_DE_MISION: {user.id}
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-4">
              <Image 
                alt='user image' 
                src={'https://picsum.photos/200/300'} 
                width={500}
                height={500}
                className="h-20 w-20 rounded-full border-2 border-emerald-500" />
              <div>
                <p className="text-xl font-bold">{user.firstName} {user.lastName}</p>
                <p className="text-sm text-emerald-500/70">{user.email}</p>
              </div>
            </div>
            
            <div className="rounded bg-black/50 p-4 font-mono text-xs space-y-2">
              <p><span className="text-emerald-500 text-bold">RANGO:</span> {user.company.title}</p>
              <p><span className="text-emerald-500 text-bold">ESTADO:</span> EN_ORBITA</p>
              <p className="italic text-slate-500 border-t border-slate-800 pt-2 mt-2">
                Los datos biométricos indican estabilidad emocional para la misión Alpha.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}