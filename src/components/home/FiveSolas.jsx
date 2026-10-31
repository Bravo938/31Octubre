import { motion, useReducedMotion } from "framer-motion";
import { SOLAS } from "../../utils/data";
import Reveal from "./Reveal";

const TONES = {
  cobalt: { card: "bg-cobalt text-white", meaning: "text-blush", text: "text-periwinkle", icon: "bg-white/15 text-white" },
  white: { card: "bg-white text-ink", meaning: "text-cobalt", text: "text-haze", icon: "bg-cobalt text-white" },
  heart: { card: "bg-heart text-ink", meaning: "text-abyss", text: "text-ink", icon: "bg-ink text-white" },
  abyss: { card: "bg-abyss text-white", meaning: "text-heart", text: "text-periwinkle", icon: "bg-white/15 text-white" },
  blush: { card: "bg-blush text-ink", meaning: "text-abyss", text: "text-ink", icon: "bg-abyss text-white" },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function FiveSolas() {
  const reduce = useReducedMotion();

  return (
    <section id="solas" className="bg-frost pb-20 pt-4 md:pb-32">
      <div className="container-page">
        <Reveal as="h2" className="max-w-3xl font-display text-[clamp(2.2rem,6vw,4.25rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-abyss">
          Las cinco solas de la Reforma
        </Reveal>
        <Reveal delay={0.1} className="mt-5 max-w-xl text-xl leading-snug text-haze">
          Cinco frases en latín que resumen lo que la Reforma volvió a poner en el centro.
        </Reveal>

        <motion.ul
          variants={container}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6"
        >
          {SOLAS.map(({ id, latin, meaning, text, Icon, tone, span }) => {
            const t = TONES[tone];
            return (
              <motion.li
                key={id}
                variants={item}
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`flex flex-col rounded-3xl p-7 md:p-8 ${t.card} ${span} ${
                  id === "gloria" ? "sm:col-span-2" : ""
                }`}
              >
                <span className={`grid size-14 place-items-center rounded-2xl ${t.icon}`}>
                  <Icon size={28} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-8 font-display text-3xl font-extrabold uppercase leading-none tracking-tight">{latin}</h3>
                <p className={`mt-2 font-display text-lg font-bold ${t.meaning}`}>{meaning}</p>
                <p className={`mt-4 text-lg leading-snug ${t.text}`}>{text}</p>
              </motion.li>
            );
          })}
        </motion.ul>

        <Reveal className="mt-8 max-w-2xl text-base leading-snug text-haze">
          Estas frases sintetizan las convicciones de la Reforma. Reunidas como una lista de cinco, se fueron consolidando con el paso del tiempo.
        </Reveal>
      </div>
    </section>
  );
}
