import React, { useEffect, useState } from "react";

interface LoadingScreenProps {
  isLoading: boolean;
  message?: string;
}

export function LoadingScreen({
  isLoading,
  message = "Memuat halaman...",
}: LoadingScreenProps) {
  const [shouldRender, setShouldRender] = useState(isLoading);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let holdTimer: NodeJS.Timeout;
    let animationTimer: NodeJS.Timeout;

    if (isLoading) {
      setShouldRender(true);
      setIsExiting(false);
    } else if (shouldRender) {
      const holdDuration = 2000; 

      holdTimer = setTimeout(() => {
        setIsExiting(true);
        
        animationTimer = setTimeout(() => {
          setShouldRender(false);
          setIsExiting(false);
        }, 2000); 
      }, holdDuration);
    }

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(animationTimer);
    };
  }, [isLoading, shouldRender]);

  if (!shouldRender) return null;

  return (
    <>
      <style>{`
        @keyframes slide-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .animate-slide-right {
          animation: slide-right 1.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>

      {/* Tambahkan backface-visibility-hidden untuk mencegah glitch putih */}
      <div className="fixed inset-0 z-[9999] pointer-events-none select-none overflow-hidden backface-visibility-hidden">
        
        {/* 
          PERBAIKAN UTAMA:
          1. Ganti bg-background/95 backdrop-blur-2xl menjadi murni bg-background agar solid.
          2. Tambahkan transform-gpu dan will-change-transform agar di-render oleh VGA/GPU.
        */}
        <div
          className={`absolute inset-0 bg-background flex flex-col items-center justify-center transform-gpu will-change-transform transition-transform duration-[2000ms] ease-[cubic-bezier(0.6,0.05,0.2,1)] ${
            isExiting
              ? "translate-y-full rounded-t-[50%]"
              : "translate-y-0 rounded-none"
          }`}
        >
          {/* Ambient Glow Tipis */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse delay-700" />

          {/* KONTEN UTAMA */}
          <div
            className={`flex flex-col items-center gap-8 transition-all duration-[1500ms] ease-in-out ${
              isExiting
                ? "scale-75 opacity-0 translate-y-10"
                : "scale-100 opacity-100 translate-y-0"
            }`}
          >
            {/* Logo Wikrama */}
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-4 rounded-full bg-primary/10 blur-xl animate-pulse" />
              <img 
                src="/wikrama-logo.png" 
                alt="Logo Wikrama" 
                className="w-28 h-28 object-contain relative z-10 drop-shadow-2xl"
              />
            </div>

            {/* Teks Status & Progress Bar */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center gap-1 text-center">
                <h3 className="font-bold text-2xl tracking-wide text-foreground drop-shadow-md">
                  Rayon Cibedug 1
                </h3>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  {message}
                </p>
              </div>

              <div className="w-64 h-1.5 bg-primary/20 overflow-hidden rounded-full relative">
                <div className="absolute top-0 left-0 h-full w-1/3 bg-primary rounded-full animate-slide-right shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
              </div>
            </div>
          </div>

          <div 
            className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-1000 ${
              isExiting ? "opacity-100" : "opacity-0"
            }`} 
          />
        </div>
      </div>
    </>
  );
}