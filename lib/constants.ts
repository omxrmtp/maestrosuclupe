export const SITE = {
  name: "Maestro Suclupe",
  title: "Maestro Suclupe – Rituales de Amor y Unión de parejas",
  description:
    "Experto en amarres de amor efectivos, discretos y personalizados. Más de 30 años de experiencia recuperando el amor, fortaleciendo relaciones y eliminando bloqueos emocionales.",
  whatsapp: "+51922159268",
  whatsappRaw: "922159268",
  whatsappUrl:
    "https://wa.me/922159268?text=Hola%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.",
  phoneRaw: "922159268",
  copyright: "© 2026 Rituales Sagrados. Todos los derechos reservados.",
  legalUrl: "#",
  adminUrl: "#",
} as const;

export const NAV_LINKS = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#sobre-mi", label: "Sobre Mí" },
  {
    href: "/servicios",
    label: "Servicios",
    children: [
      { href: "/servicios/amarres-de-amor", label: "Amarres de amor" },
      { href: "/servicios/retorno-de-pareja", label: "Retorno de pareja" },
      { href: "/servicios/basta-de-sufrir", label: "Basta de sufrir" },
      { href: "/servicios/destruyo-al-enemigo", label: "Destruyo al enemigo" },
      { href: "/servicios/rituales-en-el-cementerio", label: "Rituales en el cementerio" },
    ],
  },
  { href: "/#galeria", label: "Galería de fotos" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/#contacto", label: "Contacto" },
] as const;

export type Service = {
  slug: string;
  title: string;
  shortDesc: string;
  heroSubtitle: string;
  description: string[];
  image: string;
  benefits: string[];
  process: { title: string; description: string }[];
  duration: string;
  metaDescription: string;
};

export const SERVICES: Service[] = [
  {
    slug: "amarres-de-amor",
    title: "Amarres de amor",
    shortDesc: "Une corazones con un ritual espiritual fuerte, rápido y seguro.",
    heroSubtitle: "Recupera a la persona que amas con un trabajo espiritual serio",
    description: [
      "El amarre de amor es un ritual espiritual ancestral que tiene como objetivo unir o reconciliar a dos personas que se aman pero se han distanciado. En MAESTRO SUCLUPE realizamos trabajos personalizados, serios y totalmente confidenciales, adaptados a tu situación particular.",
      "Con más de 30 años de experiencia, el Maestro Suclupe ha ayudado a cientos de personas a recuperar el amor de su vida, sin importar si la distancia es grande, si hay terceros involucrados o si la relación parecía completamente rota. Cada ritual es único y se realiza con profunda concentración, fe y conocimiento de las energías ancestrales.",
      "Trabajamos con energías espirituales poderosas para fortalecer el vínculo emocional, despertar el recuerdo y el cariño en la otra persona, y restaurar la comunicación y el deseo. Los amarres que realizamos son efectivos porque se enfocan en la raíz espiritual del problema, no solo en lo superficial.",
    ],
    image: "/img/gallery/amarres-100-efectivos.webp",
    benefits: [
      "Recuperas a la persona amada en el menor tiempo posible",
      "Fortalece el vínculo emocional y espiritual de la pareja",
      "Trabajo 100% confidencial, personalizado y serio",
      "Resultados reales sin importar la distancia",
      "Acompañamiento durante todo el proceso",
    ],
    process: [
      {
        title: "1. Consulta inicial",
        description: "Me contactas por WhatsApp y me cuentas tu situación. Te escucho con respeto y confidencialidad total.",
      },
      {
        title: "2. Análisis espiritual",
        description: "Evalúo tu caso con mi conocimiento ancestral para determinar el tipo de ritual más efectivo para ti.",
      },
      {
        title: "3. Ritual personalizado",
        description: "Realizo el trabajo espiritual con materiales, oraciones y energias específicas para tu situación.",
      },
      {
        title: "4. Seguimiento",
        description: "Te acompaño durante los días posteriores para verificar que el trabajo esté dando resultados.",
      },
    ],
    duration: "Resultados visibles entre 3 y 21 días",
    metaDescription:
      "Amarres de amor efectivos, rápidos y seguros con el Maestro Suclupe. Más de 30 años de experiencia recuperando amores. Consulta confidencial por WhatsApp.",
  },
  {
    slug: "retorno-de-pareja",
    title: "Retorno de pareja",
    shortDesc: "Trabajo espiritual para que la persona amada vuelva a tu lado rápidamente.",
    heroSubtitle: "Si tu pareja se alejó, este ritual la traerá de regreso",
    description: [
      "El retorno de pareja es un trabajo espiritual enfocado en hacer que esa persona que se ha alejado vuelva a tu lado con amor sincero, arrepentimiento y deseo de estar contigo. Es uno de los trabajos más solicitados y efectivos que realizo, porque actúa directamente sobre el vínculo emocional y la conexión espiritual.",
      "El Maestro Suclupe utiliza técnicas ancestrales combinadas con oraciones poderosas y elementos rituales que abren caminos, eliminan interferencias y despiertan en la otra persona el recuerdo del amor que siente por ti. No importa si hay otra persona involucrada, si la distancia es enorme o si ya pasó mucho tiempo.",
      "Cada caso es evaluado de forma personal. El trabajo se adapta a tu situación específica: hay retornos suaves para relaciones que solo necesitan un empujón, y retornos fuertes para casos más complejos donde hay terceros o energías negativas involucradas.",
    ],
    image: "/img/gallery/rituales-parejas.webp",
    benefits: [
      "La persona amada piensa en ti y te busca",
      "Corta relaciones con terceros de forma natural",
      "Despierta el amor, el deseo y el arrepentimiento",
      "Restaura la comunicación y el acercamiento",
      "Funciona incluso cuando hay otra persona en la relación",
    ],
    process: [
      {
        title: "1. Diagnóstico espiritual",
        description: "Analizo tu caso particular para entender por qué la persona se alejó y qué energías están actuando.",
      },
      {
        title: "2. Diseño del ritual",
        description: "Determino el tipo de retorno adecuado (suave, medio o fuerte) según la complejidad de tu situación.",
      },
      {
        title: "3. Trabajo espiritual",
        description: "Realizo el ritual con la energía necesaria para abrir caminos y atraer de vuelta a tu pareja.",
      },
      {
        title: "4. Manifestación",
        description: "La persona comienza a llamarte, buscarte o acercarse de manera natural en cuestión de días.",
      },
    ],
    duration: "Primeros resultados entre 24 horas y 7 días",
    metaDescription:
      "Retorno de pareja rápido y efectivo con el Maestro Suclupe. Si tu pareja se alejó, este trabajo espiritual la traerá de regreso. 30+ años de experiencia.",
  },
  {
    slug: "basta-de-sufrir",
    title: "Basta de sufrir",
    shortDesc: "Ritual para liberarte del dolor emocional y empezar una nueva etapa.",
    heroSubtitle: "Termina con el sufrimiento amoroso de una vez por todas",
    description: [
      "¿Sientes que el amor te hace sufrir? ¿Vives atrapado/a en una relación que solo te da dolor, engaños o indiferencia? El ritual \"Basta de Sufrir\" está diseñado para liberarte de ese ciclo doloroso y abrirte camino hacia una vida emocional más sana y plena.",
      "Este trabajo espiritual combina limpieza energética, oraciones de desvinculación y rituales de protección que cortan los lazos tóxicos con la persona que te hace daño. No es magia negra ni nada que te traiga consecuencias negativas: es un proceso de sanación espiritual respaldado por años de experiencia.",
      "El Maestro Suclupe trabaja para que puedas cerrar ese capítulo doloroso, recuperar tu paz interior, tu autoestima y tu fuerza. Muchas personas han logrado empezar de nuevo gracias a este ritual, encontrando finalmente el amor que se merecen.",
    ],
    image: "/img/gallery/limpieza-maleficios.webp",
    benefits: [
      "Terminas con el ciclo de sufrimiento amoroso",
      "Recuperas tu paz interior y autoestima",
      "Limpieza de energías negativas y lazos tóxicos",
      "Corte espiritual con la persona que te hace daño",
      "Apertura de caminos para una nueva relación sana",
    ],
    process: [
      {
        title: "1. Escucha activa",
        description: "Me cuentas qué estás viviendo y por qué sientes que el amor te hace sufrir. Todo es confidencial.",
      },
      {
        title: "2. Desvinculación",
        description: "Realizo un trabajo espiritual para cortar los lazos energéticos negativos con esa persona.",
      },
      {
        title: "3. Limpieza y protección",
        description: "Te libero de las energías negativas y te brindo protección espiritual para que no vuelvan.",
      },
      {
        title: "4. Renovación",
        description: "Empiezas a sentirte más libre, fuerte y con claridad para tomar decisiones sobre tu vida amorosa.",
      },
    ],
    duration: "Liberación visible en 7 a 14 días",
    metaDescription:
      "Ritual \"Basta de Sufrir\" con el Maestro Suclupe. Termina con el dolor emocional y libera tu camino hacia el amor verdadero. Consulta confidencial.",
  },
  {
    slug: "destruyo-al-enemigo",
    title: "Destruyo al enemigo",
    shortDesc: "Trabajo espiritual para neutralizar a quien te hace daño o impide tu amor.",
    heroSubtitle: "Neutraliza a quien te hace daño con justicia espiritual",
    description: [
      "Cuando alguien —ya sea una expareja, un rival, un familiar o cualquier persona— se convierte en un obstáculo para tu felicidad amorosa, el ritual \"Destruyo al Enemigo\" actúa con justicia espiritual para neutralizar sus malas intenciones y devolverte la tranquilidad.",
      "Este trabajo NO es para causar daño无辜 a nadie. Es un ritual ancestral que rompe maleficios, deshace trabajos negativos enviados en tu contra y devuelve la paz a quien ha sido víctima de envidias, brujerías o maldiciones. El Maestro Suclupe tiene el conocimiento y la autoridad espiritual para deshacer cualquier mal que te hayan hecho.",
      "Muchas personas descubren que sus problemas de amor (separaciones inexplicables, infidelidades repentinas, mala suerte constante) no son casualidad sino consecuencia de trabajos negativos hechos por terceros. Este ritual es la solución.",
    ],
    image: "/img/gallery/alejamiento-rival.webp",
    benefits: [
      "Rompe maleficios y trabajos negativos",
      "Neutraliza a rivales y personas con malas intenciones",
      "Devuelve la paz y la armonía a tu vida",
      "Protección espiritual duradera",
      "Justicia divina sin consecuencias negativas para ti",
    ],
    process: [
      {
        title: "1. Detección",
        description: "Determino si hay un trabajo negativo o maleficio enviado en tu contra que esté bloqueando tu vida amorosa.",
      },
      {
        title: "2. Ruptura espiritual",
        description: "Deshago el trabajo negativo con autoridad espiritual y oración ancestral, devolviéndolo a su origen.",
      },
      {
        title: "3. Limpieza profunda",
        description: "Te realizo una limpieza espiritual completa para sacar de ti cualquier residuo negativo.",
      },
      {
        title: "4. Protección",
        description: "Te dejo con protección espiritual fuerte para que ninguna mala energía vuelva a afectarte.",
      },
    ],
    duration: "Resultados entre 3 y 15 días",
    metaDescription:
      "Ritual \"Destruyo al Enemigo\" con el Maestro Suclupe. Neutraliza rivales, rompe maleficios y devuelve la paz a tu vida. Más de 30 años de experiencia.",
  },
  {
    slug: "rituales-en-el-cementerio",
    title: "Rituales en el cementerio",
    shortDesc: "Trabajos espirituales de máxima potencia realizados en el cementerio.",
    heroSubtitle: "El poder de los rituales en el cementerio: la máxima conexión espiritual",
    description: [
      "Los rituales en el cementerio son trabajos espirituales de máxima potencia, realizados en cementerios donde la energía espiritual es más fuerte y directa. Estos rituales se reservan para los casos más difíciles: cuando los amarres normales no son suficientes, cuando hay un mal muy arraigado, o cuando la persona está muy alejada y nada más ha funcionado.",
      "El Maestro Suclupe tiene autorización espiritual y conocimiento ancestral para realizar estos trabajos de alta potencia. La energía de los cementerios permite conexiones directas con fuerzas espirituales superiores, logrando resultados donde otros métodos fallaron.",
      "Es importante aclarar que estos rituales no tienen nada que ver con cosas negativas. Son trabajos serios, respetuosos, realizados con fe y conocimiento. Su potencia viene de la energía del lugar, no de nada oscuro. Han sido la solución definitiva para casos extremos.",
    ],
    image: "/img/gallery/senor-cautivo.webp",
    benefits: [
      "Para casos extremos donde nada más ha funcionado",
      "Máxima potencia espiritual",
      "Resultados garantizados en situaciones críticas",
      "Realizado por un maestro con 30+ años de experiencia",
      "Energía espiritual superior a otros métodos",
    ],
    process: [
      {
        title: "1. Evaluación del caso",
        description: "Determino si tu situación requiere este tipo de ritual de alta potencia o si basta con uno convencional.",
      },
      {
        title: "2. Preparación",
        description: "Te indico cómo prepararte espiritualmente para el ritual y qué elementos necesitarás.",
      },
      {
        title: "3. Ritual en cementerio",
        description: "Realizo el trabajo espiritual con todos los elementos y oraciones necesarias para tu caso.",
      },
      {
        title: "4. Resultados garantizados",
        description: "Los efectos se manifiestan de forma rápida y contundente. Te acompaño en todo el proceso posterior.",
      },
    ],
    duration: "Resultados entre 1 y 7 días",
    metaDescription:
      "Rituales en el cementerio con el Maestro Suclupe. Trabajos espirituales de máxima potencia para casos extremos. 30+ años de experiencia.",
  },
];

export const GALLERY = [
  { id: 1, image: "/img/gallery/limpieza-maleficios.webp", title: "Limpieza de maleficios" },
  { id: 2, image: "/img/gallery/senor-cautivo.webp", title: "Señor Cautivo" },
  { id: 3, image: "/img/gallery/amarres-100-efectivos.webp", title: "Amarres de amor 100% efectivos" },
  { id: 4, image: "/img/gallery/rituales-parejas.webp", title: "Rituales de parejas" },
  { id: 5, image: "/img/gallery/alejamiento-rival.webp", title: "Alejamiento del rival" },
  { id: 6, image: "/img/gallery/amarres-efectivos.webp", title: "Amarres de amor efectivos" },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    image: "/img/testimonials/client-1.webp",
    name: "Valeria T.",
    city: "Cusco",
    quote:
      "Quiero agradecer al Maestro Suclupe por su gran ayuda. La persona que amo se había ido con alguien más, pero después del ritual regresó a mi vida. Estoy muy feliz y agradecida. Es un verdadero experto y trabaja con seriedad.",
  },
  {
    id: 2,
    image: "/img/testimonials/client-2.webp",
    name: "Carmen S.",
    city: "Trujillo",
    quote:
      "Sentía que había muchas energías negativas afectando mi relación. El Maestro Suclupe hizo un trabajo espiritual y desde entonces mi pareja cambió conmigo. Ahora estamos bien y en armonía. Gracias por devolverme la tranquilidad y el amor.",
  },
  {
    id: 3,
    image: "/img/testimonials/client-3.webp",
    name: "Daniela P.",
    city: "Arequipa",
    quote:
      "Mi relación estaba completamente rota y pensé que no había solución. El Maestro Suclupe me ayudó con un amarre de amor y en poco tiempo todo cambió. Mi pareja volvió a mí más cariñoso y comprometido. Lo recomiendo porque realmente cumple.",
  },
  {
    id: 4,
    image: "/img/testimonials/client-4.webp",
    name: "Rosa M.",
    city: "Lima",
    quote:
      "Gracias al Maestro Suclupe recuperé al hombre que amo. Él se había alejado y ya no quería saber nada de mí, pero después del ritual comenzó a buscarme nuevamente. Hoy estamos juntos y felices. Estoy muy agradecida por su ayuda y su profesionalismo.",
  },
] as const;
