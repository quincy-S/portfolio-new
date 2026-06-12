export const projects = [
  {
    id: 'erdms',
    title: 'ERDMS — Enterprise Regulatory Platform',
    description:
      'Core engineer on a mission-critical regulatory and document management system handling 10,000+ daily transactions across multiple government-integrated departments.',
    highlights: [
      // 'Built AI-powered requirement analysis tool using the Claude API, streaming responses, structured JSON parsing, and LLM output verification gates before production use',
      // 'Architected event-driven ETL pipeline with Apache Kafka for real-time data processing at scale',
      // 'Led integration test infrastructure using xUnit, Testcontainers, and WebApplicationFactory against real DB instances',
      // 'Directed an engineer team across design, implementation, and production support',
    ],
    tech: ['C# / ASP.NET Core', 'EF Core', 'SQL Server', 'React / TypeScript', 'Kafka', 'Claude API', 'Azure DevOps', 'Zustand'],
    tag: 'PRODUCTION',
    tagVariant: 'live' as const,
    icon: '⚙️',
    iconVariant: 'blue' as const,
    featured: true,
  },
  {
    id: 'mqstore',
    title: 'MQStore — South African E-Commerce Platform',
    description:
      'Production-grade clothing e-commerce store built from scratch as a modular monolith with Domain-Driven Design patterns. Fully owned from schema to storefront.',
    highlights: [
      // 'Modular monolith architecture with DDD — bounded contexts, aggregates, domain events',
      // 'EF Core migrations with PostgreSQL, full schema design and indexing strategy',
      // 'React storefront with TypeScript, React Hook Form, and optimistic UI patterns',
    ],
    tech: ['ASP.NET Core', 'PostgreSQL', 'EF Core', 'React', 'TypeScript', 'DDD'],
    tag: 'IN PROGRESS',
    tagVariant: 'default' as const,
    icon: '🛍️',
    iconVariant: 'green' as const,
    featured: false,
  },
  {
    id: 'trading',
    title: 'Autonomous XAUUSDm Trading Agent',
    description:
      'Fully autonomous algorithmic trading system for gold futures, backtested over multi-year historical data with risk-adjusted performance metrics.',
    highlights: [
      // 'ATR-based dynamic stop-loss / take-profit with EMA200 D1 trend filter',
      // 'Integrated FRED macro data and sentiment signals for entry confirmation',
      // 'Sharpe ratio 1.77, max drawdown ~6.7% across backtested period',
    ],
    tech: ['Python', 'MetaTrader 5', 'FRED API', 'pandas', 'backtesting.py'],
    tag: 'PERSONAL',
    tagVariant: 'default' as const,
    icon: '📈',
    iconVariant: 'amber' as const,
    featured: false,
  },
  {
    id: 'betting',
    title: 'Sports Betting Research Agent',
    description:
      'AI-powered research pipeline that scrapes live odds, applies statistical models, and surfaces high-value opportunities — fully automated from data ingestion to output.',
    highlights: [
      // 'Playwright-based web scraping pipeline with The Odds API integration',
      // 'Automated SportyBet interaction layer for real-time price validation',
      // 'LLM-powered event analysis with structured JSON output and confidence scoring',
    ],
    tech: ['Python', 'Playwright', 'The Odds API', 'Claude API'],
    tag: 'PERSONAL',
    tagVariant: 'default' as const,
    icon: '🤖',
    iconVariant: 'blue' as const,
    featured: false,
  },
  // {
  //   id: 'jobagent',
  //   title: 'AI Job Search Agent',
  //   description:
  //     'Full-stack web agent that searches, filters, and surfaces relevant job listings using the Anthropic API — built to solve a personal problem end-to-end.',
  //   highlights: [
  //     'React frontend with Node.js backend and Claude API web search integration',
  //     'LLM-driven relevance scoring and role matching against a skills profile',
  //     'Built and shipped in a single session — 0 to working product',
  //   ],
  //   tech: ['React', 'Node.js', 'Claude API', 'TypeScript'],
  //   tag: 'PERSONAL',
  //   tagVariant: 'default' as const,
  //   icon: '🔍',
  //   iconVariant: 'green' as const,
  //   featured: false,
  // },
  {
    id: 'freelance',
    title: 'ETL Pipelines — Finance & Logistics',
    description:
      'Sole technical lead across 15+ freelance engagements in finance, logistics, and retail. Owned architecture, delivery, and production support end-to-end across each.',
    highlights: [
      // 'Automated pipelines processing 50,000+ records daily on AWS Lambda + S3 + RDS',
      // 'Payment gateway and accounting platform integrations with webhook resilience patterns',
      // '90%+ system reliability across client environments with CI/CD quality gates',
    ],
    tech: ['Node.js', 'Next.js', 'AWS', 'PostgreSQL', 'MongoDB', 'Docker'],
    tag: 'CLIENT WORK',
    tagVariant: 'default' as const,
    icon: '💼',
    iconVariant: 'amber' as const,
    featured: false,
  },
];

export const experience = [
  {
    role: 'Full-Stack Software Engineer',
    company: 'Persol Systems',
    date: 'Aug 2023 – present',
    description:
      'Core engineer on ERDMS — an enterprise regulatory platform built on ASP.NET Core, React/TypeScript, and SQL Server. Delivered AI integrations, event-driven pipelines, and led a team of four.',
    bullets: [
      'Shipped Claude API integration — streaming, structured JSON parsing, verification gates on LLM output',
      'Architected Kafka-based ETL pipeline for real-time distributed data processing',
      'Built integration test infrastructure with Testcontainers and real DB instances',
      'Directed 4 engineers, participated in client-facing requirements sessions',
    ],
    tech: ['C#', 'ASP.NET Core', 'EF Core', 'React', 'TypeScript', 'Kafka', 'SQL Server', 'Azure DevOps'],
  },
  {
    role: 'Software Developer',
    company: 'ANAF Commercial Services',
    date: 'Aug 2021 – Aug 2022',
    description:
      'Led full-stack development of customer interaction systems, improved performance by 40%, and built real-time analytics dashboards across PostgreSQL and SQL Server.',
    bullets: [],
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'SQL Server', 'Azure DevOps'],
  },
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Independent',
    date: 'May 2020 – Aug 2023',
    description:
      'Sole technical lead across 15+ client engagements in finance, logistics, and retail. Architecture to production, no safety net.',
    bullets: [],
    tech: ['Node.js', 'Next.js', 'React', 'AWS', 'PostgreSQL', 'MongoDB'],
  },
  {
    role: 'BSc Petroleum Engineering',
    company: 'University of Mines and Technology',
    date: '2015 – 2019',
    description:
      'Science degree with strong foundations in quantitative reasoning, systems thinking, and precision-critical environments.',
    bullets: [],
    tech: [],
  },
];

export const skillGroups = [
  {
    label: 'AI / LLM',
    skills: ['Claude API', 'LangChain', 'Prompt engineering', 'RAG', 'Vector stores', 'GitHub Copilot'],
  },
  {
    label: 'Backend',
    skills: ['C# / .NET', 'ASP.NET Core', 'Node.js', 'NestJS', 'CQRS', 'Kafka', 'REST'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Zustand', 'React Hook Form', 'D3.js'],
  },
  {
    label: 'Data',
    skills: ['PostgreSQL', 'SQL Server', 'MongoDB', 'EF Core', 'Schema design', 'Query optimisation'],
  },
  {
    label: 'Cloud / Infra',
    skills: ['AWS', 'Azure', 'Docker', 'CI/CD', 'Azure DevOps'],
  },
  {
    label: 'Testing',
    skills: ['xUnit', 'Testcontainers', 'Jest', 'Cypress', 'TDD / BDD', 'Integration testing'],
  },
];
