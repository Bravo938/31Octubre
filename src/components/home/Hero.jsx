import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Emblem from "./Emblem";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  // Secuencia de entrada: es el único momento "orquestado" de la página
  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  return (
    <section
      id="inicio"
      className="grain relative isolate flex min-h-svh flex-col justify-end overflow-hidden bg-cobalt pb-10 pt-28 text-white md:pb-16"
    >
      {/* Emblema gigante que asoma por el borde y gira muy despacio */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 -z-10 size-[34rem] -translate-y-1/2 text-blush opacity-40 sm:-right-28 md:-right-24 md:size-[46rem] lg:size-[54rem]"
      >
        <Emblem className="animate-rotate-slow size-full" />
      </div>

      <div className="container-page">
        <h1 className="font-extrabold uppercase">
          <span className="block overflow-hidden">
            <motion.span
              className="block pt-2 text-[clamp(9rem,42vw,22rem)] leading-[0.86] tracking-tighter"
              initial={reduce ? false : { y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: EASE }}
            >
              31
            </motion.span>
          </span>
          <motion.span
            className="block text-[clamp(2rem,9.5vw,6rem)] leading-none tracking-tight"
            {...rise(0.45)}
          >
            de octubre
          </motion.span>
          <motion.span
            className="mt-6 block max-w-3xl text-[clamp(1.35rem,3.6vw,2.4rem)] font-bold leading-[1.1] tracking-tight text-blush"
            {...rise(0.6)}
          >
            La historia de una reforma que cambió la iglesia.
          </motion.span>
        </h1>

        <div className="mt-8 grid items-end gap-8 md:grid-cols-[minmax(0,34rem)_auto] md:justify-between">
          <motion.p className="text-lg leading-relaxed text-periwinkle md:text-xl" {...rise(0.75)}>
            Hace más de 500 años, una pregunta sobre la fe, la gracia y la Palabra de Dios dio inicio a un movimiento
            que transformaría la historia del cristianismo.
          </motion.p>

          <motion.a
            href="#historia"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-heart px-7 py-4 font-display text-base font-extrabold uppercase tracking-tight text-ink transition-colors hover:bg-blush"
            {...rise(0.9)}
          >
            Descubrir la historia
            <ChevronDown size={20} className="transition-transform duration-300 group-hover:translate-y-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
