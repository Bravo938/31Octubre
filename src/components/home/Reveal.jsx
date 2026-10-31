import { motion, useReducedMotion } from "framer-motion";

/**
 * Aparición suave al entrar en pantalla.
 * Si la persona prefiere menos movimiento, el contenido aparece directamente.
 */
export default function Reveal({ as = "div", delay = 0, y = 18, className = "", children }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
