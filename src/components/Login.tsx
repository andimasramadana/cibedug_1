import { HiOutlineEnvelope, HiOutlineLockClosed, HiArrowRightOnRectangle } from "react-icons/hi2";
import { Link } from "@tanstack/react-router";
import logoWikrama from "@/assets/wikrama-logo.png";

export function Login() {
  return (
    <div className="relative flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-20">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-background" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="w-full max-w-md">
        <div className="overflow-hidden rounded-3xl border border-border/50 bg-card/60 shadow-elegant backdrop-blur-xl">
          <div className="p-8">
            <div className="mb-8 flex flex-col items-center text-center">
              <Link to="/" className="mb-4 inline-block">
                <div className="grid size-16 place-items-center rounded-2xl bg-white shadow-sm">
                  <img
                    src={logoWikrama}
                    alt="Logo SMK Wikrama"
                    className="size-10 object-contain drop-shadow-sm"
                  />
                </div>
              </Link>
              <h1 className="text-2xl font-bold tracking-tight text-foreground">
                Selamat Datang Kembali
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Silakan masuk untuk mengakses dasbor Rayon Cibedug 1
              </p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email atau NIS
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-muted-foreground">
                    <HiOutlineEnvelope className="size-5" />
                  </div>
                  <input
                    id="email"
                    type="text"
                    placeholder="Masukkan email atau NIS Anda"
                    className="w-full rounded-xl border border-input bg-background/50 py-3 pl-11 pr-4 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-foreground">
                    Kata Sandi
                  </label>
                  <a href="#" className="text-xs font-medium text-primary hover:underline">
                    Lupa sandi?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-muted-foreground">
                    <HiOutlineLockClosed className="size-5" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-input bg-background/50 py-3 pl-11 pr-4 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:bg-primary/90 active:scale-[0.98]"
              >
                <span>Masuk Sekarang</span>
                <HiArrowRightOnRectangle className="size-4" />
              </button>
            </form>
          </div>
          <div className="border-t border-border/50 bg-muted/30 px-8 py-5 text-center">
            <p className="text-sm text-muted-foreground">
              Belum punya akun?{" "}
              <a href="#" className="font-semibold text-primary hover:underline">
                Hubungi Pembimbing
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
