import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  HiOutlineHome,
  HiOutlineChatBubbleLeftRight,
  HiOutlineUserGroup,
  HiOutlineCalendarDays,
  HiOutlinePhone,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineComputerDesktop,
  HiChevronDown,
  HiBars3,
} from "react-icons/hi2";
import { useTheme, type Theme } from "./ThemeProvider";

import logoWikrama from "@/assets/wikrama-logo.png";

const links = [
  { label: "Beranda", href: "/", icon: HiOutlineHome },
  { label: "Sambutan", href: "/sambutan", icon: HiOutlineChatBubbleLeftRight },
  { label: "Struktur", href: "/struktur", icon: HiOutlineUserGroup },
  { label: "Jadwal", href: "/jadwal", icon: HiOutlineCalendarDays },
  { label: "Kontak", href: "/kontak", icon: HiOutlinePhone },
];

const themes: { value: Theme; label: string; icon: typeof HiOutlineSun }[] = [
  { value: "light", label: "Terang", icon: HiOutlineSun },
  { value: "dark", label: "Gelap", icon: HiOutlineMoon },
  { value: "system", label: "Sistem", icon: HiOutlineComputerDesktop },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const Active = themes.find((t) => t.value === theme)?.icon ?? HiOutlineMoon;

  return (
    <header className="fixed inset-x-4 top-4 z-50 md:inset-x-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-border/60 bg-card/60 px-4 py-2.5 shadow-elegant backdrop-blur-xl md:px-6">
        <Link to="/" className="flex items-center gap-2.5 pl-1">
          <img
            src={logoWikrama}
            alt="Logo SMK Wikrama Bogor"
            className="size-8 object-contain drop-shadow-sm"
          />
          <span className="text-base font-semibold tracking-tight text-foreground">
            Cibedug 1
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map(({ label, href, icon: Icon }) => (
            <li key={href}>
              <Link
                to={href as any}
                activeProps={{ className: "bg-accent text-foreground font-semibold" }}
                className="flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <Icon className="size-4" aria-hidden />
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="relative" ref={ref}>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Pilih tema"
              className="flex items-center gap-1.5 rounded-full border border-border/70 bg-secondary/60 px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent"
            >
              <Active className="size-4" aria-hidden />
              <HiChevronDown className="size-3.5 opacity-70" aria-hidden />
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-2xl border border-border bg-popover p-1 shadow-elegant">
                {themes.map(({ value, label, icon: Icon }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setTheme(value);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors hover:bg-accent ${
                      theme === value
                        ? "bg-accent font-medium text-primary"
                        : "text-popover-foreground"
                    }`}
                  >
                    <Icon className="size-4" aria-hidden />
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/login"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90"
          >
            Masuk
          </Link>

          <button
            type="button"
            aria-label="Buka menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full border border-border/70 text-foreground lg:hidden"
          >
            <HiBars3 className="size-5" aria-hidden />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="mx-auto mt-2 grid max-w-6xl gap-1 rounded-3xl border border-border/60 bg-card/80 p-2 backdrop-blur-xl lg:hidden">
          {links.map(({ label, href, icon: Icon }) => (
            <li key={href}>
              <Link
                to={href as any}
                onClick={() => setMenuOpen(false)}
                activeProps={{ className: "bg-accent text-foreground font-semibold" }}
                className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                <Icon className="size-4" aria-hidden />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
