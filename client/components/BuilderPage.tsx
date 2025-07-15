import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { useEffect, useState } from "react";
import { GoldenAtmosphere } from "./GoldenAtmosphere";

// Import all SaintSal Builder components
import "./builder/SaintSalHero";

interface BuilderPageProps {
  model?: string;
  page?: any;
  path?: string;
}

export function BuilderPage({
  model = "page",
  page,
  path = "/",
}: BuilderPageProps) {
  const [content, setContent] = useState(page);
  const isPreviewing = useIsPreviewing();

  useEffect(() => {
    if (!page) {
      // Fetch content from Builder.io
      builder
        .get(model, {
          userAttributes: {
            urlPath: path,
          },
          prerender: false,
        })
        .toPromise()
        .then((content) => {
          setContent(content);
        })
        .catch((error) => {
          console.error("Error fetching Builder.io content:", error);
        });
    }
  }, [model, page, path]);

  // Show loading state
  if (!content && !isPreviewing) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading page content...</p>
        </div>
      </div>
    );
  }

  // Show fallback if no content found
  if (!content && !isPreviewing) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            This page hasn't been created in Builder.io yet.
          </p>
          <a
            href="https://builder.io/content"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Create Page in Builder.io
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background golden-dust-settle">
      {/* Golden Atmosphere */}
      <GoldenAtmosphere intensity="subtle" />

      {/* Builder.io Content */}
      <BuilderComponent
        model={model}
        content={content}
        options={{
          includeRefs: true,
        }}
      />
    </div>
  );
}

export default BuilderPage;
