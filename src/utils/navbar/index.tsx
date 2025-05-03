import { navArrType } from "@/types";

export const navArr: navArrType[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Organization",
    url: "/organization",
    submenu: [
      { name: "Governing Council", path: "/governing_council" },
      {
        name: "Research & Advisory Council",
        path: "/research_advisory_council",
      },
      { name: "Faculty", path: "/faculty" },
      {
        name: "Centres",
        path: "/centres",
        superSubmenu: [
          // ✅ Now correct
          {
            name: "CED EASTERN REGION CENTRE, BHUBANESWAR",
            path: "/eastern_region_bhubaneswar",
          },
          {
            name: "CED REGIONAL CENTRE HYDERABAD",
            path: "/regional_centre_hyderabad",
          },
          {
            name: "REGIONAL RESOURCE CENTRE BALIKUDA JAGATSINGHPUR",
            path: "/resource_centre_balikuda",
          },
        ],
      },
      { name: "Core Competence", path: "/core_competence" },
      {
        name: "Affiliation & Certification",
        path: "/affiliation_certification",
      },
    ],
  },
  {
    id: 3,
    title: "Program areas",
    url: "/program_areas",
    submenu: [
      { name: "NREM", path: "/nrem" },
      { name: "WASH", path: "/wash" },
      { name: "URD", path: "/urd" },
      { name: "IKM", path: "/ikm" },
      { name: "CCES", path: "/cces" },
    ],
  },
  {
    id: 4,
    title: "Activities",
    url: "/activities",
    submenu: [
      {
        name: "Research & Development",
        path: "/rd",
      },
      {
        name: "Consultancy Services",
        path: "/cs",
      },
      {
        name: "Capacity Building & Training",
        path: "/cbt",
        superSubmenu: [
          {
            name: "TRAINING",
            path: "/training",
          },
          {
            name: "EXPOSURE VISIT",
            path: "/exposure_visit",
          },
          {
            name: "SKILL DEVELOPMENT",
            path: "/skill_development",
          },
          {
            name: "SHORT-TERM COURSES",
            path: "/short_term_courses",
            superSuperSubmenu: [
              // 👈 Super-super submenu added here
              {
                name: "GIS",
                path: "/short_term_courses/gis",
              },
              {
                name: "SOLID WASTE MANAGEMENT",
                path: "/short_term_courses/solid_waste_management",
              },
              {
                name: "WASTE WATER MANAGEMENT",
                path: "/short_term_courses/waste_water_management",
              },
              {
                name: "GENDER BASED VIOLENCE",
                path: "/short_term_courses/gender_based_violence",
              },
              {
                name: "DIGITAL & FINANCIAL LITERACY",
                path: "/short_term_courses/digital_financial_literacy",
              },
            ],
          },
        ],
      },
      {
        name: "Outreach Program",
        path: "/op",
      },
    ],
  },
  {
    id: 5,
    title: "Projects",
    url: "/projects",
    submenu: [
      { name: "Ongoing", path: "/ongoing" },
      { name: "Completed", path: "/completed" },
    ],
  },
  {
    id: 6,
    title: "Resources",
    url: "/resources",
    submenu: [
      { name: "Core Staff", path: "/core_staff" },
      { name: "Professionals", path: "/professionals" },
      { name: "Consultants", path: "/consultants" },
    ],
  },
  {
    id: 7,
    title: "CED_Health",
    url: "/ced_health",
    submenu: [
      { name: "CPHRI Thiruvanatpur", path: "/cphri_thiruvanantpur" },
      { name: "CPHRI Bhubaneswar", path: "/cphri_bhubaneswar" },
      {
        name: "Kerala Ayurveda, Bhubaneswar",
        path: "/kerala_ayurveda_bhubaneswar",
      },
    ],
  },
  {
    id: 8,
    title: "Contact_Us",
    url: "/contact_us",
  },
];
export const experienceArr = [
  {
    id: 1,
    title: "32 Years of Experience",
  },
];
