import { ArrowUp } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Emblem from "./Emblem";
import logoRdV from "../../assets/logordv.png";

export default function Footer() {
  return (
    <footer className="bg-abyss py-14 text-white">
      <div className="container-page flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <img
            src={logoRdV}
            alt="Logo Iglesia Ríos de Vida"
            className="size-14 shrink-0 rounded-lg"
          />
          <div>
            <p className="font-display text-2xl font-extrabold uppercase tracking-tight">
              Iglesia Ríos de Vida
            </p>
            <p className="mt-2 max-w-sm text-lg leading-snug text-periwinkle">
              Una verdad que transformó la historia y sigue transformando vidas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/riosdevidamonteros/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Instagram de Iglesia Ríos de Vida"
            >
              <FaInstagram size={20} aria-hidden="true" />
            </a>
          </div>
        </div>

        <p className="mt-4 text-xs text-periwinkle/40 leading-none">
          Desarrollado por{" "}
          <a
            href="https://www.instagram.com/elroisystems/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-periwinkle/70 underline underline-offset-2 hover:text-periwinkle transition-colors"
          >
            ELRoi Systems
          </a>
        </p>

        <a
          href="#inicio"
          className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-5 py-3 font-display text-base font-bold text-white transition-colors hover:bg-white hover:text-abyss md:self-auto"
        >
          <ArrowUp size={18} aria-hidden="true" />
          Volver al inicio
        </a>
      </div>
    </footer>
  );
}
