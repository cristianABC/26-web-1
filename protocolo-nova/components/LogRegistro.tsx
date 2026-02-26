"use client";
import { LogRegistro as LogType } from "@/app/types/mission";

export default function LogRegistro({ logs }: { logs: LogType[] }) {
  return (
    <div className="mt-6 space-y-3">
      <h3 className="text-xs font-mono text-emerald-500/50 uppercase tracking-widest">
        Historial de Telemetría
      </h3>
      
      {logs.length === 0 && (
        <p className="text-xs text-slate-600 italic font-mono">
          Esperando transmisión de datos...
        </p>
      )}

      <div className="max-h-[300px] overflow-y-auto space-y-2 pr-2">
        {logs.map((log) => (
          <div 
            key={log.id} 
            className="border-l-2 border-emerald-500 bg-emerald-500/5 p-3 rounded-r-lg animate-in fade-in slide-in-from-left-2"
          >
            <div className="flex justify-between items-start mb-1">
              <span className="text-[10px] font-mono text-emerald-400">
                T+ {log.timestamp}
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                log.oxigeno < 20 ? "bg-red-500 text-white" : "bg-emerald-500/20 text-emerald-400"
              }`}>
                O2: {log.oxigeno}%
              </span>
            </div>
            <p className="text-sm text-slate-300 font-mono leading-tight">
              {log.comentarios || "Sin observaciones de campo."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}