import { motion, useReducedMotion } from "framer-motion";
import Emblem from "./Emblem";
import Reveal from "./Reveal";

export default function Gospel() {
  const reduce = useReducedMotion();

  // El marcador se dibuja sobre la frase central del versículo
  const start = { backgroundSize: "0% 100%", color: "#14143a" };
  const end = { backgroundSize: "100% 100%", color: "#ffffff" };

  return (
    <section id="evangelio" className="grain relative isolate overflow-hidden bg-heart py-24 text-ink md:py-36">
      <Emblem
        className="pointer-events-none absolute -left-40 -top-24 -z-10 size-[36rem] text-ink opacity-10 md:size-[48rem]"
      />

      <div className="container-page">
        <Reveal
          as="h2"
          className="max-w-5xl font-display text-[clamp(1.9rem,5.2vw,4.1rem)] font-extrabold uppercase leading-[1.04] tracking-tight"
        >
          No se trata de lo que podemos hacer para llegar a Dios, sino de lo que Dios hizo por nosotros en Cristo.
        </Reveal>

        <figure className="mt-14 md:mt-20 md:max-w-4xl">
          <blockquote className="text-[clamp(1.5rem,3.4vw,2.5rem)] font-medium leading-[1.35]">
            <p>
              «Porque{" "}
              <motion.mark
                className="box-decoration-clone rounded-md px-2 py-1 font-bold"
                style={{
                  backgroundImage: "linear-gradient(var(--color-cobalt), var(--color-cobalt))",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 50%",
                }}
                initial={reduce ? end : start}
                whileInView={end}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 1.2, delay: 0.35, ease: [0.65, 0, 0.35, 1] }}
              >
                por gracia ustedes han sido salvados mediante la fe
              </motion.mark>
              ; esto no procede de ustedes, sino que es el regalo de Dios, no por obras, para que nadie se jacte».
            </p>
          </blockquote>
          <figcaption className="mt-6 font-display text-lg font-bold">Efesios 2:8-9 (NVI)</figcaption>
        </figure>
      </div>
    </section>
  );
}
