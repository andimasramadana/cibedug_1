import { HiOutlinePhoto } from "react-icons/hi2";

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80", alt: "Siswa belajar di kelas", title: "Kegiatan Belajar Mengajar" },
  { id: 2, src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80", alt: "Kerja kelompok", title: "Diskusi Kelompok" },
  { id: 3, src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80", alt: "Upacara bendera", title: "Upacara Bendera" },
  { id: 4, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80", alt: "Kegiatan ekstrakurikuler", title: "Pramuka" },
  { id: 5, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80", alt: "Presentasi proyek", title: "Presentasi Proyek" },
  { id: 6, src: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?w=800&q=80", alt: "Lomba 17 Agustus", title: "Lomba Kemerdekaan" },
];

export function Galeri() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-background" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary">
            <HiOutlinePhoto className="size-4" aria-hidden />
            GALERI RAYON
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Momen Kebersamaan
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Dokumentasi kegiatan dan keseharian siswa-siswi Rayon Cibedug 1.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {photos.map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-2xl bg-muted/50 aspect-square">
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
