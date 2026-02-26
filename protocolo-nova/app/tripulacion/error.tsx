"use client"; // Obligatorio

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="p-10 border-2 border-red-500 bg-red-950/20 rounded-xl text-center">
      <h2 className="text-2xl font-black text-red-500 mb-4 uppercase">
        ⚠️ Fallo Crítico de Sistema
      </h2>
      <p className="text-red-200 font-mono text-sm mb-6">
        Causa: {error.message || "Interferencia en la señal del sector"}
      </p>
      <button
        onClick={() => reset()} // Intenta renderizar la ruta de nuevo
        className="px-6 py-2 bg-red-600 text-white font-bold hover:bg-red-500 transition-colors"
      >
        REINICIAR_SISTEMAS
      </button>
    </div>
  );
}