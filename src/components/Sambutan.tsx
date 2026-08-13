import { HiOutlineSparkles, HiOutlineAcademicCap, HiOutlineHeart } from "react-icons/hi2";
import pembimbing from "@/assets/pembimbing.jpg";

export function Sambutan() {
  return (
    <section id="sambutan" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,340px)_1fr]">
        <article className="rounded-2xl border border-border bg-card p-8 text-center shadow-elegant">
          <img
            src={pembimbing}
            alt="Foto pembimbing siswa Rayon Cibedug 1"
            loading="lazy"
            width={640}
            height={640}
            className="mx-auto size-36 rounded-full border-4 border-primary object-cover"
          />
          <h3 className="mt-6 text-xl font-semibold text-card-foreground">
            Ust. Ahmad Fauzan, S.Pd.
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">Pembimbing Rayon Cibedug 1</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
              <HiOutlineAcademicCap className="size-4" aria-hidden />
              Pembinaan Karakter
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
              <HiOutlineHeart className="size-4" aria-hidden />
              Bimbingan Konseling
            </span>
          </div>
        </article>

        <article className="rounded-2xl border border-border bg-card p-8 shadow-elegant md:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary">
            <HiOutlineSparkles className="size-4" aria-hidden />
            SAMBUTAN PEMBIMBING
          </span>
          <blockquote className="mt-6 text-2xl font-semibold leading-snug text-card-foreground md:text-3xl">
            &ldquo;Disiplin adalah jembatan antara cita-cita dan
            <span className="text-primary"> pencapaian nyata</span>.&rdquo;
          </blockquote>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Assalamu&apos;alaikum warahmatullahi wabarakatuh. Puji syukur kami
              panjatkan atas hadirnya website Rayon Cibedug 1 sebagai media
              informasi sekaligus sarana mempererat kebersamaan seluruh anggota
              rayon.
            </p>
            <p>
              Rayon bukan sekadar tempat tinggal, melainkan ruang tumbuh tempat
              siswa belajar bertanggung jawab, menghargai waktu, dan menjaga
              kebersihan bersama. Melalui jadwal piket, struktur organisasi, dan
              pembinaan rutin, kami berharap setiap siswa terbiasa dengan
              kedisiplinan yang kelak menjadi bekal hidupnya.
            </p>
            <p>
              Mari jadikan setiap hari di rayon sebagai langkah kecil menuju
              pribadi yang lebih baik.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
