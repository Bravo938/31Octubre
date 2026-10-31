import Reveal from "./Reveal";

export default function Introduction() {
  return (
    <section id="historia" className="bg-frost py-20 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Título fijo en escritorio */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal as="h2" className="font-display text-[clamp(2.2rem,6vw,4.25rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-abyss">
              ¿Por qué el 31 de octubre?
            </Reveal>
            <Reveal delay={0.1} className="mt-6 max-w-sm text-xl leading-snug text-haze">
              Una fecha, una pregunta y un proceso que duró años.
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="max-w-2xl space-y-6 text-xl leading-9">
            <Reveal as="p">
              El <strong className="font-medium">31 de octubre de 1517</strong>, el monje y profesor Martín Lutero dio a conocer en
              Wittenberg, Alemania, sus <strong className="font-medium">95 tesis</strong>: un conjunto de propuestas para debatir
              sobre las indulgencias y sobre lo que enseñaba la Iglesia acerca del perdón y la salvación. La tradición cuenta
              que las colgó en la puerta de la iglesia del castillo. Los historiadores discuten los detalles de ese gesto,
              pero la fecha quedó como símbolo del comienzo de la Reforma.
            </Reveal>
            <Reveal as="p">
              En aquella época se predicaban indulgencias, que según se enseñaba reducían la pena por los pecados. A Lutero le
              inquietaba que la gente llegara a confiar en ellas para su salvación y que se perdiera de vista el perdón que
              Dios ofrece en Cristo.
            </Reveal>
            <Reveal as="p">
              Conviene tenerlo claro: la Reforma Protestante no se resolvió en un solo día. Fue un proceso histórico y
              religioso de años, hecho de debates, escritos y tensiones, que se extendió por toda Europa.
            </Reveal>
          </div>

          {/* Origen histórico vs. conmemoración actual */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            <Reveal className="rounded-tl-[3rem] rounded-br-xl rounded-tr-xl rounded-bl-xl bg-cobalt p-7 text-white md:p-8">
              <h3 className="font-display text-sm font-bold text-periwinkle">El origen histórico</h3>
              <p className="mt-2 font-display text-6xl font-extrabold tracking-tighter">1517</p>
              <p className="mt-3 text-lg leading-snug text-periwinkle">
                Lutero hace públicas sus 95 tesis y comienza un debate que cambiaría la historia de la Iglesia.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-br-[3rem] rounded-tl-xl rounded-tr-xl rounded-bl-xl bg-blush p-7 text-ink md:p-8">
              <h3 className="font-display text-sm font-bold text-abyss">La conmemoración hoy</h3>
              <p className="mt-2 font-display text-4xl font-extrabold leading-none tracking-tighter text-abyss md:text-5xl">
                Argentina
              </p>
              <p className="mt-3 text-lg leading-snug">
                El 31 de octubre se reconoce como el Día de las Iglesias Evangélicas y Protestantes. La fecha se vincula con
                el aniversario de las 95 tesis; no marca el final de la Reforma.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
