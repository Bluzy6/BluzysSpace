// 首页：单页长滚动个人主页（中/英双语），内容全部来自 src/content/site.ts
import { createFileRoute } from "@tanstack/react-router";
import { LangProvider } from "@/hooks/use-lang";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Highlights } from "@/components/highlights";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { ExperienceSection, EducationSection, HonorsSection } from "@/components/timeline";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "sonner";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-background text-foreground">
        <SiteNav />
        <main>
          <Hero />
          <Highlights />
          <ExperienceSection />
          <Projects />
          <EducationSection />
          <Skills />
          <HonorsSection />
        </main>
        <SiteFooter />
      </div>
      <Toaster position="top-center" richColors closeButton={false} />
    </LangProvider>
  );
}
