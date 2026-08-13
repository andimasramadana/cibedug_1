import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="beranda" className="relative isolate flex min-h-screen items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Suasana lingkungan sekolah Rayon Cibedug 1"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay backdrop-blur-sm" />

      <div className="mx-auto w-full max-w-4xl px-6 py-32 text-center">
        <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary-glow">
          SELAMAT DATANG DI
        </span>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-hero-foreground md:text-6xl">
          Website <span className="text-primary-glow">Rayon Cibedug 1</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-hero-muted md:text-lg">
          Wadah pembentukan karakter siswa yang disiplin, berakhlak, dan
          bertanggung jawab melalui kegiatan kerayonan, pembinaan harian, serta
          kebersamaan yang tumbuh setiap hari.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#jadwal"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90"
          >
            Lihat Jadwal Piket
          </a>
          <a
            href="#sambutan"
            className="rounded-full border border-hero-foreground/30 px-6 py-3 text-sm font-semibold text-hero-foreground transition-colors hover:bg-hero-foreground/10"
          >
            Sambutan Pembimbing
          </a>
        </div>
      </div>
    </section>
  );
}
