"use client";
import { useForm } from "react-hook-form";

interface FormValues {
  oxigeno: number;
  presion: number;
  comentarios: string;
  estado_motor: string; // Añadimos uno extra para que vean un Select
}

export default function Formulario() {
  // 1. Configuramos los valores por defecto
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      oxigeno: 95,
      presion: 14.7, // Presión estándar a nivel del mar
      comentarios: "Sistemas nominales...",
      estado_motor: "estable"
    }
  });

  const alEnviar = (data: FormValues) => {
    console.log("Datos recibidos de la cabina:", data);
    alert("🚀 Telemetría enviada con éxito");
    // reset(); // Opcional: si quieres que vuelva a los defaultValues tras enviar
  };

  return (
    <form onSubmit={handleSubmit(alEnviar)} className="space-y-4">
      {/* OXÍGENO */}
      <div>
        <label className="text-xs font-mono text-emerald-500">Nivel de Oxígeno (%)</label>
        <input 
          type="number" 
          {...register("oxigeno", { valueAsNumber: true })} // Importante para que TS no se queje
          className="w-full bg-black border border-emerald-900/50 p-2 rounded text-emerald-400 focus:border-emerald-500 outline-none"
        />
      </div>

      {/* PRESIÓN */}
      <div>
        <label className="text-xs font-mono text-emerald-500">Presión (PSI)</label>
        <input 
          type="number" 
          step="0.1"
          {...register("presion", { valueAsNumber: true })}
          className="w-full bg-black border border-emerald-900/50 p-2 rounded text-emerald-400 focus:border-emerald-500 outline-none"
        />
      </div>

      {/* ESTADO (Select) */}
      <div>
        <label className="text-xs font-mono text-emerald-500">Estado del Motor</label>
        <select 
          {...register("estado_motor")}
          className="w-full bg-black border border-emerald-900/50 p-2 rounded text-emerald-400 outline-none"
        >
          <option value="estable">Estable</option>
          <option value="alerta">Alerta Crítica</option>
          <option value="mantenimiento">En Mantenimiento</option>
        </select>
      </div>

      {/* COMENTARIOS */}
      <div>
        <label className="text-xs font-mono text-emerald-500">Bitácora de Vuelo</label>
        <textarea 
          {...register("comentarios")}
          className="w-full bg-black border border-emerald-900/50 p-2 rounded text-emerald-400 h-20 outline-none"
        />
      </div>

      <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-black font-bold py-2 rounded uppercase text-xs tracking-widest transition-all">
        Sincronizar Telemetría
      </button>
    </form>
  );
}