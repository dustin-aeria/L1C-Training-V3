import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getModuleSlides, getModuleSlugs } from "@/lib/content";
import { ModuleSlideViewer } from "./ModuleSlideViewer";

interface ModulePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { slug } = await params;

  // Validate slug
  const validSlugs = getModuleSlugs();
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  try {
    const { module, slides } = await getModuleSlides(slug);

    if (!module || !slides || slides.length === 0) {
      notFound();
    }

    return (
      <div className="flex flex-col min-h-[calc(100vh-theme(spacing.16))]">
        {/* Back button - fixed position */}
        <div className="absolute top-20 left-4 z-10">
          <Button variant="ghost" size="sm" asChild className="bg-background/80 backdrop-blur">
            <Link href="/modules">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Modules
            </Link>
          </Button>
        </div>

        {/* Slideshow Viewer */}
        <ModuleSlideViewer
          slides={slides}
          moduleTitle={module.title}
          moduleNumber={module.number}
        />
      </div>
    );
  } catch (error) {
    console.error(`Error loading module ${slug}:`, error);
    notFound();
  }
}

export async function generateStaticParams() {
  const slugs = getModuleSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Force dynamic rendering since we're reading files from disk
export const dynamic = "force-dynamic";
