import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../utils/data";
import logoRdV from "../../assets/logordv.png";

export default function Navbar() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(NAV_LINKS[0].href);

  // Compacta la barra y marca la sección visible
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
      let current = NAV_LINKS[0].href;
      for (const { href } of NAV_LINKS) {
        const el = document.getElementById(href.slice(1));
        if (el && el.getBoundingClientRect().top <= 140) current = href;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Menú móvil: Escape lo cierra y se bloquea el scroll de fondo
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const goTo = (event, href) => {
    event.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    }, 80);
  };

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-abyss/90 py-2.5 shadow-lg shadow-abyss/20 backdrop-blur-md" : "bg-transparent py-4"
      }`}
    >
      <div className="container-page flex items-center justify-between">
        <a
          href="#inicio"
          onClick={(e) => goTo(e, "#inicio")}
          className="flex items-center gap-2.5 rounded-full font-display font-bold text-white"
        >
          <img
            src={logoRdV}
            alt="Logo Iglesia Ríos de Vida"
            className="size-8 shrink-0 rounded-lg"
          />
          <span className="text-base leading-none">Ríos de Vida</span>
        </a>

        {/* Escritorio */}
        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => goTo(e, href)}
              aria-current={active === href ? "true" : undefined}
              className={`rounded-full px-4 py-2 font-display text-[0.95rem] font-medium transition-colors ${
                active === href ? "bg-white text-abyss" : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Botón hamburguesa animado */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="relative grid size-11 place-items-center rounded-full bg-white/10 text-white md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "x" : "menu"}
              initial={reduce ? false : { rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="grid place-items-center"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

    </header>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-movil"
            aria-label="Menú móvil"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-abyss px-6 pt-20 md:hidden"
          >
            <ul className="space-y-2">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.li
                  key={href}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 + i * 0.05 }}
                >
                  <a
                    href={href}
                    onClick={(e) => goTo(e, href)}
                    className={`block rounded-2xl px-4 py-3 font-display text-3xl font-bold ${
                      active === href ? "bg-white text-abyss" : "text-white"
                    }`}
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
