import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Emblem from "./Emblem";
import Reveal from "./Reveal";

/**
 * Imagen opcional: copiá un retrato de dominio público como
 * src/assets/images/luther.jpg (también sirve .png o .webp).
 * Si no hay imagen, se muestra una composición con el emblema.
 */
const images = import.meta.glob("../../assets/images/luther.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});
const lutherImage = Object.values(images)[0];

const TABS = [
  {
    id: "quien",
    label: "Quién fue",
    title: "Un monje que leía la Biblia con atención",
    body: [
      "Martín Lutero (1483–1546) vivió en el siglo XVI. Fue monje agustino, teólogo y profesor en la Universidad de Wittenberg, en el Sacro Imperio Romano Germánico.",
      "De su estudio de la Escritura surgieron las preguntas que lo llevaron a escribir sus tesis.",
    ],
  },
  {
    id: "cuestionaba",
    label: "Qué cuestionaba",
    title: "Tres preguntas de fondo",
    points: [
      "Si el perdón y la salvación podían asociarse a las indulgencias.",
      "Si la salvación se gana con méritos propios o se recibe como un regalo de Dios.",
      "Qué lugar debía tener la Escritura frente a las tradiciones.",
    ],
  },
  {
    id: "tesis",
    label: "Las 95 tesis",
    title: "De un debate académico a una conversación pública",
    body: [
      "Las 95 tesis estaban escritas en latín y eran propuestas para discutir. Gracias a la imprenta se copiaron y circularon con rapidez.",
      "Así, un debate universitario se convirtió en una conversación pública sobre la fe, el perdón y la gracia.",
    ],
  },
  {
    id: "consecuencias",
    label: "Consecuencias",
    title: "Un cambio que llegó muy lejos",
    points: [
      "Surgieron las iglesias protestantes y evangélicas.",
      "La Biblia se tradujo a las lenguas del pueblo y llegó a más personas.",
      "La cristiandad occidental se dividió, con conflictos dolorosos.",
      "También hubo debates y reformas dentro de la Iglesia católica.",
    ],
  },
];

export default function MartinLuther() {
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(TABS[0].id);
  const tab = TABS.find((t) => t.id === current);

  const onKeyDown = (event) => {
    const i = TABS.findIndex((t) => t.id === current);
    let next = null;
    if (event.key === "ArrowRight") next = TABS[(i + 1) % TABS.length].id;
    if (event.key === "ArrowLeft") next = TABS[(i - 1 + TABS.length) % TABS.length].id;
    if (next) {
      event.preventDefault();
      setCurrent(next);
      window.setTimeout(() => document.getElementById(`tab-${next}`)?.focus(), 0);
    }
  };

  return (
    <section id="lutero" className="bg-frost py-20 md:py-32">
      <div className="container-page grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Retrato o composición */}
        <Reveal className="lg:col-span-5">
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[2rem] rounded-tr-[6rem] bg-cobalt text-white">
            {lutherImage ? (
              <img
                src={lutherImage}
                alt="Retrato de Martín Lutero"
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            ) : (
              <>
                <Emblem className="absolute -bottom-16 -right-16 size-[22rem] text-blush opacity-50" />
                <div className="relative flex size-full flex-col justify-end p-8">
                  <p className="font-display text-6xl font-extrabold leading-[0.9] tracking-tighter sm:text-7xl">
                    Martín
                    <br />
                    Lutero
                  </p>
                  <p className="mt-4 font-display text-xl font-bold text-blush">1483 a 1546</p>
                </div>
              </>
            )}
          </figure>
        </Reveal>

        {/* Contenido en pestañas */}
        <div className="lg:col-span-7">
          <Reveal as="h2" className="font-display text-[clamp(2.2rem,6vw,4.25rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-abyss">
            Martín Lutero
          </Reveal>

          <div
            role="tablist"
            aria-label="Sobre Martín Lutero"
            onKeyDown={onKeyDown}
            className="mt-8 flex flex-wrap gap-2"
          >
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                type="button"
                id={`tab-${t.id}`}
                aria-selected={current === t.id}
                aria-controls={`panel-${t.id}`}
                tabIndex={current === t.id ? 0 : -1}
                onClick={() => setCurrent(t.id)}
                className={`rounded-full px-5 py-2.5 text-[0.95rem] font-bold transition-colors ${
                  current === t.id ? "bg-abyss text-white" : "bg-white text-abyss hover:bg-blush"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-8 min-h-[19rem] rounded-3xl bg-white p-7 md:p-10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={tab.id}
                role="tabpanel"
                id={`panel-${tab.id}`}
                aria-labelledby={`tab-${tab.id}`}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
              >
                <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-abyss md:text-3xl">
                  {tab.title}
                </h3>
                {tab.body && (
                  <div className="mt-4 space-y-4 text-xl leading-8">
                    {tab.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                )}
                {tab.points && (
                  <ul className="mt-5 space-y-3 text-xl leading-8">
                    {tab.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span aria-hidden="true" className="mt-3 size-2.5 shrink-0 rounded-full bg-heart" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
