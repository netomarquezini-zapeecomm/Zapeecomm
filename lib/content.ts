/* ============================================================
   CONTEÚDO DO SITE ZAPE — fonte única de edição
   Altere os textos aqui; os componentes consomem deste arquivo.
   ============================================================ */

export const site = {
  name: "Zape Ecomm",
  shortName: "Zape",
  url: "https://www.zapeecomm.com.br", // domínio oficial confirmado
  whatsapp: "5519999999999", // TODO: substituir pelo número real (formato 55 + DDD + número)
  email: "contato@zapeecomm.com.br", // TODO: confirmar
  cnpj: "55.571.422/0001-09",
  address: "Rua Primo Frazato, nº 40, 2º Andar, Centro, Pedreira/SP",
  socials: {
    instagram: "https://www.instagram.com/zapeecomm/",
    youtube: "https://www.youtube.com/@zapeecomm",
    linkedin: "https://www.linkedin.com/company/zape-ecomm/",
  },
} as const;

export const nav = [
  { label: "Método", href: "#metodo" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Resultados", href: "#resultados" },
  { label: "Para quem é", href: "#para-quem" },
  { label: "FAQ", href: "#faq" },
] as const;

/* ── HERO ── */
export const hero = {
  badge: "Consultoria Oficial Shopee · 2026",
  // H1 — mantém o headline da marca + carrega keyword "Shopee"
  titleLead: "Melhore sua performance na",
  titleHighlight1: "Shopee",
  titleMid: "com",
  titleHighlight2: "processo",
  // Lead com keywords de SEO/GEO (consultoria oficial, depender de agência, previsibilidade)
  subtitle:
    "Consultoria oficial Shopee para sellers que querem parar de depender de agência. Implantamos um processo comercial, rotina e indicadores para você escalar com previsibilidade.",
  ctaPrimary: "Quero estruturar minha operação",
  ctaSecondary: "Ver como funciona",
} as const;

/* ── PROBLEMA ── */
export const problem = {
  title: "Quando a operação não tem **processo**, a **performance** depende de:",
  image: "/problema-homem-triste.png", // homem cabisbaixo (operação sem processo)
  cards: [
    { title: "Um funcionário específico" },
    { title: "Uma agência externa" },
    { title: "Ajustes isolados" },
    { title: 'O "feeling" do dono' },
  ],
  text: [
    "Sem processo e estrutura interna, sua operação se torna **frágil**. As decisões são tomadas para apagar incêndios, o investimento em Ads se torna **insustentável** e o crescimento nunca se consolida de forma consistente.",
    "Você pode crescer por um período. Mas sem processos e estrutura, esse crescimento **sempre terá um limite**.",
  ],
} as const;

/* ── VIRADA / SOLUÇÃO ── */
export const shift = {
  titleHighlight: "Crescer na Shopee",
  title: "não é apenas encontrar um produto campeão ou investir em Ads.",
  intro:
    "É estruturar a operação, organizar a estratégia e implantar um **processo comercial claro** dentro do seu e-commerce, com playbooks definidos, fluxos estruturados, rotinas consistentes, indicadores acompanhados e critérios objetivos de decisão.",
  bridge:
    "Na Zape, não fazemos apenas otimização de anúncios — nós implantamos um **processo comercial** dentro da sua operação para:",
  bullets: [
    "Organizar sua estratégia",
    "Tornar seu Ads mais eficiente",
    "Criar previsibilidade nas vendas",
    "Consolidar o crescimento",
    "Melhorar sua margem",
  ],
} as const;

/* ── MÉTODO ── */
export const method = {
  title: "Como implantamos nosso **processo comercial** dentro da sua operação de e-commerce",
  steps: [
    {
      number: "01",
      title: "Diagnóstico Estratégico",
      desc: "Analisamos sua operação, estrutura atual, campanhas, indicadores e principais gargalos. Antes de qualquer decisão, definimos o cenário real da sua empresa com base em análise de dados.",
    },
    {
      number: "02",
      title: "Plano de Estruturação",
      desc: "Organizamos sua estratégia, definimos um cronograma de prioridades e estruturamos o processo comercial adequado ao seu estágio — nada genérico, tudo construído com base na sua operação.",
    },
    {
      number: "03",
      title: "Implantação e Execução",
      desc: "Implantamos rotinas, critérios de decisão, padrões de otimização e estrutura de acompanhamento. Sua operação passa a funcionar com processos claros, playbooks definidos e fluxos estruturados.",
    },
    {
      number: "04",
      title: "Monitoramento e Melhoria Contínua",
      desc: "Acompanhamos indicadores, analisamos dados e ajustamos a estratégia com critérios objetivos. A performance deixa de ser tentativa. Sua operação passa a ter previsibilidade.",
    },
  ],
  closing: [
    "Construímos a **inteligência do seu negócio** a quatro mãos.",
    "O objetivo não é apenas melhorar seu Ads. É estruturar sua operação para que ela cresça com **autonomia e controle**.",
  ],
} as const;

/* ============================================================
   ⚠️⚠️⚠️  PRODUTOS — CONTEÚDO DE EXEMPLO (PLACEHOLDER)  ⚠️⚠️⚠️
   Os produtos abaixo são EXEMPLOS para estruturar o layout.
   SUBSTITUA por nome, promessa, público e formato reais.
   ============================================================ */
export const products = {
  isPlaceholder: false,
  title: "Cada fase da sua operação exige um nível diferente de estrutura.",
  subtitle: "Na Zape, implantamos o **nível de processo adequado** ao estágio da sua empresa.",
  items: [
    {
      name: "Programa de Aceleração",
      promise: "Estruturação dos fundamentos para crescimento previsível.",
      forWho:
        "Indicado para operações que estão construindo sua base e precisam sair do improviso.",
      desc: "Implantamos os pilares iniciais do método Zape, organizando estratégia, performance e rotina de acompanhamento para criar uma base sólida de crescimento.",
      variants: [
        { name: "PGA", color: "green", icon: "sparkles" },
        { name: "PGA Pro", color: "orange", icon: "trophy" },
        { name: "PGA Platinum", color: "silver", icon: "crown" },
        { name: "PGA Black", color: "gold", icon: "gem" },
      ],
      image: "/produtos/aceleracao.webp", // mockup PGA Zape Academy (live + plataforma)
      highlight: false,
      ctaHref: "https://zapeecomm.com.br/formsprogramadeaceleracao/", // CTA do PGA → formulário (sobrescreve WhatsApp)
    },
    {
      name: "Consultoria Ultra",
      promise: "Implantação completa do processo comercial da Zape.",
      forWho:
        "Indicado para operações que precisam de estrutura empresarial, governança e escala previsível.",
      desc: "Implantamos o processo comercial da Zape dentro da sua empresa, estruturando indicadores, rotinas, inteligência estratégica e acompanhamento contínuo, com construção prática a quatro mãos.",
      variants: [
        { name: "Starter", color: "green", icon: "bolt" },
        { name: "Business", color: "gold", icon: "crown" },
      ],
      image: "/produtos/ultra-mockup.png", // arte Consultoria Ultra (mockup notebook)
      highlight: false,
      ctaHref: "https://zapeecomm.com.br/formsconsultoriaultra/", // CTA da Ultra → formulário (sobrescreve WhatsApp)
    },
  ],
} as const;

/* ── AUTORIDADE / SOBRE ── */
export const authority = {
  title: "Experiência que sustenta o método",
  teamImage: "/zape-day-time.png", // foto do time completo (Zape Day), landscape
  // Definição de entidade (GEO) — descrição-mãe recomendada pelo @analyst
  description:
    "A Zape é uma consultoria estratégica especializada em **estruturação e performance na Shopee**. Ao longo dos últimos anos, estruturamos **mais de 500 operações** e movimentamos milhões de reais em marketplaces, sempre com foco em **processo, previsibilidade e crescimento sustentável**.",
  descriptionExtra:
    "Mais do que otimizar anúncios, implantamos nosso **processo comercial** dentro do seu e-commerce.",
  stats: [
    { value: "+250", label: "Milhões em GMV" },
    { value: "+500", label: "Contas Estruturadas" },
    { value: "+3 Anos", label: "de Atuação" },
  ],
} as const;

/* ── PROVA SOCIAL ── */
export const socialProof = {
  title: "Empresas que implantaram o processo comercial Zape",
  subtitle: "Operações que estruturaram e escalaram com método.",
  // Logos — coloque os PNGs (fundo transparente, 1:1) em /public/clientes/
  // e preencha o `src`. Enquanto vazio, o carrossel mostra o nome como fallback.
  logos: [
    { name: "Nutt Pet", src: "/clientes/nutt-pet.webp" },
    { name: "Piva Store", src: "/clientes/piva.webp" },
    { name: "Puro Encanto Decor", src: "/clientes/puro-encanto.webp" },
    { name: "Nobrelar", src: "/clientes/nobrelar.webp" },
    { name: "Cabral Kids", src: "/clientes/cabral-kids.webp" },
    { name: "MM Home Decor", src: "/clientes/mm-home.webp" },
  ],
  cases: [
    {
      name: "Vitrine da Madeira",
      niche: "Artesanato",
      result:
        "Uma loja física que não atuava na internet, em menos de 4 meses de implantação do Processo Comercial, chegou em R$ 100.000,00 por mês de faturamento.",
      image: "/cases/vitrine-da-madeira.webp",
    },
    {
      name: "Mundo da Porcelana",
      niche: "Utilidade Doméstica",
      result:
        "Já tinha uma estrutura consolidada. Em apenas 2 meses de implantação do Processo Comercial, reduzimos em 60% o investimento em Ads e aumentamos o faturamento em 50%.",
      image: "/cases/mundo-da-porcelana.webp",
    },
    {
      name: "FesteJá Store",
      niche: "Decoração de Festas",
      result:
        "Empresa do nosso fundador Neto Marquezini, onde a Zape se iniciou. 2020 finalizou o ano com 2 milhões faturados e 2025 finalizou com 22 milhões.",
      image: "/cases/festeja-store.webp",
    },
  ],
} as const;

/* ── QUALIFICAÇÃO ── */
export const qualification = {
  title: "A Zape não é para qualquer operação.",
  subtitle: "Trabalhamos com empresas que entendem que crescimento exige **estrutura, método e execução disciplinada**.",
  forWho: {
    title: "Para quem é",
    items: [
      "Querem parar de depender de agência.",
      "Estão dispostas a estruturar rotina e indicadores.",
      "Buscam crescimento previsível e margem saudável.",
      "Querem aproveitar mais o investimento em Ads.",
      "Querem transformar a Shopee em uma operação organizada.",
      "Querem se tornar líderes ou referências no setor que atuam.",
    ],
  },
  notForWho: {
    title: "Para quem não é",
    items: [
      "Procura fórmula rápida ou promessa milagrosa.",
      "Não está disposto a implantar processo.",
      'Quer apenas "melhorar campanha" sem estruturar a operação.',
      "Não quer executar rotinas nem olhar para indicadores.",
      "Busca crescimento imediato sem ter disciplina para aplicar.",
    ],
  },
} as const;

/* ── CTA FINAL ── */
export const finalCta = {
  title: "Sua operação está pronta para crescer com **método**?",
  subtitle:
    "O próximo passo é iniciar o **diagnóstico estratégico** e entender qual nível de implantação faz sentido para sua empresa.",
  cta: "Quero fazer um diagnóstico",
  note: "Seleção baseada no estágio da sua operação. Vagas limitadas para implantação ULTRA.",
} as const;

/* ── FAQ (otimizado para FAQPage schema + GEO) ── */
export const faq = {
  title: "Perguntas frequentes",
  items: [
    {
      q: "Em quanto tempo vejo resultado?",
      a: "O tempo de resultado depende do estágio atual da sua operação e do nível de estrutura já existente.\n\nNosso foco não é gerar picos pontuais, e sim implantar processo para criar previsibilidade.\n\nEm muitos casos, melhorias de eficiência já aparecem nas primeiras semanas.\n\nConsolidação de crescimento acontece à medida que a estrutura é implantada e executada com disciplina.",
    },
    {
      q: "Funciona para quem já tem equipe?",
      a: "Sim.\n\nInclusive, operações com equipe estruturada costumam acelerar ainda mais os resultados, pois conseguimos organizar papéis, indicadores e rotinas de forma mais estratégica.\n\nNosso processo não substitui sua equipe — ele organiza e potencializa sua operação.",
    },
    {
      q: "O diagnóstico é gratuito?",
      a: "Sim.\n\nO diagnóstico estratégico inicial é gratuito e tem como objetivo entender o estágio da sua operação e indicar o nível de implantação mais adequado.\n\nA partir dele, avaliamos se existe alinhamento para avançar.",
    },
    {
      q: "Vocês executam ou apenas orientam?",
      a: "Depende do nível de implantação escolhido.\n\nNo Programa de Aceleração e na Mentoria Business, orientamos e acompanhamos a implantação do processo.\n\nNa Consultoria ULTRA, implantamos o processo comercial dentro da sua empresa, à quatro mãos, estruturando rotinas, indicadores e governança de performance.\n\nNosso modelo não é apenas consultivo — é estruturante.",
    },
    {
      q: "É necessário investir alto em Ads?",
      a: "Não necessariamente.\n\nNosso foco é tornar o investimento mais eficiente, não simplesmente aumentar verba.\n\nEm muitos casos, o primeiro passo é reduzir desperdício e estruturar critérios claros de otimização antes de escalar investimento.\n\nCrescimento sustentável não começa aumentando orçamento.\n\nComeça organizando processo.",
    },
    {
      q: "A Zape é a consultoria oficial da Shopee?",
      a: "Sim.\n\nA Zape é uma consultoria especializada em estruturação e performance na Shopee.\n\nMais do que otimizar anúncios, implantamos um processo comercial completo dentro da sua operação de e-commerce — com foco em previsibilidade e crescimento sustentável.",
    },
    {
      q: "A Zape é confiável? Quais resultados já entregou?",
      a: "Sim.\n\nAo longo dos últimos anos, estruturamos mais de 500 operações e movimentamos mais de R$ 250 milhões em GMV nos marketplaces.\n\nNosso trabalho é focado em processo, previsibilidade e crescimento sustentável — não em picos pontuais.\n\nEntre os resultados, temos operações que saíram do zero a R$ 100 mil por mês em poucos meses, reduziram em até 60% o investimento em Ads aumentando o faturamento, e empresas que multiplicaram o faturamento ao longo dos anos com método.",
    },
    {
      q: "Qual a diferença entre consultoria, mentoria e agência de e-commerce?",
      a: "São modelos diferentes de trabalho.\n\nUma agência normalmente executa as tarefas por você, terceirizando a operação — o que costuma manter sua empresa dependente dela.\n\nUma mentoria orienta e acompanha, mas a execução fica por sua conta.\n\nA Zape trabalha de forma estruturante: implantamos o processo comercial dentro da sua própria operação, organizando rotina, indicadores e governança — para que sua empresa cresça com autonomia e controle, sem depender de agência.",
    },
  ],
} as const;
