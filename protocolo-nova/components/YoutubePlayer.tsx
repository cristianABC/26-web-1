import React, { useState, useEffect } from 'react';

const YouTubePlayer = ({ videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ" }) => {
  const [timeLeft, setTimeLeft] = useState(5);
  const [canSkip, setCanSkip] = useState(false);
  const [isAdSkipped, setIsAdSkipped] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isAdSkipped) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanSkip(true);
    }
  }, [timeLeft, isAdSkipped]);

  const handleSkip = () => {
    setIsAdSkipped(true);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video bg-black overflow-hidden rounded-lg shadow-2xl">
      {!isAdSkipped ? (
        // CAPA DEL ANUNCIO
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-900">
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold mb-2">Publicidad de Prueba</h2>
            <p className="text-gray-400">Tu video comenzará pronto...</p>
          </div>

          {/* Botón de Omitir */}
          <div className="absolute bottom-12 right-0">
            {canSkip ? (
              <button
                onClick={handleSkip}
                className="bg-black/70 hover:bg-black text-white py-3 px-6 border-l-4 border-yellow-500 transition-all flex items-center gap-2"
              >
                Omitir anuncio
                <span className="text-xl">➔</span>
              </button>
            ) : (
              <div className="bg-black/50 text-white py-3 px-6 border-l-4 border-gray-500">
                Puedes omitir en {timeLeft}...
              </div>
            )}
          </div>
        </div>
      ) : (
        // CAPA DEL VIDEO REAL
        <iframe
          className="w-full h-full"
          src={`${videoUrl}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YouTubePlayer;