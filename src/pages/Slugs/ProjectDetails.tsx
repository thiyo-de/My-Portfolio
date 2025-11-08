import React from "react";
import { useParams, Link } from "react-router-dom";

// ✅ Import all project detail components here
import ProjectDetail_1 from "./ProjectDetails_1";
import ProjectDetail_2 from "./ProjectDetails_2";
// You can add more as you create them
// import ProjectDetail_3 from "./ProjectDetails_3";
// import ProjectDetail_4 from "./ProjectDetails_4";

// ✅ Define all slugs exactly as in your Portfolio data
type ProjectSlug =
  | "Modern-E-Commerce-Platform"
  | "Creative-Portfolio-Platform"
  | "taskflow-management-system"
  | "fintech-mobile-banking"
  | "social-analytics-dashboard"
  | "health-fitness-tracker";

// ✅ Map each slug to its detail component
// For now, unknown ones can temporarily reuse a placeholder
const projectMap: Partial<Record<ProjectSlug, React.FC>> = {
  "Modern-E-Commerce-Platform": ProjectDetail_1,
  "Creative-Portfolio-Platform": ProjectDetail_2,
  // Add these later as you build them:
  // "taskflow-management-system": ProjectDetail_3,
  // "fintech-mobile-banking": ProjectDetail_4,
  // "social-analytics-dashboard": ProjectDetail_5,
  // "health-fitness-tracker": ProjectDetail_6,
};

const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // 🟢 Case 1: Missing slug in URL
  if (!slug) {
    return (
      <div className="p-10 text-center text-gray-500">
        No project specified.
      </div>
    );
  }

  // 🟢 Try to load matching component
  const ProjectComponent = projectMap[slug as ProjectSlug];

  // 🟠 Case 2: Invalid slug → show fallback
  if (!ProjectComponent) {
    return (
      <div className="p-10 text-center text-muted-foreground">
        <h2 className="text-2xl font-semibold mb-2">Project Not Found</h2>
        <p className="mb-6">
          The case study for{" "}
          <span className="font-mono text-primary">{slug}</span> doesn’t exist or
          hasn’t been added yet.
        </p>
        <Link
          to="/work-Page"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300"
        >
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  // 🟢 Case 3: Valid slug → render correct project
  return <ProjectComponent />;
};

export default ProjectDetails;
