import React, { Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction, AlertCircle, Loader2 } from "lucide-react";

// Lazy load all project components to isolate failures
const ProjectDetail_MontfortICSE = React.lazy(() => import("./ProjectDetails_MontfortICSE"));
const ProjectDetail_DSFounderWishes = React.lazy(() => import("./ProjectDetails_DSFounderWishes"));
const ProjectDetail_VowelQuest = React.lazy(() => import("./ProjectDetails_VowelQuest"));
const ProjectDetail_Ruthram360 = React.lazy(() => import("./ProjectDetails_Ruthram360"));
const ProjectDetail_VRTourGallery = React.lazy(() => import("./ProjectDetails_VRTourGallery"));
const ProjectDetail_GamifyMenu = React.lazy(() => import("./ProjectDetails_GamifyMenu"));
const ProjectDetail_QRCodeGenerator = React.lazy(() => import("./ProjectDetails_QRCodeGenerator"));
const ProjectDetail_RemoteAccessApp = React.lazy(() => import("./ProjectDetails_RemoteAccessApp"));
const ProjectDetail_MontfortAdmin = React.lazy(() => import("./ProjectDetails_MontfortAdmin"));
const ProjectDetails_DroneMerge = React.lazy(() => import("./ProjectDetails_DroneMerge"));

type ProjectSlug =
  | "montfort-icse-ai-chatbot"
  | "ds-founder-birthday-wishes"
  | "vowel-quest"
  | "ruthram360"
  | "vr-tour-gallery"
  | "gamify-menu"
  | "qr-code-generator"
  | "remote-access-app"
  | "montfort-school-ai-chatbot-system"
  | "drone-footage-merge-tool";

const PROJECT_COMPONENTS: Partial<Record<ProjectSlug, React.LazyExoticComponent<React.FC>>> = {
  "montfort-icse-ai-chatbot": ProjectDetail_MontfortICSE,
  "ds-founder-birthday-wishes": ProjectDetail_DSFounderWishes,
  "vowel-quest": ProjectDetail_VowelQuest,
  "ruthram360": ProjectDetail_Ruthram360,
  "vr-tour-gallery": ProjectDetail_VRTourGallery,
  "gamify-menu": ProjectDetail_GamifyMenu,
  "qr-code-generator": ProjectDetail_QRCodeGenerator,
  "remote-access-app": ProjectDetail_RemoteAccessApp,
  "montfort-school-ai-chatbot-system": ProjectDetail_MontfortAdmin,
  "drone-footage-merge-tool": ProjectDetails_DroneMerge,
};

const LoadingState = () => (
  <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
    <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
    <h2 className="font-clash font-bold text-xl text-foreground">Loading Project...</h2>
  </div>
);

const MissingSlugState = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)]" />
      </div>

      <div className="relative z-10 max-w-md w-full bg-card/30 backdrop-blur-md p-8 rounded-3xl border border-border/50 shadow-2xl">
        <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-500/20">
          <AlertCircle className="w-8 h-8 text-red-500" />
        </div>
        <h1 className="font-clash font-bold text-3xl mb-3">Project Not Found</h1>
        <p className="text-muted-foreground font-satoshi mb-8">
          The project configuration you are looking for doesn't seem to exist or might have been moved.
        </p>
        <Button size="lg" className="w-full" onClick={() => navigate("/work-Page")}>
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Portfolio
        </Button>
      </div>
    </div>
  );
};

const ConstructionState = ({ slug }: { slug: string }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)]" />
      </div>

      <div className="relative z-10 max-w-md w-full bg-card/30 backdrop-blur-md p-8 rounded-3xl border border-border/50 shadow-2xl">
        <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-yellow-500/20">
          <Construction className="w-8 h-8 text-yellow-500 animate-pulse" />
        </div>
        <h1 className="font-clash font-bold text-3xl mb-3">Work in Progress</h1>
        <p className="text-muted-foreground font-satoshi mb-2">
          We're currently documenting <span className="text-foreground font-bold">{slug}</span>.
        </p>
        <p className="text-xs text-muted-foreground/60 mb-8 uppercase tracking-widest">Check back soon</p>

        <Button size="lg" className="w-full" onClick={() => navigate("/work-Page")}>
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Portfolio
        </Button>
      </div>
    </div>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Safety check for slug
  if (!slug) {
    return <MissingSlugState />;
  }

  const ProjectComponent = PROJECT_COMPONENTS[slug as ProjectSlug];

  if (!ProjectComponent) {
    return <ConstructionState slug={slug} />;
  }

  return (
    <React.Fragment>
      <Suspense fallback={<LoadingState />}>
        <ProjectComponent />
      </Suspense>
    </React.Fragment>
  );
};

export default ProjectDetail;
