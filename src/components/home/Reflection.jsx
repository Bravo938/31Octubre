import { Cross } from "lucide-react";
import Reveal from "./Reveal";

export default function Reflection() {
  return (
    <section id="reflexion" className="bg-frost py-20 md:py-32">
      <div className="container-page">
        <Reveal as="h2" className="font-display text-[clamp(2.4rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-abyss">
          Una verdad que sigue viva.
        </Reveal>

        <div className="mt-10 max-w-2xl space-y-6 text-xl leading-9">
          <Reveal as="p">
            La Reforma nos recuerda que el centro de nuestra fe no está en nuestras tradiciones, méritos o capacidades, sino
            en Jesucristo y en la gracia de Dios.
          </Reveal>
          <Reveal as="p" delay={0.1}>
            La Palabra sigue invitándonos a conocer a Cristo, confiar en Él y vivir conforme a su Evangelio.
          </Reveal>
        </div>

        <Reveal className="mt-14 rounded-[2rem] rounded-tl-[5rem] bg-cobalt p-8 text-white md:p-14">
          <Cross size={36} strokeWidth={1.75} className="text-blush" aria-hidden="true" />
          <p className="mt-6 max-w-4xl font-display text-[clamp(1.6rem,4vw,3rem)] font-extrabold uppercase leading-[1.05] tracking-tight">
            La salvación es por gracia, mediante la fe, y solo Cristo es nuestra esperanza.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
