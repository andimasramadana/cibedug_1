import {
  HiOutlineUser,
  HiOutlineUsers,
  HiOutlineClipboardDocumentList,
  HiOutlineBanknotes,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineBookOpen,
} from "react-icons/hi2";

type Person = { role: string; name: string; icon: typeof HiOutlineUser };

const pimpinan: Person[] = [
  { role: "Pembimbing Siswa", name: "Dede Hermansyah", icon: HiOutlineShieldCheck },
];

const inti: Person[] = [
  { role: "Ketua Rayon", name: "M. Yurizki", icon: HiOutlineUser },
  { role: "Wakil Ketua", name: "Dzakwan Nur Aqli", icon: HiOutlineUsers },
];

const divisi: Person[] = [
  { role: "Sekretaris", name: "Alif Rahman", icon: HiOutlineClipboardDocumentList },
  { role: "Bendahara", name: "Hafiz Ramadhan", icon: HiOutlineBanknotes },
  { role: "Divisi Kebersihan", name: "Yusuf Adnan", icon: HiOutlineSparkles },
  { role: "Divisi Keamanan", name: "Bagas Pratama", icon: HiOutlineShieldCheck },
  { role: "Divisi Ibadah", name: "Naufal Hakim", icon: HiOutlineBookOpen },
  { role: "Divisi Olahraga", name: "Dimas Saputra", icon: HiOutlineUsers },
];

function Card({ person, highlight }: { person: Person; highlight?: boolean }) {
  const Icon = person.icon;
  return (
    <div
      className={`rounded-2xl border p-5 text-center shadow-elegant transition-transform hover:-translate-y-1 ${
        highlight
          ? "border-primary/50 bg-primary/10"
          : "border-border bg-card"
      }`}
    >
      <span
        className={`mx-auto grid size-11 place-items-center rounded-full ${
          highlight ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
        }`}
      >
        <Icon className="size-5" aria-hidden />
      </span>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">
        {person.role}
      </p>
      <p className="mt-1 text-sm font-medium text-card-foreground">{person.name}</p>
    </div>
  );
}

export function Struktur() {
  return (
    <section id="struktur" className="scroll-mt-28 bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary">
            ORGANISASI
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Struktur Rayon Cibedug 1
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Setiap pengurus memiliki peran untuk menjaga ketertiban dan
            kenyamanan seluruh anggota rayon.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <div className="mx-auto max-w-xs">
            {pimpinan.map((p) => (
              <Card key={p.role} person={p} highlight />
            ))}
          </div>
          <div className="mx-auto h-8 w-px bg-border" aria-hidden />
          <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
            {inti.map((p) => (
              <Card key={p.role} person={p} />
            ))}
          </div>
          <div className="mx-auto h-8 w-px bg-border" aria-hidden />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {divisi.map((p) => (
              <Card key={p.role} person={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
