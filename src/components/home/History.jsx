import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { TIMELINE } from "../../utils/data";
import Reveal from "./Reveal";

export default function History() {
  const reduce = useReducedMotion();
  const listRef = useRef(null);

  // La línea se va "dibujando" a medida que se baja por la página
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.4 });

  return (
    <section id="linea-de-tiempo" className="grain relative isolate overflow-hidden bg-abyss py-20 text-white md:py-32">
      <div className="container-page">
        <Reveal as="h2" className="max-w-3xl font-display text-[clamp(2.2rem,6vw,4.25rem)] font-extrabold uppercase leading-[0.98] tracking-tight">
          Una historia en sus fechas clave
        </Reveal>
        <Reveal delay={0.1} className="mt-5 max-w-xl text-xl leading-snug text-periwinkle">
          Los hechos principales, en orden, desde el nacimiento de Lutero hasta su muerte.
        </Reveal>

        <div ref={listRef} className="relative mt-16 md:mt-24">
          {/* Línea base y línea de progreso */}
          <div aria-hidden="true" className="absolute left-[11px] top-0 h-full w-0.5 bg-white/20 md:left-1/2 md:-ml-px" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: reduce ? 1 : scaleY }}
            className="absolute left-[11px] top-0 h-full w-0.5 origin-top bg-heart md:left-1/2 md:-ml-px"
          />

          <ol className="relative space-y-14 md:space-y-20">
            {TIMELINE.map((item, index) => {
              const right = index % 2 === 1; // en escritorio alterna izquierda y derecha
              return (
                <motion.li
                  key={item.year}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative pl-12 md:w-1/2 md:pl-0 ${
                    right ? "md:ml-auto md:pl-14" : "md:pr-14 md:text-right"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-3 size-6 rounded-full border-4 border-abyss ${
                      item.highlight ? "bg-heart" : "bg-periwinkle"
                    } ${right ? "md:-left-3" : "md:left-auto md:-right-3"}`}
                  />
                  <div className={item.highlight ? "rounded-3xl bg-heart p-6 text-ink md:p-8" : ""}>
                    <p className="font-display text-5xl font-extrabold tracking-tighter md:text-6xl">{item.year}</p>
                    <h3 className="mt-1 font-display text-xl font-bold">{item.title}</h3>
                    <p className={`mt-2 text-lg leading-snug ${item.highlight ? "text-ink" : "text-periwinkle"}`}>
                      {item.text}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
