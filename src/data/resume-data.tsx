import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Elias Tamer",
  initials: "BJ",
  location: "Beirut, Lebanon",
  locationLink: "https://maps.app.goo.gl/97XzAPZqYyT8dJ2E6",
  about:
    "Software Engineer focused on building products with extra attention to detail.",
  summary:
    "With over 5 years in the tech industry, I specialize in React, Next.js, TypeScript, and Node.js. Passionate about crafting efficient solutions and delivering top-notch user experiences. ",
  avatarUrl: "https://avatars.githubusercontent.com/u/93489117?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "eliastamer3@gmail.com",
    tel: "+96176189334",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/EliasTamer",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/elias-tamer/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/EliasTamerr",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Conservatoire National des Arts et Métiers - Paris",
      degree: "Bachelor's Degree in Computer Science",
      start: "2019",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Born Interactive",
      link: "https://www.borninteractive.com/",
      badges: [],
      title: "Front-end Developer",
      logo: ParabolLogo,
      start: "2019",
      end: "2023",
      description:
        "Created engaging and responsive user interfaces, utilizing the power of React for component-based architecture, TypeScript for static typing, and Next.js for seamless, optimized web applications. Technologies: React, TypeScript, Next.js",
    },
    {
      company: "Ethan",
      link: "https://ethan.global/",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: ClevertechLogo,
      start: "2023",
      end: "currently",
      description:
        "Designed, developed and maintained software systems, employing a combination of programming languages, algorithms, and problem-solving skills to create efficient and reliable solutions for diverse applications. Technologies: React, TypeScript, .NET.",
    },
  ],
  skills: ["React/Next.js", "Node.js", "TypeScript", "JavaScript", "jQuery", "Python", "Docker"],
  projects: [
    {
      title: "Comin",
      techStack: ["TypeScript", "Next.js", "Node.js"],
      description:"Comin's web app to purchase your insurance plans online.",
      link: {
        label: "Comin",
        href: "https://www.comin.insure/lb/en-us",
      },
    },
    {
      title: "IQOS",
      techStack: ["HTML", "SCSS", "JavaScript", "jQuery"],
      description:
        "E-commerce website that lets you browse and purchase IQOS' products and accessories.",
      link: {
        label: "IQOS",
        href: "https://lb.iqos.com/en",
      },
    },
    {
      title: "Born Interactive",
      techStack: ["TypeScript", "Next.js", "Node.js"],
      description:
        "Integrated Communication Agency specialized in web, mobile and social media.",
      link: {
        label: "Born Interactive",
        href: "https://www.borninteractive.com/",
      },
    },
    {
      title: "Al Riyad Group",
      techStack: ["JavaScript/jQuery", "SCSS", "HTML"],
      description: "Al Riyad Group's diverse lighting and power solutions.",
      link: {
        label: "Al Riyad Group",
        href: "https://www.alriyad.iq/english/home",
      },
    },
    {
      title: "Evently",
      techStack: ["Side Project", "TypeScript", "Next.js", "Node.js"],
      description: "Event planning app.",
      link: {
        label: "evently",
        href: "https://evently-six-lilac.vercel.app/",
      },
    },
    {
      title: "Imaginify",
      techStack: ["Side Project", "TypeScript", "Next.js", "Node.js"],
      description: "AI image SaaS platform.",
      link: {
        label: "evently",
        href: "imaginify-peach-eight.vercel.app",
      },
    },
    {
      title: "Bank Audi Group",
      techStack: ["JavaScript/jQuery", "SCSS", "HTML"],
      description: "Bank Audi's group financials site.",
      link: {
        label: "Bank Audi Group",
        href: "https://www.bankaudigroup.com/group/home",
      },
    },
    {
      title: "Threads Clone",
      techStack: ["Side Project", "TypeScript", "Next.js", "Node.js"],
      description: "Threads social app clone.",
      link: {
        label: "threads",
        href: "https://threads-app-hazel-three.vercel.app/",
      },
    },
    {
      title: "Netflix Clone",
      techStack: ["Side Project", "TypeScript", "Next.js", "Node.js"],
      description: "Netflix clone.",
      link: {
        label: "threads",
        href: "https://threads-app-hazel-three.vercel.app/",
      },
    },
    {
      title: "Promtopia",
      techStack: ["Side Project", "Next.js", "Node.js"],
      description:
        "Open-source AI prompting tool to create and share creative prompts.",
      link: {
        label: "promtopia",
        href: "https://promtopia-zeta.vercel.app/",
      },
    },
    {
      title: "Global Food Solutions",
      techStack: ["React.js"],
      description:
        "Portal for GFS's clients to manage and browse their orders.",
      link: {
        label: "GFS",
        href: "",
      },
    },
  ],
} as const;
