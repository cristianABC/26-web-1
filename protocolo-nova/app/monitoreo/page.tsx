// TAREA: Construir un Layout de 12 columnas
// Col-span-5 para el Formulario | Col-span-7 para el Scanner
// Snippet de page prc 

import Formulario from "@/components/Formulario";
import Scanner from "@/components/Scanner";
import LogRegistro from "@/components/LogRegistro";
import { LogRegistro as LogType } from "@/app/types/mission";


export default function MonitoreoPage() {
  return (
    <div className="p-10">
      <div className="font-mono text-emerald-500 text-5xl">Estacion especial alpha</div>
      <div className="grid grid-cols-1 h-screen md:grid-cols-2 mt-10">
        <div>
            <Formulario/>
            <LogRegistro logs={[]}/>
        </div>
        <div>
            <Scanner/>
        </div>
      </div>
    </div>
  );
}