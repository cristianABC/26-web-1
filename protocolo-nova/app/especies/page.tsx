import { Character } from "../types/character";

export default async function EspeciesPersonajesPage({
  searchParams,
}: {
  searchParams: Promise<{ species?: string; page?: string }>; // En Next 15/16, searchParams es una Promise 
}) {
  const { species, page } = await searchParams;

  // QUERY PARAMS URL?page=5&specie=alien

  // 1. Construimos la URL de la API dinámicamente
  const currentPage = page || "1"
  const speciesFilter = species ? `&species=${species}` : ''
  const apiUrl = 
  `https://rickandmortyapi.com/api/character?page=${currentPage}${speciesFilter}`
  // 2. SSR: Fetch de datos en el servidor
  const res = await fetch(apiUrl);
  const characters = await res.json()
  // 3. Mapeo para que aparezcan en pantalla ✅

  return (
    <main className="p-8">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-mono text-emerald-500 uppercase tracking-tighter">
          Archivo de Biomas: {species || "Todos"}
        </h1>
        
        {/* Filtros Rápidos (Query Params) */}
        <div className="flex gap-2">
          <a href="?species=human" className="border border-emerald-500 px-3 py-1 text-xs hover:bg-emerald-500/20">HUMANOS</a>
          <a href="?species=alien" className="border border-emerald-500 px-3 py-1 text-xs hover:bg-emerald-500/20">ALIENS</a>
          <a href="/personajes" className="border border-slate-700 px-3 py-1 text-xs">RESET</a>
        </div>
      </header>

      {/* Grid de Personajes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {characters.results?.map((char: Character) => (
          <div key={char.id} className="border border-slate-800 bg-slate-900/50 p-4 rounded-xl">
             <img src={char.image} alt={char.name} className="w-full grayscale hover:grayscale-0 transition-all mb-4 rounded-lg" />
             <h3 className="text-emerald-400 font-bold">{char.name}</h3>
             <p className="text-[10px] text-slate-500 uppercase">{char.species} - {char.status}</p>
          </div>
        ))}
      </div>

      {/* Paginación (Query Params) */}
      <div className="mt-10 flex gap-4 justify-center">
        {characters.info?.prev && (
          <a href={`?page=${Number(currentPage) - 1}${speciesFilter}`} className="bg-slate-800 p-2 text-xs font-mono italic">
            {"<< SECTOR_ANTERIOR"}
          </a>
        )}
        {characters.info?.next && (
          <a href={`?page=${Number(currentPage) + 1}${speciesFilter}`} className="bg-emerald-600 p-2 text-xs font-mono text-black font-bold">
            {"SIGUIENTE_SECTOR >>"}
          </a>
        )}
      </div>
    </main>
  );
}