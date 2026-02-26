export default async function EspecieDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Aquí el parámetro 'slug' es parte de la URL, no del ?query
  // Path params species/Alien/ 

  //1. Consumir la api GET https://rickandmortyapi.com/api/character/?species=${slug}
  //2. Asignar la respuesta 
  //3. Mostrar la UI   
  
  

  return (
    <div className="p-10">
      <h2 className="text-3xl font-black text-emerald-500 uppercase mb-6">
        Análisis de Especie: {slug}
      </h2>
      {/* Mapeo similar al anterior... */}
    </div>
  );
}