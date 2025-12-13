import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Construction } from "lucide-react";

// Project detail components
import ProjectDetail_1 from "./ProjectDetails_1";
import ProjectDetail_2 from "./ProjectDetails_2";
import ProjectDetail_3 from "./ProjectDetails_3";
import ProjectDetail_4 from "./ProjectDetails_4";
import ProjectDetail_5 from "./ProjectDetails_5";
import ProjectDetail_6 from "./ProjectDetails_6";
import ProjectDetail_7 from "./ProjectDetails_7";

// Project slug types
type ProjectSlug =
  | "montfort-icse-ai-chatbot"
  | "ds-founder-birthday-wishes"
  | "vowel-quest"
  | "ruthram360"
  | "vr-tour-gallery"
  | "gamify-menu"
  | "qr-code-generator";

// Project component mapping
const PROJECT_COMPONENTS: Partial<Record<ProjectSlug, React.FC>> = {
  "montfort-icse-ai-chatbot": ProjectDetail_1,
  "ds-founder-birthday-wishes": ProjectDetail_2,
  "vowel-quest": ProjectDetail_3,
  ruthram360: ProjectDetail_4,
  "vr-tour-gallery": ProjectDetail_5,
  "gamify-menu": ProjectDetail_6,
  "qr-code-generator": ProjectDetail_7,

  // Add more mappings as components are created
};

// Constants
const ROUTES = {
  WORK: "/work-Page",
  CONTACT: "/contact-Page",
} as const;

const ANIMATION_CONFIG = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
} as const;

// Responsive container component
const ResponsiveContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Responsive grid component
const ResponsiveGrid: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div
    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ${className}`}
  >
    {children}
  </div>
);

// Reusable Back Button Component
const BackButton: React.FC = () => (
  <Button
    variant="ghost"
    className="gap-2 mb-6 sm:mb-8 w-full sm:w-auto justify-center sm:justify-start"
    asChild
  >
    <Link to={ROUTES.WORK}>
      <ArrowLeft className="w-4 h-4 flex-shrink-0" />
      <span className="truncate">Back to Portfolio</span>
    </Link>
  </Button>
);

// Missing Slug State
const MissingSlugState: React.FC = () => (
  <div className="min-h-screen bg-background pt-16 sm:pt-20 flex items-center justify-center px-4 sm:px-6">
    <ResponsiveContainer>
      <motion.div
        {...ANIMATION_CONFIG}
        className="text-center max-w-md mx-auto w-full"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground" />
        </div>
        <h2 className="font-clash font-bold text-xl sm:text-2xl mb-2 sm:mb-3 text-foreground">
          Project Not Specified
        </h2>
        <p className="font-satoshi text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
          Please select a project from the portfolio to view its detailed case
          study.
        </p>
        <Button asChild className="gap-2 w-full sm:w-auto">
          <Link to={ROUTES.WORK}>
            <ArrowLeft className="w-4 h-4 flex-shrink-0" />
            Browse Portfolio
          </Link>
        </Button>
      </motion.div>
    </ResponsiveContainer>
  </div>
);

// Progress Indicator Component
const ProgressIndicator: React.FC<{
  items: Array<{
    label: string;
    status: "completed" | "in-progress" | "pending";
  }>;
}> = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
    {items.map((item) => (
      <div key={item.label} className="text-center">
        <div
          className={`w-3 h-3 rounded-full mx-auto mb-2 ${
            item.status === "completed"
              ? "bg-green-500"
              : item.status === "in-progress"
              ? "bg-yellow-500 animate-pulse"
              : "bg-gray-300"
          }`}
        />
        <span className="font-satoshi text-xs sm:text-sm text-muted-foreground">
          {item.label}
        </span>
      </div>
    ))}
  </div>
);

// Construction State Component
const ConstructionState: React.FC<{ slug: string }> = ({ slug }) => {
  const progressItems = [
    { label: "Research", status: "completed" as const },
    { label: "Development", status: "in-progress" as const },
    { label: "Documentation", status: "pending" as const },
  ];

  return (
    <div className="min-h-screen bg-background pt-4 sm:pt-2">
      <ResponsiveContainer className="py-4 sm:py-8">
        <BackButton />
      </ResponsiveContainer>

      <ResponsiveContainer className="py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto w-full text-center"
        >
          {/* Animated Construction Icon */}
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8"
          >
            <Construction className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-clash font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 text-foreground px-4"
          >
            Case Study in Progress
          </motion.h1>

          {/* Project Slug Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-block bg-card border border-border rounded-lg px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6 mx-2"
          >
            <code className="font-mono text-xs sm:text-sm text-primary font-medium break-all">
              {slug}
            </code>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-grotesk text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0"
          >
            The detailed case study for this project is currently being crafted.
            I'm working hard to bring you a comprehensive breakdown of the
            process, challenges, and solutions.
          </motion.p>

          {/* Progress Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="px-4 sm:px-0"
          >
            {/* <ProgressIndicator items={progressItems} /> */}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          >
            <Button size="lg" className="gap-2 w-full sm:w-auto" asChild>
              <Link to={ROUTES.WORK}>
                <ArrowLeft className="w-4 h-4 flex-shrink-0" />
                Explore Other Projects
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              asChild
            >
              <Link to={ROUTES.CONTACT}>Get in Touch</Link>
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 sm:mt-12 p-4 sm:p-6 bg-card/50 rounded-xl border border-border mx-4 sm:mx-0"
          >
            <p className="font-satoshi text-xs sm:text-sm text-muted-foreground">
              In the meantime, feel free to check out my other completed case
              studies or reach out if you'd like to discuss this specific
              project.
            </p>
          </motion.div>
        </motion.div>
      </ResponsiveContainer>
    </div>
  );
};

// Main Component
const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Case 1: Missing slug
  if (!slug) {
    return <MissingSlugState />;
  }

  // Case 2: Try to load matching component
  const ProjectComponent = PROJECT_COMPONENTS[slug as ProjectSlug];

  // Case 3: Invalid slug - show construction state
  if (!ProjectComponent) {
    return <ConstructionState slug={slug} />;
  }

  // Case 4: Valid slug - render project component
  return (
    <div className="min-h-screen bg-background">
      <ProjectComponent />
    </div>
  );
};

export default ProjectDetails;
