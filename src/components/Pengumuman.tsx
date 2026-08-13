import { HiOutlineMegaphone, HiOutlineCalendar, HiArrowRight } from "react-icons/hi2";

const pengumuman = [
  { id: 1, title: "Persiapan Penilaian Akhir Semester (PAS)", date: "12 November 2026", desc: "Diberitahukan kepada seluruh siswa Rayon Cibedug 1 agar segera menyelesaikan seluruh tugas dan portofolio sebelum ujian PAS dimulai." },
  { id: 2, title: "Kerja Bakti Rutin Rayon", date: "05 November 2026", desc: "Minggu ini akan diadakan kerja bakti membersihkan area rayon dan mushola. Harap membawa alat kebersihan masing-masing." },
  { id: 3, title: "Pengumpulan Kas Rayon", date: "01 November 2026", desc: "Mengingatkan kembali untuk iuran kas rayon bulan November sudah bisa diserahkan ke bendahara rayon." },
];

export function Pengumuman() {
  return (
    <section className="relative py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-blue-500">
              <HiOutlineMegaphone className="size-4" aria-hidden />
              INFORMASI TERBARU
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Papan Pengumuman
            </h2>
          </div>
        </div>

        <div className="grid gap-6">
          {pengumuman.map((item) => (
            <article key={item.id} className="group relative flex flex-col gap-4 rounded-3xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-elegant md:flex-row md:items-center md:gap-8 md:p-8">
              <div className="flex w-48 shrink-0 flex-col gap-1 text-sm text-muted-foreground md:border-r md:border-border/60">
                <div className="flex items-center gap-1.5">
                  <HiOutlineCalendar className="size-4" />
                  <span>Tanggal Post:</span>
                </div>
                <span className="font-medium text-foreground">{item.date}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
              <div className="shrink-0">
                <button className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                  Baca detail
                  <HiArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
