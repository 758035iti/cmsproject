import { navArrType } from "@/types";

export const navArr:navArrType[]= [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'Oraganization',
        url: '/organization',
        submenu: [
            { name: "Governing Council", path: "/governing_council" },
            {name: "Research & Advisory Council",  path: "/research_advisory_council" },
            { name: "Faculty", path: "/faculty" },
            { name: "Centres", path: "/centres" },
            { name: "Core Competence", path: "/core_competence" },
            { name: "Affiliation & Certification", path: "/affiliation_certification" },
          ],
    },
    {
        id: 3,
        title: 'Program_areas',
        url: '/program_areas',
        submenu: [
            { name: "NREM", path: "/nrem" },
            {name: "WASH",  path: "/wash" },
            { name: "URD", path: "/urd" },
            { name: "IKM", path: "/ikm" },
            { name: "CCES", path: "/cces" },
          ],
    },
    {
        id: 4,
        title: 'Activities',
        url: '/activities',
    },
    {
        id: 5,
        title: 'Projects',
        url: '/projects',
        submenu: [
            { name: "Ongoing", path: "/ongoing" },
            {name: "Completed",  path: "/completed" },
          ],
    },
    {
        id: 6,
        title: 'Resources',
        url: '/resources',
        submenu: [
            { name: "Core Staff", path: "/core_staff" },
            {name: "Professionals",  path: "/professionals" },
            { name: "Consultants", path: "/consultants" },
          ],
    },
    {
        id: 7,
        title: 'CED_Health',
        url: '/ced_health',
        submenu: [
            { name: "CPHRI Thiruvanatpur", path: "/cphri_thiruvanantpur" },
            {name: "CPHRI Bhubaneswar",  path: "/cphri_bhubaneswar" },
            { name: "Kerala Ayurveda, Bhubaneswar", path: "/kerala_ayurveda_bhubaneswar" },
          ],
    },
    {
        id: 8,
        title: 'Contact_Us',
        url: '/contact_us'
    },
    
]
export const experienceArr=[
    {
        id:1,
        title: "32 Years of Experience"
    }
]

  