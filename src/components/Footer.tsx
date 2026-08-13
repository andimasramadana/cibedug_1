import logoWikrama from "@/assets/wikrama-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center">
        <div className="flex items-center gap-2.5">
          <img src={logoWikrama} alt="Logo SMK Wikrama Bogor" className="size-7 object-contain" />
          <span className="text-base font-semibold text-foreground">Rayon Cibedug 1</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Wadah pembentukan karakter siswa yang disiplin dan bertanggung jawab.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Rayon Cibedug 1. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
