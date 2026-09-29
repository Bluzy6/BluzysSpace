import type { SiteContent } from "./types";

export const RESUME_PDF_URL = "/CV_BluzyLu_EN&CN.pdf";

/** 证件照（Vite public 目录） */
export const PORTRAIT_URL = "/portrait_Bluzy.jpg";

export const SITE: SiteContent = {
  meta: {
    name: { zh: "陆子毅 Bluzy Lu", en: "Ziyi Lu (Bluzy Lu)" },
    headline: { zh: "AI Agent 全栈工程师", en: "AI Agent Full-Stack Engineer" },
    tagline: {
      zh: "智能可视分析 · 企业级 RAG / MCP",
      en: "Intelligent Visual Analytics · Enterprise RAG / MCP",
    },
    location: { zh: "中国海洋大学（985）本硕", en: "Ocean University of China (985)" },
    birth: "2002.06",
  },
  nav: [
    { id: "about", label: { zh: "个人亮点", en: "About" } },
    { id: "experience", label: { zh: "实习经历", en: "Experience" } },
    { id: "projects", label: { zh: "项目经历", en: "Projects" } },
    { id: "education", label: { zh: "教育背景", en: "Education" } },
    { id: "skills", label: { zh: "技术能力", en: "Skills" } },
    { id: "honors", label: { zh: "荣誉奖项", en: "Honors" } },
    { id: "contact", label: { zh: "联系", en: "Contact" } },
  ],
  hero: {
    kicker: { zh: "校招 · 2027 届", en: "New Grad Hiring · Class of 2027" },
    role: {
      zh: "AI Agent 全栈工程师 · 智能可视分析方向",
      en: "AI Agent Full-Stack Engineer · Intelligent Visual Analytics",
    },
    intro: {
      zh: "面向企业级 RAG / MCP 与 Agentic 可视分析的全栈开发者：让海量知识可被检索、让模型结论可被解释、让每一次投递都有辨识度。",
      en: "A full-stack developer working on enterprise RAG / MCP and agentic visual analytics — making large knowledge bases retrievable, model conclusions explainable, and every application memorable.",
    },
    chips: ["Java", "Spring Boot", "LangChain4j", "MCP", "RAG / GraphRAG", "Vue3"],
    downloadCta: { zh: "下载 PDF 简历", en: "Download PDF Résumé" },
    copyHint: { zh: "点击复制", en: "Click to copy" },
    visualAlt: { zh: "证件照", en: "Portrait photo" },
  },
  contacts: [
    { kind: "email", value: "bluzy@qq.com", label: { zh: "邮箱", en: "Email" } },
    { kind: "phone", value: "(+86) 17755252602", label: { zh: "电话", en: "Tel" } },
    { kind: "wechat", value: "Bluzy6", label: { zh: "微信", en: "WeChat" } },
    {
      kind: "github",
      value: "https://github.com/Bluzy6/",
      label: { zh: "GitHub", en: "GitHub" },
      href: "https://github.com/Bluzy6/",
    },
  ],
  highlights: {
    heading: { zh: "个人亮点", en: "What Stands Out" },
    lead: {
      zh: "从学历、实习到科研竞赛，几个最值得记住的点。",
      en: "Education, internship and research competitions — the parts worth remembering.",
    },
    items: [
      {
        index: "01",
        title: { zh: "985 本硕 · GPA 3.82 / 4.00", en: "985 B.S. + M.S. · GPA 3.82 / 4.00" },
        body: {
          zh: "中国海洋大学计算机科学与技术，硕士均分 90.43 / 100，研究方向为智能可视分析。",
          en: "Computer Science at Ocean University of China; master's average score 90.43 / 100, majoring in intelligent visual analytics.",
        },
      },
      {
        index: "02",
        title: { zh: "小米集团汽车部实习", en: "Xiaomi Corporation (Automotive) Intern" },
        body: {
          zh: "2026.06 至今担任 AI 全栈开发（AI Agent Full-Stack Engineer），参与 Agent 方向工程落地。",
          en: "AI full-stack development since June 2026, shipping agent-oriented engineering work.",
        },
      },
      {
        index: "03",
        title: { zh: "主导企业级 RAG + MCP 建设", en: "Owner of Enterprise RAG + MCP" },
        body: {
          zh: "支撑 5 万+ 需求数据知识化接入，构建 106 条 Query 评测集，Top-10 命中率 86%。",
          en: "Knowledge ingestion for 50K+ requirement records; a 106-query evaluation set with an 86% Top-10 hit rate.",
        },
      },
      {
        index: "04",
        title: { zh: "多项国家级竞赛获奖", en: "Multiple National-Level Awards" },
        body: {
          zh: "国家智慧教育平台数据创新应用活动全国第二名（杰出作品）、MathorCup 数学建模挑战赛全国一等奖、全国大学生数学建模竞赛省一等奖。",
          en: "National 2nd Place (Outstanding Work) in the Smart Education Platform Data Innovation Competition; National First Prize in MathorCup Mathematical Modeling Challenge; Provincial First Prize in the China Undergraduate Mathematical Contest in Modeling.",
        },
      },
    ],
  },
  skills: {
    heading: { zh: "技术能力", en: "Technical Skills" },
    lead: {
      zh: "后端、Agent、可视化三条主线，加一套自己的 AI 开发工作流。",
      en: "Three tracks — backend, agents, visualization — plus a personal AI development workflow.",
    },
    groups: [
      {
        name: { zh: "后端与基础", en: "Backend & Infrastructure" },
        items: ["Java", "Python", "C++", "Spring Boot", "MySQL", "Redis", "Docker", "Git", "Maven"],
      },
      {
        name: { zh: "AI / Agent", en: "AI / Agent" },
        items: [
          "LangChain4j",
          "ReAct",
          "MCP",
          "RAG / GraphRAG",
          "Hybrid Retrieval",
          "Mem0",
          "BM25 + Vector",
          "RRF / Reranker",
          "Elasticsearch",
        ],
      },
      {
        name: { zh: "前端与可视化", en: "Frontend & Visualization" },
        items: ["Vue3", "MapLibre GL", "Flask", "PostGIS", "XGBoost LambdaMART"],
      },
    ],
    workflow: {
      name: { zh: "AI 开发工作流", en: "AI Development Workflow" },
      items: ["Claude Code / Codex", "MCP", "Skills", "Automated Testing", "Code Review"],
    },
    certs: {
      name: { zh: "持有证书", en: "Certifications" },
      items: ["CET-6", "CSP Certification"],
    },
  },
  projects: {
    heading: { zh: "项目经历", en: "Selected Projects" },
    lead: {
      zh: "两个项目，覆盖 Agentic 可视分析与教育数据产品。",
      en: "Two projects spanning agentic visual analytics and an education data product.",
    },
    expand: { zh: "查看详情", en: "View details" },
    collapse: { zh: "收起", en: "Collapse" },
    stackLabel: { zh: "技术栈", en: "Tech Stack" },
    roleLabel: { zh: "角色", en: "Role" },
    items: [
      {
        slug: "as-co2vis",
        title: {
          zh: "AS-CO₂Vis 智能海气 CO₂ 通量可视分析",
          en: "AS-CO₂Vis — Agentic Visual Analytics for Air–Sea CO₂ Flux",
        },
        role: { zh: "系统设计 + 全栈开发", en: "System Design & Full-Stack Development" },
        period: "GraphRAG · MapLibre",
        summary: {
          zh: "面向全球海气 CO₂ 通量预测与机理分析，构建 Agent 驱动的可视分析系统。",
          en: "An agent-driven visual analytics workflow for global air–sea CO₂ flux prediction and mechanism analysis.",
        },
        stack: ["GraphRAG", "PostgreSQL / PostGIS", "XGBoost LambdaMART", "Vue3 / MapLibre GL", "Flask"],
        bullets: [
          {
            zh: "实现链路：将自然语言与地图参数结构化，封装空间查询、模型归因、GraphRAG 检索和证据重排工具，按分析流程编排调用。",
            en: "Structured natural-language queries and map states into spatial query, model attribution, GraphRAG retrieval and evidence reranking tools.",
          },
          {
            zh: "基于 SimVP 训练领域预测模型，分析结果通过统一状态回写前端，联动地图、归因视图与证据卡片。",
            en: "Trained a SimVP-based forecasting model and linked model outputs to interactive maps, attribution views and evidence cards through unified frontend state.",
          },
          {
            zh: "核心成果：Agentic VA 工作流在 120 条评测集上 Recall@5 96.8%、nDCG@10 97.7%，预测 MSE 228.228±2.518。",
            en: "Evaluated on 120 queries, achieving 96.8% Recall@5 and 97.7% nDCG@10; forecasting MSE reached 228.228.",
          },
        ],
        metrics: [
          { value: "96.8", suffix: "%", label: { zh: "Recall@5", en: "Recall@5" } },
          { value: "97.7", suffix: "%", label: { zh: "nDCG@10", en: "nDCG@10" } },
          { value: "228.228", label: { zh: "预测 MSE ±2.518", en: "Forecasting MSE ±2.518" } },
          { value: "120", label: { zh: "条评测集", en: "Eval queries" } },
        ],
        link: {
          url: "https://github.com/Bluzy6/geocarbonai",
          label: { zh: "GitHub 仓库", en: "GitHub repository" },
        },
      },
      {
        slug: "smarteduvis",
        title: {
          zh: "SmartEduVis 智慧教育数据可视分析",
          en: "SmartEduVis — Smart Education Data Visual Analytics",
        },
        role: { zh: "系统设计 + 全栈开发", en: "System Design & Full-Stack Development" },
        period: "National 2nd Place",
        summary: {
          zh: "荣获首届国家智慧教育平台数据创新应用活动全国第二名（杰出作品）。",
          en: "National 2nd Place (Outstanding Work), National Smart Education Platform Data Innovation Competition.",
        },
        stack: ["Visual Analytics", "Education Data", "Full-Stack"],
        bullets: [
          {
            zh: "面向教育管理者和教师用户，设计学生群体画像、学习路径分析和差异识别视图，支持用户基于数据进行教学决策。",
            en: "Designed cohort profiling, learning-path analysis and difference-detection views for educators and administrators, supporting data-driven teaching decisions.",
          },
        ],
        metrics: [
          { value: "No.2", label: { zh: "全国第二名", en: "National 2nd place" } },
          { value: "10万+", label: { zh: "条教育平台真实数据", en: "Real records from the education platform" } },
          { value: "全栈", label: { zh: "开发角色", en: "Full-stack development" } },
        ],
        link: {
          url: "https://it.ouc.edu.cn/2025/0423/c16065a498830/page.htm",
          label: { zh: "校方报道", en: "Official report" },
        },
      },
    ],
  },
  education: {
    heading: { zh: "教育背景", en: "Education" },
    lead: {
      zh: "中国海洋大学（985）计算机科学与技术，本硕同校。",
      en: "Computer Science and Technology at Ocean University of China (985).",
    },
    items: [
      {
        school: { zh: "中国海洋大学（985）", en: "Ocean University of China (985)" },
        degree: { zh: "硕士 · 计算机科学与技术", en: "M.S. in Computer Science and Technology" },
        period: "2024.08 – 2027.06",
        detail: {
          zh: "研究方向：智能可视分析 ｜ GPA 3.82 / 4.00（均分 90.43 / 100）",
          en: "Research: Intelligent Visual Analytics ｜ GPA 3.82 / 4.00",
        },
        honors: [
          {
            zh: "国家智慧教育平台数据创新应用活动 全国第二名",
            en: "National 2nd Place, National Smart Education Platform Data Innovation Competition",
          },
        ],
      },
      {
        school: { zh: "中国海洋大学（985）", en: "Ocean University of China (985)" },
        degree: { zh: "本科 · 计算机科学与技术", en: "B.S. in Computer Science and Technology" },
        period: "2020.09 – 2024.06",
        detail: {
          zh: "荣誉奖项见下方「荣誉奖项」区块",
          en: "See the Honors section below for competition awards",
        },
        honors: [
          { zh: "MathorCup 数学建模挑战赛 全国一等奖", en: "National First Prize, MathorCup Mathematical Modeling Challenge" },
          {
            zh: "大学生数学建模竞赛 省一等奖",
            en: "Provincial First Prize, China Undergraduate Mathematical Contest in Modeling",
          },
          { zh: "美国大学生数学建模竞赛 H 奖", en: "Honorable Mention, COMAP MCM/ICM" },
        ],
      },
    ],
  },
  experience: {
    heading: { zh: "实习经历", en: "Experience" },
    expand: { zh: "查看详情", en: "View details" },
    collapse: { zh: "收起", en: "Collapse" },
    projectsLabel: { zh: "下属项目", en: "Projects in this role" },
    lead: {
      zh: "当前在小米汽车做 AI Agent 方向的全栈工程；下方两个项目为实习期间在该集团一线负责的核心工作。点击「查看详情」可展开完整的技术栈、链路与成果。",
      en: "Currently doing full-stack engineering on AI agents at Xiaomi Automotive. The two nested projects below are the core work owned during the internship — click “View details” for the full stack, pipeline and results.",
    },
    items: [
      {
        company: { zh: "小米集团", en: "Xiaomi Corporation" },
        dept: { zh: "汽车部", en: "Automotive Division" },
        role: { zh: "AI 全栈开发", en: "AI Agent Full-Stack Engineer" },
        period: "2026.06 – 至今",
        summary: {
          zh: "面向企业级 RAG / MCP 与 Agent 方向，负责从方案设计、核心开发到测试交付的整体流程。",
          en: "Working on enterprise RAG / MCP and agent capabilities, owning the full loop from solution design and core development to testing and delivery.",
        },
        tags: ["AI Agent", "Full-Stack", "RAG / MCP"],
        bullets: [
          {
            zh: "工作描述：参与企业需求管理中台（MUDE-R）AI 助手（MI-UDE-CLAW）平台部分架构设计与核心模块研发，基于 Spring Boot、Spring AI Alibaba、LangChain4j 等技术栈，负责知识检索、MCP Tool、长期记忆与上下文管理等能力建设，并参与 Agent 工具编排与 Skill 化接入，完成从方案设计、核心开发到测试交付的整体流程。",
            en: "Scope: contributed to architecture design and core module development of the AI assistant (MI-UDE-CLAW) on the enterprise requirement-management platform (MUDE-R). Built on Spring Boot, Spring AI Alibaba and LangChain4j, responsible for knowledge retrieval, MCP tools, long-term memory and context management, plus agent tool orchestration and skill-based integration — covering the whole path from solution design and core development to testing and delivery.",
          },
          {
            zh: "核心成果：打通 5 万+ 需求数据文档的 RAG 知识化链路，结合 Elasticsearch、BM25 + Vector、RRF / Reranker、Metadata Filter 实现混合检索与权限感知召回，落地 6 个 MCP Tools，并通过增量同步、Redis 缓存、熔断降级等机制保障生产可用性。",
            en: "Key results: delivered the end-to-end RAG knowledge pipeline for 50K+ requirement documents; implemented hybrid retrieval and permission-aware recall with Elasticsearch, BM25 + vector, RRF / reranker and metadata filters; shipped 6 MCP tools; kept production reliability with incremental sync, Redis caching and circuit-breaker fallbacks.",
          },
        ],
        children: [
          {
            company: { zh: "MUDE-R 需求管理中台", en: "MUDE-R Requirement Platform" },
            dept: { zh: "AI 助手 RAG 与 MCP 能力建设", en: "AI Assistant · RAG & MCP" },
            role: { zh: "技术负责人", en: "Technical Owner" },
            period: "Internship Project",
            summary: {
              zh: "面向海量异构需求文档，搭建端到端 RAG 链路与权限感知混合检索，并封装 6 个 MCP Tools。",
              en: "Built an end-to-end RAG pipeline with permission-aware hybrid retrieval for large-scale heterogeneous requirement documents, and shipped 6 MCP tools.",
            },
            tags: ["Java / Spring Boot", "LangChain4j", "BM25 + Vector", "RRF / Reranker", "Elasticsearch", "MCP"],
            bullets: [
              {
                zh: "技术栈：Java / Spring Boot、LangChain4j、MCP、BM25 + Vector、RRF / Reranker、Elasticsearch。",
                en: "Tech stack: Java / Spring Boot, LangChain4j, MCP, BM25 + Vector, RRF / Reranker, Elasticsearch.",
              },
              {
                zh: "项目描述：面向企业研发需求管理中台海量异构文档与需求数据，解决知识难统一接入、权限难隔离、业务变更导致知识过期及 Agent 工具调用碎片化等问题，负责 AI 助手 RAG 与 MCP 能力设计、实现及落地。",
                en: "Overview: addressed hard-to-unify knowledge ingestion, permission isolation, stale knowledge after business changes and fragmented agent tool calls across massive heterogeneous documents; owned the design, implementation and rollout of the assistant's RAG and MCP capabilities.",
              },
              {
                zh: "RAG 链路建设：文档聚合、富文本解析、Metadata 封装、知识库导入与 Agent 检索，基于 Java Service 分层封装数据聚合与知识库调用，统一处理多文档异构业务数据及富文本内容。",
                en: "RAG pipeline: document aggregation, rich-text parsing, metadata wrapping, knowledge-base ingestion and agent retrieval; layered Java services unified heterogeneous business data and rich-text content.",
              },
              {
                zh: "Hybrid Retrieval：构建 BM25 + Dense Vector 双路召回，分别处理研发专有名词精确匹配与自然语言语义检索；对 Top-10 候选使用 RRF 融合 + Reranker 二阶段重排，并结合 Metadata Filter 缩小检索空间。",
                en: "Hybrid retrieval: BM25 + dense-vector dual recall for exact term matching and semantic search; two-stage reranking with RRF fusion and a reranker over Top-10 candidates, narrowed further by metadata filters.",
              },
              {
                zh: "权限感知 RAG：将多层级权限信息注入知识索引，通过 Metadata Filter 在召回阶段实现用户级知识隔离。",
                en: "Permission-aware RAG: injected multi-level permission data into the index so user-level knowledge isolation happens during recall via metadata filters.",
              },
              {
                zh: "增量同步与可靠性：基于变更记录与定时任务实现文档增删改同步，通过版本控制、失败重试与补偿保障一致性，并排查 MySQL 和 Elasticsearch 多数据源问题。",
                en: "Incremental sync and reliability: change-log driven add/update/delete sync with versioning, retries and compensation for consistency; debugged MySQL / Elasticsearch multi-datasource issues.",
              },
              {
                zh: "MCP Server：封装 6 个 MCP Tools，覆盖知识检索、需求查询、文档定位三类场景。定义 Tool Schema、参数校验、权限上下文及统一返回协议，使 Agent 可根据用户意图自主调用企业内部知识与业务能力。",
                en: "MCP server: packaged 6 MCP tools spanning knowledge retrieval, requirement lookup and document navigation, with defined tool schemas, parameter validation, permission context and a unified response contract so the agent can invoke internal knowledge and business capabilities autonomously.",
              },
              {
                zh: "核心成果：支撑 5 万+ 需求数据知识化接入，构建 106 个 Query 评测集、Top-10 命中率达 86%；落地 6 个 MCP Tools，知识更新延迟控制在 30min 内。",
                en: "Key results: knowledge ingestion for 50K+ requirement records; a 106-query evaluation set with an 86% Top-10 hit rate; 6 MCP tools delivered with knowledge update latency within 30 minutes.",
              },
            ],
            metrics: [
              { value: "86", suffix: "%", label: { zh: "Top-10 命中率", en: "Top-10 hit rate" } },
              { value: "106", label: { zh: "Query 评测集", en: "Eval queries" } },
              { value: "6", label: { zh: "MCP Tools", en: "MCP tools" } },
              { value: "50K+", label: { zh: "需求数据知识化", en: "Records ingested" } },
            ],
          },
          {
            company: { zh: "MI-UDE-CLAW", en: "MI-UDE-CLAW" },
            dept: { zh: "长期记忆与上下文管理", en: "Long-Term Memory & Context" },
            role: { zh: "核心开发", en: "Core Developer" },
            period: "Internship Project",
            summary: {
              zh: "为 Agent 接入长期记忆，解决 ReAct 重复读写、记忆串扰与记忆服务故障影响主对话的问题。",
              en: "Added long-term memory to the agent, fixing repeated ReAct read/write, memory cross-talk and memory-service failures blocking the main conversation.",
            },
            tags: ["Java / Spring Boot", "Spring AI Alibaba", "Mem0", "Redis", "ReAct"],
            bullets: [
              {
                zh: "技术栈：Java / Spring Boot、Spring AI Alibaba、Mem0、Redis、ReAct。",
                en: "Tech stack: Java / Spring Boot, Spring AI Alibaba, Mem0, Redis, ReAct.",
              },
              {
                zh: "项目描述：接入长期记忆，解决 ReAct 多次调用重复读写、记忆串扰，以及 Memory 服务异常影响主对话等问题。",
                en: "Overview: integrated long-term memory to resolve duplicate read/write across ReAct calls, memory cross-talk, and memory-service failures that affected the main conversation.",
              },
              {
                zh: "记忆链路：基于前后置 Hook 实现调用前召回、结束后异步写入，turnId + CAS 保证 ReAct 单轮只召回写入一次。",
                en: "Memory flow: pre/post hooks recall before the call and persist asynchronously afterwards; turnId + CAS guarantee exactly one recall and write per ReAct turn.",
              },
              {
                zh: "核心成果：3 路并行召回、单轮一次读写、20 条 / 1500 Token 上下文控制，独立熔断保证记忆故障不影响主对话。",
                en: "Key results: 3-way parallel recall, one read-write per turn, context capped at 20 items / 1,500 tokens, and an independent circuit breaker so memory failures never block the main conversation.",
              },
            ],
            metrics: [
              { value: "3", label: { zh: "路并行召回", en: "Parallel recall paths" } },
              { value: "20", label: { zh: "条 / 1500 Token 上限", en: "Items / 1,500 tokens" } },
              { value: "1", label: { zh: "轮一次读写", en: "Read-write per turn" } },
            ],
          },
        ],
      },
    ],
  },
  honors: {
    heading: { zh: "荣誉奖项", en: "Honors & Awards" },
    lead: {
      zh: "以数学建模与数据创新类竞赛为主。",
      en: "Mostly mathematical modeling and data innovation competitions.",
    },
    items: [
      {
        prize: { zh: "全国第二名（杰出作品）", en: "National 2nd Place (Outstanding Work)" },
        event: { zh: "首届国家智慧教育平台数据创新应用活动", en: "1st National Smart Education Platform Data Innovation Competition" },
      },
      {
        prize: { zh: "全国一等奖", en: "National First Prize" },
        event: { zh: "MathorCup 数学建模挑战赛", en: "MathorCup Mathematical Modeling Challenge" },
      },
      {
        prize: { zh: "省一等奖", en: "Provincial First Prize" },
        event: { zh: "全国大学生数学建模竞赛", en: "China Undergraduate Mathematical Contest in Modeling" },
      },
      {
        prize: { zh: "H 奖", en: "Honorable Mention" },
        event: { zh: "美国大学生数学建模竞赛 MCM/ICM", en: "COMAP MCM/ICM" },
      },
      {
        prize: { zh: "CET-6 ｜ CSP 认证", en: "CET-6 ｜ CSP Certification" },
        event: { zh: "语言能力与算法认证", en: "Language & algorithm certifications" },
      },
    ],
  },
  footer: {
    contactHeading: { zh: "联系我", en: "Get in touch" },
    resumeCta: { zh: "下载 PDF 简历", en: "Download PDF Résumé" },
    note: {
      zh: "",
      en: "",
    },
  },
  toast: {
    copied: { zh: "已复制到剪贴板", en: "Copied to clipboard" },
    copyFallback: {
      zh: "浏览器限制自动复制，已选中内容，请手动按 Ctrl/Cmd+C",
      en: "Auto-copy blocked; text selected — press Ctrl/Cmd+C",
    },
  },
};
