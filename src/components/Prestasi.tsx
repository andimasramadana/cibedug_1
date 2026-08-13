import { HiOutlineTrophy, HiOutlineSparkles } from "react-icons/hi2";

const prestasi = [
  { id: 1, juara: "Juara 1", lomba: "Lomba Web Design Tingkat Provinsi", tahun: "2025", nama: "M. Yurizki & Tim" },
  { id: 2, juara: "Juara 2", lomba: "Olimpiade Matematika Nasional", tahun: "2024", nama: "Nesya" },
  { id: 3, juara: "Harapan 1", lomba: "Lomba Debat Bahasa Inggris", tahun: "2024", nama: "Gibran & Naufal" },
  { id: 4, juara: "Juara Umum", lomba: "Porseni SMK Wikrama", tahun: "2023", nama: "Rayon Cibedug 1" },
];

export function Prestasi() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-amber-500">
            <HiOutlineTrophy className="size-4" aria-hidden />
            PENGHARGAAN
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Prestasi Siswa
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Berbagai pencapaian luar biasa dari siswa-siswi berprestasi Rayon Cibedug 1.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {prestasi.map((item) => (
            <div key={item.id} className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/60 p-8 shadow-elegant backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-amber-500/30">
              <div className="absolute -right-6 -top-6 text-amber-500/10">
                <HiOutlineTrophy className="size-32" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 text-sm font-semibold text-amber-600 dark:text-amber-400">
                  <HiOutlineSparkles className="size-4" />
                  {item.juara}
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground">{item.lomba}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Diraih oleh: <span className="font-medium text-foreground">{item.nama}</span></p>
                <p className="mt-4 text-sm font-medium text-muted-foreground">{item.tahun}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
