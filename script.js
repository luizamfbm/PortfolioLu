/* =====================================================
   Lu — Portfolio
   Reveal · sticky nav · scroll progress · smooth-scroll
   Theme toggle · Language toggle · Case expand · Demo expand
   ===================================================== */

const I18N = {
  en: {
    "meta.title": "Lu — Business Analyst & Systems Designer",
    "meta.description":
      "Business Analyst with a product mindset. I build data systems and user-facing products — pipelines, validation, reconciliation, and decision-support tools that turn complex inputs into clear, actionable outputs.",

    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",

    "hero.status": 'Currently building <strong>TravelYourWay</strong>',
    "hero.headline":
      'Building <em>data-driven</em> systems that turn <span class="accent-underline">complexity</span> into decisions.',
    "hero.sub":
      "Business analyst with a product mindset. I build data and operational systems: pipelines, validation, reconciliation, and decision infrastructure that supports correct, traceable operations.",
    "hero.micro":
      "Focused on operational reliability, auditability, and clear investigation paths when something looks off.",
    "hero.ctaPrimary": "View case studies →",
    "hero.ctaGhost": "Get in touch",
    "hero.metaFocusLabel": "Focus",
    "hero.metaFocusValue": "Data Pipelines · Building decision systems through data · Data engineering · Migrations ",
    "hero.metaStackLabel": "Stack",
    "hero.metaStackValue": "Python · SQL · PySpark · AWS",
    "hero.metaBasedLabel": "Based",
    "hero.metaBasedValue": "Remote · Brazil",

    "case.context": "Context",
    "case.problem": "Problem",
    "case.built": "What I built",
    "case.building": "What I'm building",
    "case.refined": "What I refined",
    "case.decisions": "Key decisions & trade-offs",
    "case.stack": "Stack",
    "case.impact": "Impact",
    "case.demonstrates": "What this demonstrates",
    "case.toggleOpen": "Read case study",
    "case.toggleClose": "Close",
    "case.wip": "In construction",
    "case.wipYear": "In progress",

    /* FEATURED — TravelYourWay */
    "axiom.eyebrow": "Currently building · 2026",
    "axiom.title": "TravelYourWay",
    "axiom.lede":
      "A system that turns user constraints — budget, preferences, priorities — into structured travel decisions in a single flow.",
    "axiom.context":
      "Planning a trip means moving between dozens of tabs: flights in one place, accommodation in another, activities somewhere else. Each platform compares within itself but not across. Most of the cost isn't booking. It's the decisions you have to make to know what you're choosing between in the first place.",
    "axiom.problem":
      "Replace the tab-switching with a single flow. Capture the constraints that actually matter — budget, dates, what's worth spending on, what isn't — and turn them into a structured set of decisions across transport, accommodation, and activities.",
    "axiom.built":
      "TravelYourWay takes user constraints as inputs (budget caps, date windows, preferences across cost vs. comfort, transport vs. experience), runs them through a prioritization layer that resolves trade-offs against the user's stated priorities, and outputs a structured plan: transport options ranked, accommodation matched to budget and location, activities suggested based on the trip's purpose. The plan is editable, not final. The system supports the decision; it doesn't make it.",
    "axiom.decisions":
      'Prioritization expressed as explicit weights, not implicit defaults. Users tell the system whether they care about cost over comfort, central location over price, or experience density over downtime, and those choices propagate through every recommendation. Outputs are ranked options, not single answers, because trip planning is rarely about finding the "best" choice; it\'s about finding the right one for this trip. Trade-offs surfaced explicitly rather than hidden inside a recommendation.',
    "axiom.impact":
      "Reduce trip-planning time from hours across multiple platforms to a single structured flow. Fewer platforms needed. Trade-offs visible instead of hidden. A plan the user can defend later: <em>this is what I picked, and this is why.</em>",
    "axiom.demonstrates":
      "Designing a user-facing product with the same rigor as an internal system. Explicit inputs, explicit trade-offs, and outputs the user can act on.",
    "axiom.cta": 'Request a walkthrough <span aria-hidden="true">→</span>',

    /* Work */
    "work.eyebrow": "Selected work",
    "work.title": "Case studies.",
    "work.sub":
      "Each project starts the same way. Map the system, find the inconsistency, build the simplest thing that makes it correct and auditable. Open one to see the work behind the result.",

    /* P1 — CodeWiz Assistant */
    "work.p1.title": "CodeWiz Assistant",
    "work.p1.lede":
      "An internal Q&amp;A assistant for the CodeWiz team and franchisees. Answers are strictly grounded in internal documentation, with guardrails against hallucination.",
    "work.p1.t1": "RAG",
    "work.p1.t2": "Anti-hallucination",
    "work.p1.t3": "Persona-aware",
    "work.p1.context":
      "CodeWiz operations across team and franchisees ran on hundreds of internal documents — runbooks, policies, training material — and the same questions kept coming back to the same five people. Generic LLM answers weren't safe: a wrong number in a runbook breaks an operation.",
    "work.p1.problem":
      "Build a Q&amp;A assistant grounded strictly in CodeWiz's own documentation. No fabrication when the corpus doesn't cover the question. Responses adapted to the user's role (franchisee, support, leadership) and traceable back to the source paragraphs.",
    "work.p1.built":
      "Document ingestion automated via a Google Apps Script (weekly Drive sync) and a local pipeline that runs OCR on image PDFs, chunks semantically, classifies chunks by topic, redacts PII, and deduplicates. Embeddings via OpenAI <code>text-embedding-3-large</code>, stored in a local FAISS index. Retrieval plus GPT-4 Turbo for answer generation, with persona-aware prompts. A refusal layer keeps the model from inventing when retrieval confidence is low. A Streamlit UI for users; a separate Streamlit dashboard logs Q&amp;A and surfaces the most common and unanswered questions per persona.",
    "work.p1.decisions":
      "FAISS over a managed vector DB because the corpus fits comfortably and local-first removed an operational dependency. <code>text-embedding-3-large</code> because retrieval quality drives the trust of the entire system. Persona-based prompts instead of one universal answer because the franchisee, the support agent, and leadership read the same fact differently and need different framing. PII redaction at ingest, not at retrieval, because the leak surface is wider at retrieval time.",
    "work.p1.impact":
      "In production use across team and franchisees. Reduced repeat questions to the original document owners. The questions CodeWiz couldn't answer became the team's editorial backlog — gaps in the documentation, surfaced as data instead of anecdotes.",
    "work.p1.demonstrates":
      "Building an AI assistant where trust is the product: source-grounded answers, persona-aware framing, and a refusal layer that keeps the system honest.",

    /* P2 — Operational Data Pipeline (financial-risk detection) */
    "work.p2.title": "Operational Data Pipeline (mock data)",
    "work.p2.lede":
      "A detection pipeline that surfaces invisible financial exposure between regulated systems. Entity resolution, reconciliation, and validation at every boundary.",
    "work.p2.t1": "Risk detection",
    "work.p2.t2": "Entity resolution",
    "work.p2.t3": "Reconciliation",
    "work.p2.context":
      "Two regulated systems that needed to stay in sync — a judicial registry and an operational ledger — and didn't. Charges kept being processed against accounts that should have been blocked. The gap was silent. The cost only became visible when it surfaced as a legal claim.",
    "work.p2.problem":
      "Detect the gap between what was legally required and what the operation was actually doing, across hundreds of thousands of records. Names that don't always match, dates that drift between systems, entities that need careful resolution before any action.",
    "work.p2.built":
      "An end-to-end detection pipeline. Multi-source ingestion of judicial publications and operational records (276,000 movements). Cascading entity resolution that promotes deterministic matches and routes ambiguous cases to specialist review. Daily output of cases ranked by exposure, every flagged case auditable back to its source.",
    "work.p2.decisions":
      "Cascading entity resolution instead of strict CPF matching, because typos and homonyms in judicial publications produced false negatives. Quarantine over rejection: ambiguous records stay visible and routable to human auditors. PySpark because the volume justified it. CloudWatch logs every run so investigations start from a flagged record, not from a stakeholder asking why a number changed.",
    "work.p2.impact":
      "Surfaced R$ 10.5M in undue exposure that was previously invisible. Detection lag cut from 14 months to 48 hours. A hidden legal liability converted into an actionable operational queue.",
    "work.p2.demonstrates":
      "Turning a silent data gap between regulated systems into a measurable, defensible risk control.",

    /* Data story (case 03) */
    "story.title": "Data story · from blind spot to risk control",
    "story.card1.label": "The blind spot",
    "story.card1.metric1": "records analyzed",
    "story.card1.metric2": "detection lag",
    "story.card1.copy":
      "Across 276,000 movements, the silence between the judicial registry and the operational ledger created a 14-month detection lag. Undue charges accumulated, invisibly.",
    "story.card2.label": "Engineering trust",
    "story.card2.bar1": "High-confidence (auto)",
    "story.card2.bar2": "Human review (audit)",
    "story.card2.copy":
      "A cascading entity resolution layer separates deterministic matches from cadastral ambiguity. 90% of the volume is automated safely; 10% goes to specialist audit, with the reason attached.",
    "story.card3.label": "Risk stopped",
    "story.card3.metric1": "exposure avoided (CDC × 2)",
    "story.card3.copy":
      "A R$ 10.5M hidden legal liability turned into a preventive barrier. Response time on new judicial events dropped from 400+ days to under 48 hours, in line with central-bank resolutions.",

    /* P3 — ListaInteligente */
    "work.p3.title": "ListaInteligente — Price-Tracking Shopping List",
    "work.p3.lede":
      "A shopping list that scrapes supermarket prices daily and tells you where to buy: a single store or split across stores, whichever costs less.",
    "work.p3.t1": "Web scraping",
    "work.p3.t2": "Optimization",
    "work.p3.t3": "Automation",
    "work.p3.context":
      'Buying groceries online means switching between three or four supermarket sites and a calculator. Prices change weekly, item names vary by store, and "cheapest" depends on whether you\'re willing to split the order across stores. Most people give up comparing and buy where they\'re already used to.',
    "work.p3.problem":
      "Watch prices across stores and tell the user where to buy. Two answers, not one: cheapest single-store order, and cheapest order split across stores. Show the trade-off explicitly so the user can choose.",
    "work.p3.built":
      "A Python system in three layers. A scraper built on headless Playwright pulls product prices from Extra and iFood Shop. A SQLite store with SQLAlchemy keeps price history per product. An optimizer compares the user's list across stores and returns two options: cheapest single-store, or cheapest split across stores, with the savings between them. APScheduler runs the scraper daily without intervention. FastAPI exposes the REST API; a Jinja2 dashboard renders the result.",
    "work.p3.decisions":
      'Playwright over plain HTTP requests because supermarket pages are JavaScript-rendered and their structure changes often. A real browser is slower but survives the reshuffles. SQLite for the MVP — price history fits comfortably and there\'s no operational reason for Postgres yet. Optimization expressed as two ranked options instead of one, because "buy at one store" and "split for max savings" answer different questions and the user has to choose. Retries with backoff on every scraper to handle the inevitable 503.',
    "work.p3.impact":
      "Working end-to-end MVP. Daily scraping runs unattended. Surfaces the gap between single-store and split-order pricing on real shopping lists. Next iterations: price-history charts and threshold alerts (notify when an item hits a target price).",
    "work.p3.demonstrates":
      "Designing a small system end-to-end: the differentiator isn't the CRUD, it's the optimization step that turns scraped prices into a clear decision.",

    /* P4 — CRONOS */
    "work.p4.title": "CRONOS — Accounting Rules Engine",
    "work.p4.lede":
      "A deterministic engine that automates ingestion and accounting calculations, cutting a 3-hour workflow down to 25 minutes.",
    "work.p4.t1": "Automation",
    "work.p4.t2": "Business rules",
    "work.p4.t3": "Data Quality",
    "work.p4.context":
      "Accounting calculations depended on endless manual downloads from SharePoint and spreadsheet consolidation. Records arrived in heterogeneous formats, operational exceptions went unnoticed, and the entire process was slow, error-prone, and impossible to scale.",
    "work.p4.problem":
      "Replace the 100% manual extraction and calculation with an automated pipeline. Every contract needed validation, every rule applied deterministically, and the result delivered so the business analyst only had to consume the ready data.",
    "work.p4.built":
      "The evolution was designed in phases: from manual to a local script, and now to an automated cloud process. Today, the analyst simply uploads the spreadsheet to SharePoint and triggers the flow. Ingestion occurs via the bank's proprietary tool, eliminating local downloads. The Python engine standardizes columns, isolates exceptions (invalid contracts), and commits the output natively to AWS Glue.",
    "work.p4.decisions":
      "A stateless architecture designed to ease the transition from local to AWS. Current execution is triggered on-demand to handle the operation's variable frequency. The architectural roadmap already plans the next iteration: event-driven execution (triggered by SharePoint uploads) with a batch window (debouncing) to group multiple files into a single run, preventing concurrency issues.",
    "work.p4.impact":
      "Cycle time reduced from <strong>~3 hours to ~25 minutes</strong> per run (+86% efficiency gain). Invalid contracts now trigger alerts instead of corrupting the calculation. Operations regained control of their time, focusing on analyzing the output rather than executing the process.",
    "work.p4.demonstrates":
      "The ability to iteratively migrate a chaotic operational process (manual → local → cloud), modeling business rules in code, and creating a simple interface for the end user.",

    /* P5 — Migration / QA Modernization */
    "work.p5.title": "Accounting QA Modernization & Automation",
    "work.p5.lede":
      "Migrated a QA process to the cloud, reducing software costs and enriching the data model to eliminate manual validations.",
    "work.p5.t1": "Data Integration",
    "work.p5.t2": "Cloud Automation",
    "work.p5.t3": "Cost Reduction",
    "work.p5.context":
      "A weekly validation process operated on a high-cost legacy software. The system did its job but lacked complementary contract information. Consequently, analysts had to manually consult a second system to validate each record, which became a major bottleneck for operations.",
    "work.p5.problem":
      "Migrate the pipeline to AWS to reduce infrastructure costs while seizing the opportunity to centralize information. The goal was to automatically cross-reference accounting data with the contracts database, sparing analysts from validating across multiple systems.",
    "work.p5.built":
      "Conducted the migration of the QA process to an AWS glue job, using AWS Data Wrangler to orchestrate Athena queries. The new pipeline consumes democratized tables in the corporate data lake, integrating QA data with contract details into a single view. The finalized output is automatically pushed to stakeholders.",
    "work.p5.decisions":
      "Treated the migration as an opportunity to consolidate data. By bringing complementary data into the structural pipeline, the need for secondary system lookups was eliminated. AWS Wrangler was chosen to keep the architecture fluid between Glue and Athena.",
    "work.p5.impact":
      "The expensive legacy software routine was decommissioned, driving immediate financial savings. The time analysts spent manually consulting contracts was reduced to zero. The business team now receives a fully enriched, ready-to-act report, drastically optimizing their workflow.",
    "work.p5.demonstrates":
      "The ability to combine cloud cost reduction with user experience improvements, integrating scattered data to eliminate repetitive operational work.",

    /* Demo hooks */
    "demo.lume.label": "Watch the walkthrough",
    "demo.lume.sub": "~4 min — system overview - for better quality adjust to 720p and watch in full screen",
    "demo.lume.caption": "~3 min walkthrough · CodeWiz Assistant",
    "demo.pipeline.label": "View pipeline flow",
    "demo.pipeline.sub": "Ingestion → validation → reconciliation → output",
    "demo.pipeline.stage1": "Ingestion",
    "demo.pipeline.stage2": "Validation",
    "demo.pipeline.stage3": "Reconciliation",
    "demo.pipeline.stage4": "Output",
    "demo.pipeline.stageSub1": "Multi-source",
    "demo.pipeline.stageSub2": "Schema checks",
    "demo.pipeline.stageSub3": "Cross-source check",
    "demo.pipeline.stageSub4": "Reviewed result",
    "demo.pipeline.caption": "Mock data passing through the stages.",

    /* About */
    "about.eyebrow": "About",
    "about.title": "How I work.",
    "about.lede":
      "I work at the line between analysis, product, and operational systems. The place where decisions have to be defensible and numbers have to be correct.",
    "about.p1":
      "Most of what I do is finding inconsistency in a system and removing it without adding new failure modes. The output is rarely a report. It's a workflow that no longer needs me, a pipeline that doesn't drift, a number that can be defended when it's questioned.",
    "about.p2":
      "I'm currently building <strong>TravelYourWay</strong>, a system that turns user constraints into structured travel decisions. It's a user-facing product, but the design discipline is the same: capture the inputs, surface the trade-offs, and produce something the user can act on.",
    "about.p3":
      "I care about correctness, auditability, and the quiet kind of polish that makes complicated systems feel obvious. The best work is legible to everyone who depends on it, not just the person who built it.",
    "about.p4":
      "I do my best work where the analyst, the engineer, and the operator all need to look at the same thing and walk away with the same picture.",
    "about.metaCurrentlyLabel": "Currently",
    "about.metaCurrentlyValue": "Building TravelYourWay",
    "about.metaPracticeLabel": "Practice",
    "about.metaPracticeValue":
      "Business analysis · Data systems · Validation & reconciliation · Operational reliability",
    "about.metaInterestsLabel": "Interests",
    "about.metaInterestsValue":
      "Decision infrastructure · Auditability · Investigation workflows",
    "about.metaToolsLabel": "Tools",
    "about.metaToolsValue":
      "Python · SQL · PySpark · AWS (S3, Glue, Athena, CloudWatch, SageMaker) · AWS Wrangler · QuickSight · Excel",
    "about.principle1": "Correctness is a deliverable, not a tone.",
    "about.principle2":
      "A system you can't explain is a system no one will trust.",
    "about.principle3":
      "Optimize for the day after launch, not launch day.",

    "contact.eyebrow": "Contact",
    "contact.headline": "Have a system that needs <em>untangling?</em>",
    "contact.sub":
      "I take on a small number of engagements at a time. Tell me what you're working on. Short notes welcome, specific problems even better.",
    "footer.copy": "© 2026 Lu",
    "footer.meta": "Built with care · Hosted on GitHub Pages",
  },

  pt: {
    "meta.title": "Lu — Analista de Negócios & Designer de Sistemas",
    "meta.description":
      "Analista de Negócios com mentalidade de produto. Construo sistemas de dados e produtos user-facing — pipelines, validação, reconciliação e ferramentas de apoio à decisão que transformam inputs complexos em outputs claros e acionáveis.",

    "nav.work": "Trabalho",
    "nav.about": "Sobre",
    "nav.contact": "Contato",

    "hero.status": 'Atualmente construindo o <strong>TravelYourWay</strong>',
    "hero.headline":
      'Construindo sistemas <em>orientados a dados</em> que transformam <span class="accent-underline">complexidade</span> em decisões.',
    "hero.sub":
      "Analista de negócios com mentalidade de produto. Construo sistemas de dados e operacionais: pipelines, validação, reconciliação e infraestrutura de decisão que sustentam operações corretas e rastreáveis.",
    "hero.micro":
      "Foco em confiabilidade operacional, auditabilidade e caminhos de investigação claros quando algo não bate.",
    "hero.ctaPrimary": "Ver case studies →",
    "hero.ctaGhost": "Entre em contato",
    "hero.metaFocusLabel": "Foco",
    "hero.metaFocusValue": "Pipelines de Dados · Sistemas de decisão através de dados · Engenharia de Dados · Migrações ",
    "hero.metaStackLabel": "Stack",
    "hero.metaStackValue": "Python · SQL · PySpark · AWS",
    "hero.metaBasedLabel": "Local",
    "hero.metaBasedValue": "Remoto · Brasil",

    "case.context": "Contexto",
    "case.problem": "Problema",
    "case.built": "O que construí",
    "case.building": "O que estou construindo",
    "case.refined": "O que refinei",
    "case.decisions": "Decisões & trade-offs",
    "case.stack": "Stack",
    "case.impact": "Impacto",
    "case.demonstrates": "O que isso demonstra",
    "case.toggleOpen": "Ler case study",
    "case.toggleClose": "Fechar",
    "case.wip": "Em construção",
    "case.wipYear": "Em construção",

    /* FEATURED — TravelYourWay */
    "axiom.eyebrow": "Construindo agora · 2026",
    "axiom.title": "TravelYourWay",
    "axiom.lede":
      "Um sistema que transforma restrições do usuário — orçamento, preferências, prioridades — em decisões estruturadas de viagem num único fluxo.",
    "axiom.context":
      "Planejar uma viagem é pular entre dezenas de abas: voos num lugar, hospedagem em outro, atividades em outro. Cada plataforma compara dentro dela mesma, mas não entre elas. A maior parte do custo não é reservar. São as decisões que você precisa tomar para sequer saber entre o que está escolhendo.",
    "axiom.problem":
      "Substituir o ficar trocando de aba por um único fluxo. Capturar as restrições que realmente importam — orçamento, datas, o que vale gastar, o que não vale — e transformá-las num conjunto estruturado de decisões entre transporte, hospedagem e atividades.",
    "axiom.built":
      "O TravelYourWay recebe restrições do usuário como inputs (limites de orçamento, janelas de data, preferências entre custo vs. conforto, transporte vs. experiência), passa por uma camada de priorização que resolve trade-offs contra as prioridades declaradas do usuário, e produz um plano estruturado: opções de transporte ranqueadas, hospedagem casada com orçamento e localização, atividades sugeridas com base no propósito da viagem. O plano é editável, não final. O sistema apoia a decisão; não a toma.",
    "axiom.decisions":
      'Priorização expressa como pesos explícitos, não defaults implícitos. O usuário diz ao sistema se se importa mais com custo do que com conforto, localização central do que preço, ou densidade de experiência do que tempo livre, e essas escolhas se propagam por toda recomendação. Outputs são opções ranqueadas, não respostas únicas, porque planejamento de viagem raramente é sobre achar a "melhor" escolha; é achar a opção certa para essa viagem. Trade-offs expostos explicitamente em vez de escondidos dentro de uma recomendação.',
    "axiom.impact":
      "Reduzir o tempo de planejamento de horas entre múltiplas plataformas para um único fluxo estruturado. Menos plataformas necessárias. Trade-offs visíveis em vez de escondidos. Um plano que o usuário pode defender depois: <em>foi isso que escolhi, e foi por isso.</em>",
    "axiom.demonstrates":
      "Desenhar um produto user-facing com o mesmo rigor de um sistema interno. Inputs explícitos, trade-offs explícitos, e outputs sobre os quais o usuário pode agir.",
    "axiom.cta": 'Solicitar uma apresentação <span aria-hidden="true">→</span>',

    "work.eyebrow": "Trabalho selecionado",
    "work.title": "Case studies.",
    "work.sub":
      "Todo projeto começa do mesmo jeito. Mapear o sistema, encontrar a inconsistência, construir a coisa mais simples que torne aquilo correto e auditável. Abra um para ver o trabalho por trás do resultado.",

    /* P1 — CodeWiz Assistant */
    "work.p1.title": "CodeWiz Assistant",
    "work.p1.lede":
      "Um assistente interno de Q&amp;A para o time e os franqueados da CodeWiz. Respostas estritamente baseadas na documentação interna, com guardrails contra alucinação.",
    "work.p1.t1": "RAG",
    "work.p1.t2": "Anti-alucinação",
    "work.p1.t3": "Por persona",
    "work.p1.context":
      "A operação da CodeWiz, time e franqueados, dependia de centenas de documentos internos — runbooks, políticas, material de treinamento — e as mesmas perguntas voltavam para as mesmas cinco pessoas. Respostas genéricas de LLM não eram seguras: um número errado num runbook quebra uma operação.",
    "work.p1.problem":
      "Construir um assistente de Q&amp;A estritamente baseado na documentação da CodeWiz. Sem invenção quando o corpus não cobre a pergunta. Respostas adaptadas ao papel do usuário (franqueado, suporte, liderança) e rastreáveis até os parágrafos fonte.",
    "work.p1.built":
      "Ingestão de documentos automatizada via Google Apps Script (sync semanal do Drive) e um pipeline local que faz OCR em PDFs de imagem, fragmenta semanticamente, classifica chunks por tópico, redige PII e desduplica. Embeddings via OpenAI <code>text-embedding-3-large</code>, armazenados em um índice FAISS local. Retrieval + GPT-4 Turbo para gerar respostas com prompts conscientes da persona. Uma camada de recusa impede o modelo de inventar quando a confiança do retrieval é baixa. UI Streamlit para usuários; um dashboard Streamlit separado loga Q&amp;A e expõe as perguntas mais comuns e as não respondidas por persona.",
    "work.p1.decisions":
      "FAISS em vez de um vector DB gerenciado porque o corpus cabe tranquilo e local-first removeu uma dependência operacional. <code>text-embedding-3-large</code> porque a qualidade do retrieval define a confiança do sistema inteiro. Prompts por persona em vez de uma resposta universal porque o franqueado, o agente de suporte e a liderança leem o mesmo fato de forma diferente e precisam de enquadramentos diferentes. Redação de PII na ingestão, não no retrieval, porque a superfície de vazamento é maior no retrieval.",
    "work.p1.impact":
      "Em uso em produção, com time e franqueados. Reduziu perguntas repetidas aos donos originais dos documentos. As perguntas que o CodeWiz não conseguiu responder viraram o backlog editorial do time — lacunas na documentação, expostas como dados em vez de achismo.",
    "work.p1.demonstrates":
      "Construir um assistente de IA onde confiança é o produto: respostas ancoradas na fonte, enquadramento por persona, e uma camada de recusa que mantém o sistema honesto.",

    /* P2 — Pipeline (detecção de risco financeiro) */
    "work.p2.title": "Pipeline de Dados (mock data)",
    "work.p2.lede":
      "Um pipeline de detecção que expõe exposição financeira invisível entre sistemas regulados. Resolução de entidades, reconciliação e validação em cada fronteira.",
    "work.p2.t1": "Detecção de risco",
    "work.p2.t2": "Resolução de entidades",
    "work.p2.t3": "Reconciliação",
    "work.p2.context":
      "Dois sistemas regulados que precisavam estar sincronizados — um registro judicial e um ledger operacional — e não estavam. Cobranças seguiam sendo processadas contra contas que deveriam estar bloqueadas. A lacuna era silenciosa. O custo só ficava visível quando virava demanda jurídica.",
    "work.p2.problem":
      "Detectar a lacuna entre o que era legalmente exigido e o que a operação de fato fazia, em centenas de milhares de registros. Nomes que nem sempre batem, datas que divergem entre sistemas, entidades que exigem resolução cuidadosa antes de qualquer ação.",
    "work.p2.built":
      "Um pipeline de detecção de ponta a ponta. Ingestão multi-fonte de publicações judiciais e registros operacionais (276 mil movimentações). Resolução de entidades em cascata que promove matches determinísticos e roteia casos ambíguos para revisão especializada. Saída diária de casos ranqueados por exposição, cada caso sinalizado auditável de volta às fontes.",
    "work.p2.decisions":
      "Resolução em cascata em vez de match estrito por CPF, porque erros de digitação e homônimos nas publicações judiciais produziam falsos negativos. Quarentena em vez de rejeição: registros ambíguos continuam visíveis e roteáveis para auditoria humana. PySpark porque o volume justificava. CloudWatch logando cada execução para que investigações comecem de um registro sinalizado, não de um stakeholder perguntando por que um número mudou.",
    "work.p2.impact":
      "Expôs R$ 10,5 mi em exposição indevida que antes era invisível. Lag de detecção caiu de 14 meses para 48 horas. Um passivo jurídico oculto convertido numa fila operacional acionável.",
    "work.p2.demonstrates":
      "Transformar uma lacuna silenciosa de dados entre sistemas regulados em controle de risco mensurável e defensável.",

    /* Data story (case 03) */
    "story.title": "Data story · do ponto cego ao controle de risco",
    "story.card1.label": "O ponto cego",
    "story.card1.metric1": "registros analisados",
    "story.card1.metric2": "lag de detecção",
    "story.card1.copy":
      "Ao processar 276 mil movimentações, o silêncio de dados entre o Judiciário e o ledger operacional gerou um lag de detecção de 14 meses. Cobranças indevidas se acumulavam, invisíveis.",
    "story.card2.label": "Engenharia de confiança",
    "story.card2.bar1": "Alta confiança (auto)",
    "story.card2.bar2": "Revisão humana (auditoria)",
    "story.card2.copy":
      "Uma camada de resolução de entidades em cascata separa matches determinísticos de ambiguidade cadastral. 90% do volume é automatizado com segurança; 10% vai para auditoria especializada, com a razão anexada.",
    "story.card3.label": "Risco estancado",
    "story.card3.metric1": "exposição evitada (CDC × 2)",
    "story.card3.copy":
      "Um passivo jurídico oculto de R$ 10,5 mi virou uma barreira preventiva. O tempo de resposta para novos eventos judiciais caiu de 400+ dias para menos de 48 horas, em conformidade com as resoluções do Banco Central.",

    /* P3 — ListaInteligente */
    "work.p3.title": "ListaInteligente — Lista de Compras com Rastreamento de Preços",
    "work.p3.lede":
      "Uma lista de compras que faz scraping diário dos preços nos supermercados e diz onde comprar: numa loja só ou dividido entre lojas, o que sair mais barato.",
    "work.p3.t1": "Web scraping",
    "work.p3.t2": "Otimização",
    "work.p3.t3": "Automação",
    "work.p3.context":
      'Comprar mercado online é pular entre três ou quatro sites de supermercado e uma calculadora. Os preços mudam toda semana, o nome do item varia por loja, e "mais barato" depende de você topar dividir a compra entre lojas ou não. A maior parte das pessoas desiste de comparar e compra onde já está acostumada.',
    "work.p3.problem":
      "Acompanhar preços entre lojas e dizer ao usuário onde comprar. Duas respostas, não uma: compra mais barata numa loja só, e compra mais barata dividida entre lojas. Expor o trade-off explicitamente para o usuário escolher.",
    "work.p3.built":
      "Um sistema em Python com três camadas. Um scraper em Playwright headless puxa preços de produtos do Extra e do iFood Shop. Um store SQLite com SQLAlchemy guarda histórico de preço por produto. Um otimizador compara a lista do usuário entre lojas e retorna duas opções: mais barato numa loja só, ou mais barato dividido entre lojas, com a economia entre as duas. O APScheduler roda o scraper todo dia sem intervenção. FastAPI expõe a API REST; um dashboard em Jinja2 renderiza o resultado.",
    "work.p3.decisions":
      'Playwright em vez de requests HTTP simples porque as páginas dos supermercados são renderizadas via JavaScript e mudam de estrutura com frequência. Navegador real é mais lento, mas sobrevive aos reshuffles. SQLite no MVP — histórico de preço cabe tranquilamente e não tem motivo operacional para Postgres ainda. Otimização expressa como duas opções ranqueadas em vez de uma, porque "comprar numa loja só" e "dividir para economizar mais" respondem perguntas diferentes e o usuário tem que escolher. Retry com backoff em todo scraper para lidar com os 503 inevitáveis.',
    "work.p3.impact":
      "MVP funcionando ponta a ponta. Scraping diário roda sem intervenção. Expõe a diferença entre comprar numa loja só vs. dividir a compra em listas reais. Próximas iterações: gráficos de variação de preço e alertas (avisar quando um item bater um preço-alvo).",
    "work.p3.demonstrates":
      "Desenhar um sistema pequeno ponta a ponta: o diferencial não é o CRUD, é a etapa de otimização que transforma preços coletados em uma decisão clara.",

    /* P4 — CRONOS */
    "work.p4.title": "CRONOS — Motor de Regras Contábeis",
    "work.p4.lede":
      "Um motor determinístico que automatiza a ingestão e o cálculo contábil, reduzindo um fluxo de 3 horas para 25 minutos.",
    "work.p4.t1": "Automação",
    "work.p4.t2": "Regras de negócio",
    "work.p4.t3": "Data Quality",
    "work.p4.context":
      "O cálculo contábil dependia de downloads manuais intermináveis do SharePoint e consolidação em planilhas. Registros chegavam com formatos heterogêneos, exceções operacionais passavam despercebidas, e o processo todo era lento, sujeito a erros e impossível de escalar.",
    "work.p4.problem":
      "Substituir a extração e o cálculo 100% manual por um pipeline automatizado. Cada contrato precisava ser validado, cada regra aplicada deterministicamente, e o resultado entregue de forma que o analista de negócios só precisasse consumir o dado pronto.",
    "work.p4.built":
      "A evolução foi desenhada em fases: do manual para um script local, e agora para um processo automatizado em nuvem. Hoje, o analista apenas faz o upload da planilha no SharePoint e aciona o fluxo. A ingestão ocorre via ferramenta corporativa do banco, eliminando downloads locais. O motor em Python padroniza colunas, isola exceções (contratos inválidos) e comita o output nativamente para o AWS Glue.",
    "work.p4.decisions":
      "Arquitetura stateless desenhada para facilitar a transição do ambiente local para a AWS. O acionamento atual é sob demanda (on-demand) para lidar com a frequência variável da operação. O roadmap arquitetural já prevê a próxima iteração: acionamento orientado a eventos (upload no SharePoint) com uma janela de espera (batch window / debouncing) para agrupar múltiplos arquivos em uma única execução, evitando problemas de concorrência.",
    "work.p4.impact":
      "Tempo de ciclo reduzido de <strong>~3 horas para ~25 minutos</strong> por execução (+86% de ganho de eficiência). Contratos inválidos agora geram alertas em vez de corromper o cálculo. A operação recuperou o controle do tempo, focando na análise do output e não na execução do processo.",
    "work.p4.demonstrates":
      "A capacidade de migrar um processo operacional caótico de forma iterativa (manual → local → nuvem), modelando regras de negócio em código e criando uma interface simples para o usuário final.",

    /* P5 — Migration / QA Modernization */
    "work.p5.title": "Modernização e Automação de QA Contábil",
    "work.p5.lede":
      "Migração de um processo de QA para a nuvem, reduzindo custos de software e enriquecendo o modelo de dados para eliminar validações manuais.",
    "work.p5.t1": "Integração de dados",
    "work.p5.t2": "Automação Cloud",
    "work.p5.t3": "Redução de Custos",
    "work.p5.context":
      "Um processo semanal de validação operava em um software legado de alto custo. O sistema cumpria seu papel, mas não trazia informações complementares de contratos. Por causa disso, os analistas precisavam consultar um segundo sistema manualmente para validar cada apontamento, o que consumia muito tempo da operação.",
    "work.p5.problem":
      "Migrar o pipeline para a AWS para reduzir o custo de infraestrutura e aproveitar a transição para centralizar as informações. O objetivo era cruzar os dados contábeis com a base de contratos automaticamente, poupando o analista do trabalho de validação em múltiplos sistemas.",
    "work.p5.built":
      "Conduzi a transição do processo para um job do AWS Glue, utilizando AWS Data Wrangler para orquestrar consultas no Athena. O novo pipeline consome tabelas democratizadas no data lake corporativo, integrando os dados de QA com os contratos em uma única visualização. O resultado final é enviado automaticamente aos stakeholders.",
    "work.p5.decisions":
      "A migração foi tratada como uma oportunidade de consolidar informações. Ao trazer os dados complementares para dentro do pipeline estrutural, a necessidade de consulta em sistemas secundários foi eliminada. O uso do AWS Wrangler simplificou a transição de dados entre Glue e Athena.",
    "work.p5.impact":
      "O processamento no software legado caro foi desativado, gerando economia financeira imediata. O tempo gasto pelos analistas na consulta manual de contratos foi zerado. O time de negócios agora recebe um relatório enriquecido e pronto para ação, acelerando o ciclo de trabalho.",
    "work.p5.demonstrates":
      "A capacidade de unir redução de custos em nuvem com melhoria da experiência do usuário, integrando dados dispersos para eliminar o trabalho operacional repetitivo.",

    /* Demo hooks */
    "demo.lume.label": "Assistir ao walkthrough",
    "demo.lume.sub": "~4 min — visão geral do sistema - para melhor qualidade ajuste para 720p e assista em tela cheia",
    "demo.lume.caption": "Walkthrough de ~3 min · LUME",
    "demo.pipeline.label": "Ver fluxo do pipeline",
    "demo.pipeline.sub": "Ingestão → validação → reconciliação → saída",
    "demo.pipeline.stage1": "Ingestão",
    "demo.pipeline.stage2": "Validação",
    "demo.pipeline.stage3": "Reconciliação",
    "demo.pipeline.stage4": "Saída",
    "demo.pipeline.stageSub1": "Multi-fonte",
    "demo.pipeline.stageSub2": "Checagem de schema",
    "demo.pipeline.stageSub3": "Cruzamento entre fontes",
    "demo.pipeline.stageSub4": "Resultado revisado",
    "demo.pipeline.caption": "Dados mock passando pelos estágios.",

    /* About */
    "about.eyebrow": "Sobre",
    "about.title": "Como eu trabalho.",
    "about.lede":
      "Trabalho na linha entre análise, produto e sistemas operacionais. O lugar onde decisões precisam ser defensáveis e números precisam estar corretos.",
    "about.p1":
      "A maior parte do que faço é encontrar inconsistência num sistema e removê-la sem criar novos modos de falha. O resultado raramente é um relatório. É um fluxo que não precisa mais de mim, um pipeline que não dá drift, um número que dá pra defender quando é questionado.",
    "about.p2":
      "Estou construindo o <strong>TravelYourWay</strong> agora, um sistema que traduz as restrições do usuário em decisões estruturadas de viagem. É um produto user-facing, mas a disciplina de design é a mesma: capturar os inputs, expor os trade-offs, e produzir algo sobre o qual o usuário possa agir.",
    "about.p3":
      "Me importo com precisão, auditabilidade e aquele polimento silencioso que faz sistemas complicados parecerem óbvios. O melhor trabalho é legível para todos que dependem dele, não só para quem o construiu.",
    "about.p4":
      "Faço meu melhor trabalho onde a pessoa de análise, a de engenharia e a de operação precisam olhar para a mesma coisa e sair com o mesmo entendimento.",
    "about.metaCurrentlyLabel": "Atualmente",
    "about.metaCurrentlyValue": "Construindo o TravelYourWay",
    "about.metaPracticeLabel": "Atuação",
    "about.metaPracticeValue":
      "Análise de negócios · Sistemas de dados · Validação & reconciliação · Confiabilidade operacional",
    "about.metaInterestsLabel": "Interesses",
    "about.metaInterestsValue":
      "Infraestrutura de decisão · Auditabilidade · Fluxos de investigação",
    "about.metaToolsLabel": "Ferramentas",
    "about.metaToolsValue":
      "Python · SQL · PySpark · AWS (S3, Glue, Athena, CloudWatch, SageMaker) · AWS Wrangler · QuickSight · Excel",
    "about.principle1": "Precisão é uma entrega, não um tom de voz.",
    "about.principle2":
      "Um sistema que você não consegue explicar é um sistema que ninguém vai confiar.",
    "about.principle3":
      "Otimize para o dia depois do lançamento, não para o dia do lançamento.",

    "contact.eyebrow": "Contato",
    "contact.headline": "Tem um sistema que precisa ser <em>destravado?</em>",
    "contact.sub":
      "Aceito poucos projetos por vez. Me conta no que você está trabalhando. Mensagens curtas são bem-vindas, problemas específicos ainda mais.",
    "footer.copy": "© 2026 Lu",
    "footer.meta": "Feito com cuidado · Hospedado no GitHub Pages",
  },
};

(() => {
  const root = document.documentElement;

  /* I18n */
  const swapTexts = (lang) => {
    const dict = I18N[lang] || I18N.en;
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!(key in dict)) return;
      const value = dict[key];
      const attrName = el.getAttribute("data-i18n-attr");
      if (attrName) el.setAttribute(attrName, value);
      else el.innerHTML = value;
    });
    try { localStorage.setItem("lu-lang", lang); } catch (e) {}
    document.dispatchEvent(new CustomEvent("lu:lang-changed", { detail: { lang } }));
  };

  let firstLangApply = true;
  let langTimer = null;
  const applyLang = (lang) => {
    if (firstLangApply) {
      firstLangApply = false;
      swapTexts(lang);
      return;
    }
    document.body.classList.add("is-langing");
    window.clearTimeout(langTimer);
    langTimer = window.setTimeout(() => {
      swapTexts(lang);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          document.body.classList.remove("is-langing");
        })
      );
    }, 230);
  };

  /* Theme */
  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("lu-theme", theme); } catch (e) {}
  };

  applyLang(root.getAttribute("data-lang") || "en");
  applyTheme(root.getAttribute("data-theme") || "light");

  /* Toggles */
  const langBtn = document.getElementById("langToggle");
  const themeBtn = document.getElementById("themeToggle");

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const next = root.getAttribute("data-lang") === "pt" ? "en" : "pt";
      applyLang(next);
    });
  }

  if (themeBtn) {
    let themeFadeTimer = null;
    themeBtn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.body.classList.add("theme-fade");
      applyTheme(next);
      window.clearTimeout(themeFadeTimer);
      themeFadeTimer = window.setTimeout(() => {
        document.body.classList.remove("theme-fade");
      }, 520);
    });
  }

  /* Reveal on scroll */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${Math.min(i * 60, 180)}ms`;
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* Sticky nav border + scroll progress */
  const nav = document.querySelector(".nav");
  const progress = document.querySelector(".scroll-progress");
  const updateScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle("is-scrolled", y > 8);
    if (progress) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? Math.min(1, y / h) : 0;
      progress.style.width = `${pct * 100}%`;
    }
  };
  window.addEventListener("scroll", updateScroll, { passive: true });
  window.addEventListener("resize", updateScroll, { passive: true });
  updateScroll();

  /* Smooth-scroll polish */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", id);
    });
  });

  /* Case study expand / collapse — single-open */
  const cases = document.querySelectorAll(".case");
  cases.forEach((art) => {
    const toggle = art.querySelector(".case__toggle");
    const detail = art.querySelector(".case__detail");
    if (!toggle || !detail) return;
    toggle.addEventListener("click", () => {
      const willOpen = art.getAttribute("data-open") !== "true";
      if (willOpen) {
        cases.forEach((other) => {
          if (other !== art && other.getAttribute("data-open") === "true") {
            setCaseOpen(other, false);
          }
        });
      }
      setCaseOpen(art, willOpen);
    });
  });

  function setCaseOpen(art, open) {
    const toggle = art.querySelector(".case__toggle");
    const label = art.querySelector(".case__toggle-label");
    const detail = art.querySelector(".case__detail");
    art.setAttribute("data-open", open ? "true" : "false");
    if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (detail) detail.setAttribute("aria-hidden", open ? "false" : "true");
    if (label) {
      const key = open ? "case.toggleClose" : "case.toggleOpen";
      label.setAttribute("data-i18n", key);
      const lang = root.getAttribute("data-lang") || "en";
      const dict = I18N[lang] || I18N.en;
      label.textContent = dict[key] || (open ? "Close" : "Read case study");
    }
  }

  /* Demo expand / collapse (CodeWiz video, etc.) */
  document.querySelectorAll(".demo-trigger").forEach((btn) => {
    const id = btn.getAttribute("aria-controls");
    const target = id ? document.getElementById(id) : null;
    if (!target) return;
    btn.addEventListener("click", () => {
      const willOpen = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
      target.setAttribute("aria-hidden", willOpen ? "false" : "true");
      target.setAttribute("data-open", willOpen ? "true" : "false");
    });
  });

  /* =========================================================
     Data story — count-up + bar fill on viewport entry
     - Single consolidated module.
     - IntersectionObserver triggers when the story enters view
       (which only happens after the case is expanded, since the
        story lives inside .case__detail-inner with collapsed height).
     - Re-formats already-animated values on language change.
     ========================================================= */
  /* Single, locale-aware formatter for every animated metric.
     - Format hint comes from data-format ("pct" | "brl" | "days" | "int").
     - Heuristic upgrade: if the final target is >= 1000 and no explicit
       hint is set, render as BRL currency. The 423-day metric ships with
       data-format="days" so it always carries the "dias / days" suffix. */
  const formatStoryNumber = (value, fmt, finalTarget) => {
    const lang = root.getAttribute("data-lang") || "en";
    const locale = lang === "pt" ? "pt-BR" : "en-US";
    const n = Math.round(value);
    const display = n.toLocaleString(locale);

    if (fmt === "pct") return n + "%";
    if (fmt === "brl") return "R$ " + display;
    if (fmt === "days") {
      const suffix = lang === "pt" ? " dias" : " days";
      return display + suffix;
    }
    // Auto-upgrade: large numbers without an explicit format render as BRL.
    if (typeof finalTarget === "number" && finalTarget >= 1000 && !fmt) {
      return "R$ " + display;
    }
    return display;
  };

  const applyStoryFinal = (story) => {
    story.querySelectorAll("[data-count]").forEach((el) => {
      const target = parseFloat(el.getAttribute("data-count"));
      const fmt = el.getAttribute("data-format") || "";
      if (!isNaN(target)) el.textContent = formatStoryNumber(target, fmt, target);
    });
    story.querySelectorAll("[data-fill]").forEach((el) => {
      const v = parseFloat(el.getAttribute("data-fill"));
      if (!isNaN(v)) el.style.width = v + "%";
    });
  };

  const animateStory = (story) => {
    if (story.dataset.animated === "true") return;
    story.dataset.animated = "true";

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      applyStoryFinal(story);
      return;
    }

    /* Count-up for [data-count] elements */
    story.querySelectorAll("[data-count]").forEach((el) => {
      const target = parseFloat(el.getAttribute("data-count"));
      const fmt = el.getAttribute("data-format") || "";
      if (isNaN(target)) return;

      const duration = 1400;
      const start = performance.now();

      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = formatStoryNumber(target * eased, fmt, target);
        if (t < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    });

    /* Bar-fill (CSS transition triggered by setting width) */
    story.querySelectorAll("[data-fill]").forEach((el) => {
      const v = parseFloat(el.getAttribute("data-fill"));
      if (isNaN(v)) return;
      requestAnimationFrame(() => {
        el.style.width = v + "%";
      });
    });
  };

  const stories = document.querySelectorAll(".case__data-story");
  if (stories.length) {
    if ("IntersectionObserver" in window) {
      const storyIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animateStory(entry.target);
            storyIO.unobserve(entry.target);
          });
        },
        { threshold: 0.25 }
      );
      stories.forEach((story) => storyIO.observe(story));
    } else {
      stories.forEach(applyStoryFinal);
    }
  }

  /* Hook into the i18n pipeline so already-animated numbers
     are re-rendered in the new locale (en-US ↔ pt-BR). */
  document.addEventListener("lu:lang-changed", () => {
    document
      .querySelectorAll(".case__data-story[data-animated='true']")
      .forEach(applyStoryFinal);
  });
})();