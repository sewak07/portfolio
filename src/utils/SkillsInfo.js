import {
  FaCode,
  FaServer,
  FaTools
} from "react-icons/fa";

const categories = [
  {
    title: "Frontend Development",
    subtitle: "Building intuitive user interfaces",
    description:
      "I build responsive, accessible, and user-friendly web interfaces with a focus on clean layouts, reusable components, and consistent user experiences across devices.",
    icon: FaCode,
    technologies: [
      {
        name: "HTML5",
        level: "Core",
        description:
          "Structure web pages with semantic HTML, accessible elements, forms, and meaningful document layouts.",
      },
      {
        name: "CSS3",
        level: "Core",
        description:
          "Style interfaces with responsive layouts, Flexbox, Grid, transitions, animations, and maintainable CSS.",
      },
      {
        name: "JavaScript",
        level: "Core",
        description:
          "Build interactive features using modern JavaScript, ES modules, array methods, asynchronous operations, and DOM fundamentals.",
      },
      {
        name: "React",
        level: "Core",
        description:
          "Create component-based interfaces using props, state, hooks, reusable components, and conditional rendering.",
      },
      {
        name: "Tailwind CSS",
        level: "UI Styling",
        description:
          "Develop responsive designs efficiently using utility classes, consistent spacing, design tokens, and reusable styling patterns.",
      },
      {
        name: "Material UI",
        level: "UI Library",
        description:
          "Build polished interfaces with ready-made React components, theming, layouts, and accessible UI patterns.",
      },
      {
        name: "React Router",
        level: "Routing",
        description:
          "Create multi-page React experiences with route configuration, navigation, dynamic routes, and nested layouts.",
      },
      {
        name: "React Hook Form",
        level: "Forms",
        description:
          "Manage form state and validation efficiently while keeping form components maintainable and performant.",
      },
      {
        name: "Vite",
        level: "Build Tool",
        description:
          "Set up and run modern frontend projects with a fast development server, efficient builds, and environment configuration.",
      },
    ],
  },
  {
    title: "Backend Development",
    subtitle: "Building application logic and APIs",
    description:
      "I develop server-side functionality, REST APIs, database integrations, and authentication flows to connect frontend applications with reliable backend services.",
    icon: FaServer,
    technologies: [
      {
        name: "Node.js",
        level: "Runtime",
        description:
          "Run JavaScript on the server and implement asynchronous application logic, API services, and backend integrations.",
      },
      {
        name: "Express.js",
        level: "Framework",
        description:
          "Build REST APIs with routes, middleware, controllers, error handling, and organized server-side architecture.",
      },
      {
        name: "MongoDB",
        level: "Database",
        description:
          "Store and retrieve application data using document-based collections, queries, filters, and appropriate data structures.",
      },
      {
        name: "Mongoose",
        level: "ODM",
        description:
          "Define schemas and models, validate data, manage relationships, and interact with MongoDB through a structured application layer.",
      },
      {
        name: "REST APIs",
        level: "API Design",
        description:
          "Design HTTP endpoints with appropriate methods, status codes, request validation, and consistent response structures.",
      },
      {
        name: "JWT",
        level: "Authentication",
        description:
          "Implement token-based authentication flows and understand token verification, expiry, and protected routes.",
      },
      {
        name: "Bcrypt",
        level: "Security",
        description:
          "Hash passwords securely and verify submitted credentials without storing passwords in plain text.",
      },
      {
        name: "MySQL",
        level: "SQL Database",
        description:
          "Work with relational data, tables, SQL queries, filtering, joins, and structured database relationships.",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    subtitle: "Developing, testing, and shipping projects",
    description:
      "I use development tools and platforms to write code, manage source control, test APIs, prepare visual assets, and deploy projects for real-world use.",
    icon: FaTools,
    technologies: [
      {
        name: "Git",
        level: "Version Control",
        description:
          "Track code changes, create branches, manage commits, and maintain a clear development history.",
      },
      {
        name: "GitHub",
        level: "Collaboration",
        description:
          "Host repositories, manage project versions, collaborate through pull requests, and maintain project documentation.",
      },
      {
        name: "VS Code",
        level: "Editor",
        description:
          "Write and debug code using extensions, integrated terminals, source control tools, and a customized development environment.",
      },
      {
        name: "Postman",
        level: "API Testing",
        description:
          "Send HTTP requests, inspect API responses, test endpoints, and troubleshoot backend integrations.",
      },
      {
        name: "Vercel",
        level: "Deployment",
        description:
          "Deploy frontend projects, configure environment variables, and manage production builds and deployment previews.",
      },
      {
        name: "Canva",
        level: "Design",
        description:
          "Prepare visual assets, presentation materials, and simple graphics for projects and digital content.",
      },
      {
        name: "Antigravity",
        level: "AI Development",
        description:
          "Use AI-assisted development workflows to explore solutions, implement features, and support debugging and code review.",
      },
    ],
  },
];

export default categories;