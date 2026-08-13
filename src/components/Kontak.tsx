import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
} from "react-icons/hi2";

export function Kontak() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-background" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Hubungi Kami
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Mari Jalin <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Komunikasi</span>
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Punya pertanyaan atau masukan untuk Rayon Cibedug 1? Jangan ragu untuk menghubungi kami melalui form atau kontak di bawah ini.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-border/50 bg-card/40 p-8 shadow-elegant backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-foreground">Informasi Kontak</h3>
              <p className="mt-2 text-sm text-muted-foreground mb-8">
                Kami siap membantu menjawab pertanyaan Anda dengan cepat.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <HiOutlineMapPin className="size-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Alamat</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      SMK Wikrama Bogor<br />
                      Jl. Raya Wangun No.21, Tajur, Bogor Timur
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <HiOutlinePhone className="size-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Telepon</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      (0251) 8242411
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <HiOutlineEnvelope className="size-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      cibedug1@smkwikrama.sch.id
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-border/50 bg-card/60 p-8 shadow-elegant backdrop-blur-xl">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nama Lengkap
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama Anda"
                  className="rounded-xl border border-input bg-background/50 px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="alamat@email.com"
                  className="rounded-xl border border-input bg-background/50 px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tulis pesan Anda di sini..."
                  className="resize-none rounded-xl border border-input bg-background/50 px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:bg-primary/90 active:scale-[0.98]"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
