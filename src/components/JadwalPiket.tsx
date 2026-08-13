import { useEffect, useState } from "react";
import { HiOutlineCalendarDays, HiOutlineCheckCircle } from "react-icons/hi2";

const JADWAL: Record<string, string[]> = {
  Senin: [
    "Nesya",
    "Maurida",
    "Aldawiyah",
    "Gilang",
    "M. Ridho",
    "M. Sidqi",
    "Aisyh Dianda",
  ],
  Selasa: [
    "Alizya",
    "Jihanita",
    "Gibran",
    "Naufal",
    "Saffa Nashwa",
    "Kiandra",
    "Mayang",
  ],
  Rabu: [
    "M. Yurizki",
    "Vadli Arrahman",
    "Qaireen",
    "A. Luthfi Nizam",
    "Farrel",
    "M. Luthfi",
    "M. Rezky",
  ],
  Kamis: [
    "Fujiyani S",
    "Zalva",
    "Fadillah M",
    "Nazry Ilyas",
    "Rusya Jabr",
    "M. Kairo",
    "Azka",
  ],
  Jumat: [
    "Kalista",
    "Teuku adhilla",
    "M. Kadafi",
    "M. Fakhri",
    "Dzakwan",
    "Shaffa Azzahra",
    "Andimas",
  ],
};

const HARI = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

export function JadwalPiket() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  const namaHari = now ? HARI[now.getDay()] : null;
  const petugasHariIni = namaHari ? JADWAL[namaHari] : undefined;
  const tanggal = now
    ? now.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <section id="jadwal" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary">
          <HiOutlineCalendarDays className="size-4" aria-hidden />
          JADWAL PIKET
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Piket Harian Rayon
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">{tanggal || "Memuat tanggal..."}</p>
      </div>

      <div className="mt-8 text-center">
        {petugasHariIni ? (
          <p className="text-base text-foreground md:text-lg">
            Piket hari ini adalah:{" "}
            <span className="font-semibold text-primary">
              {petugasHariIni.join(", ")}
            </span>
          </p>
        ) : (
          <p className="text-base text-muted-foreground md:text-lg">
            Memuat jadwal piket hari ini...
          </p>
        )}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(JADWAL).map(([hari, siswa]) => {
          const aktif = hari === namaHari;
          return (
            <article
              key={hari}
              className={`rounded-2xl border p-6 shadow-elegant transition-transform hover:-translate-y-1 ${
                aktif
                  ? "border-primary bg-primary/15 ring-2 ring-primary/40"
                  : "border-border bg-card"
              }`}
            >
              <header className="flex items-center justify-between">
                <h3
                  className={`text-lg font-semibold ${
                    aktif ? "text-primary" : "text-card-foreground"
                  }`}
                >
                  {hari}
                </h3>
                {aktif && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
                    <HiOutlineCheckCircle className="size-3.5" aria-hidden />
                    Hari Ini
                  </span>
                )}
              </header>
              <ol className="mt-4 space-y-2">
                {siswa.map((nama, i) => (
                  <li
                    key={nama}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span
                      className={`grid size-6 shrink-0 place-items-center rounded-full text-[11px] font-semibold ${
                        aktif
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {i + 1}
                    </span>
                    {nama}
                  </li>
                ))}
              </ol>
            </article>
          );
        })}
      </div>
    </section>
  );
}
