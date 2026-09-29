export type Lang = "zh" | "en";

export interface Localized {
  zh: string;
  en: string;
}

export interface NavItem {
  id: string;
  label: Localized;
}

export interface ContactItem {
  kind: "email" | "phone" | "wechat" | "github";
  value: string;
  label: Localized;
  /** 有 href 时渲染为可点击外链，否则仅可复制 */
  href?: string;
}

export interface Highlight {
  index: string;
  title: Localized;
  body: Localized;
}

export interface SkillGroup {
  name: Localized;
  items: string[];
}

export interface Metric {
  value: string;
  suffix?: string;
  label: Localized;
}

export interface Project {
  slug: string;
  title: Localized;
  role: Localized;
  period: string;
  summary: Localized;
  stack: string[];
  bullets: Localized[];
  metrics: Metric[];
  /** 卡片直接可见的作品外链（GitHub / 报道页等） */
  link?: { url: string; label: Localized };
}

export interface Education {
  school: Localized;
  degree: Localized;
  period: string;
  detail: Localized;
  honors: Localized[];
}

export interface Experience {
  company: Localized;
  dept: Localized;
  role: Localized;
  period: string;
  /** 卡片上的一行简洁概述 */
  summary: Localized;
  tags: string[];
  /** 「查看详情」展开后的分段详述，与项目卡片 bullets 同构 */
  bullets: Localized[];
  metrics?: Metric[];
  /** 公司级条目下的具体项目（渲染为嵌套子卡片） */
  children?: Experience[];
}

export interface Honor {
  prize: Localized;
  event: Localized;
}

export interface SiteContent {
  meta: {
    name: Localized;
    headline: Localized;
    tagline: Localized;
    location: Localized;
    birth: string;
  };
  nav: NavItem[];
  hero: {
    kicker: Localized;
    role: Localized;
    intro: Localized;
    chips: string[];
    downloadCta: Localized;
    copyHint: Localized;
    visualAlt: Localized;
  };
  contacts: ContactItem[];
  highlights: { heading: Localized; lead: Localized; items: Highlight[] };
  skills: {
    heading: Localized;
    lead: Localized;
    groups: SkillGroup[];
    workflow: { name: Localized; items: string[] };
    certs: { name: Localized; items: string[] };
  };
  projects: {
    heading: Localized;
    lead: Localized;
    expand: Localized;
    collapse: Localized;
    stackLabel: Localized;
    roleLabel: Localized;
    items: Project[];
  };
  education: { heading: Localized; lead: Localized; items: Education[] };
  experience: {
    heading: Localized;
    lead: Localized;
    expand: Localized;
    collapse: Localized;
    /** 父卡内「下属项目」小标题 */
    projectsLabel: Localized;
    items: Experience[];
  };
  honors: { heading: Localized; lead: Localized; items: Honor[] };
  footer: {
    contactHeading: Localized;
    resumeCta: Localized;
    note: Localized;
  };
  toast: { copied: Localized; copyFallback: Localized };
}
