import { Anchor, BookOpen, Cross, Gift, Sun } from "lucide-react";

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "La historia", href: "#historia" },
  
  { label: "Las cinco solas", href: "#solas" },
  { label: "El Evangelio", href: "#evangelio" },
];

export const TIMELINE = [
  {
    year: "1483",
    title: "Nace Martín Lutero",
    text: "Nace en Eisleben, en el Sacro Imperio Romano Germánico.",
  },
  {
    year: "1505",
    title: "Ingresa al monasterio",
    text: "Entra al monasterio de los agustinos en Erfurt.",
  },
  {
    year: "1517",
    title: "Las 95 tesis",
    text: "El 31 de octubre Lutero da a conocer sus 95 tesis sobre las indulgencias. La tradición lo asocia con Wittenberg. Es la fecha que hoy recordamos.",
    highlight: true,
  },
  {
    year: "1521",
    title: "La Dieta de Worms",
    text: "Se le exige retractarse de sus escritos. Lutero responde que su conciencia está sujeta a la Palabra de Dios.",
  },
  {
    year: "1522",
    title: "El Nuevo Testamento en alemán",
    text: "Se publica su traducción del Nuevo Testamento, realizada mientras estuvo en el castillo de Wartburg.",
  },
  {
    year: "1534",
    title: "La Biblia completa en alemán",
    text: "Se publica la Biblia completa traducida por Lutero.",
  },
  {
    year: "1546",
    title: "Muere Lutero",
    text: "Fallece en Eisleben, la misma ciudad donde había nacido.",
  },
];

export const SOLAS = [
  {
    id: "scriptura",
    latin: "Sola Scriptura",
    meaning: "Solo la Escritura",
    text: "La Biblia es la autoridad fundamental para la fe y la vida cristiana.",
    Icon: BookOpen,
    tone: "cobalt",
    span: "lg:col-span-2",
  },
  {
    id: "fide",
    latin: "Sola Fide",
    meaning: "Solo por la fe",
    text: "Somos justificados por medio de la fe.",
    Icon: Anchor,
    tone: "white",
    span: "lg:col-span-2",
  },
  {
    id: "gratia",
    latin: "Sola Gratia",
    meaning: "Solo por gracia",
    text: "La salvación es un regalo de Dios, no algo que podamos ganar por nuestras obras.",
    Icon: Gift,
    tone: "heart",
    span: "lg:col-span-2",
  },
  {
    id: "christus",
    latin: "Solus Christus",
    meaning: "Solo Cristo",
    text: "Jesucristo es el único mediador y el fundamento de nuestra salvación.",
    Icon: Cross,
    tone: "abyss",
    span: "lg:col-span-3",
  },
  {
    id: "gloria",
    latin: "Soli Deo Gloria",
    meaning: "Solo a Dios la gloria",
    text: "Toda la gloria pertenece a Dios.",
    Icon: Sun,
    tone: "blush",
    span: "lg:col-span-3",
  },
];
