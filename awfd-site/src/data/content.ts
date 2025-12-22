import type { CompanyInfo, ContactPerson, NavigationLink, ServiceItem } from '../types';

export const NAVIGATION: NavigationLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solucoes' },
    { label: 'About', href: '/sobre' },
    { label: 'Contact', href: '/contato' },
];

export const COMPANY: CompanyInfo = {
    name: "AWFD",
    address: "Rua Guararapes, 548 - Brooklin Paulista",
    zip: "04.561-000 - São Paulo - SP",
    fullAddress: "Rua Guararapes, 548 - Brooklin Paulista, 04.561-000 - São Paulo - SP",
    phones: ["(11) 98578-2437", "(19) 9 9287-2817"],
    emails: ["joao.mariz@awfd.com.br", "rafael@awfd.com.br"]
};

export const TEAM: ContactPerson[] = [
    {
        name: "Antonio Carlos",
        role: "",
        phone: "55 21 998631960",
        email: ""
    },
    {
        name: "Rosimar Ramos",
        role: "",
        phone: "+55 21 995085765",
        email: "rosimar.ramos@gmail.com"
    },
        {
        name: "Dr Mark Adjetey",
        role: "",
        phone: "+1 240 855 1984",
        email: "markadjetey3@gmail.com"
    }
];

export const SERVICES: ServiceItem[] = [
    {
        id: 'domestico',
        title: 'Domestic Wastewater Treatment',
        description: 'Applicable to domestic sewage treatment, AWFD® aeration is highly effective. Depending on technical parameters such as retention time, the treated effluent can become clear and odorless, meeting all regulatory standards.',
        imageAlt: 'Domestic wastewater treatment tank',
        imageUrl: '/images/solutions-image-1.png'
    },
    {
        id: 'chorume',
        title: 'Landfill Leachate Treatment',
        description: 'Leachate is a major challenge for any sanitary landfill. Instead of spending a fortune transporting leachate to chemical-heavy treatment plants, AWFD® provides in-situ treatment, enabling water reuse or discharge into water bodies.',
        imageAlt: 'Landfill leachate treatment',
        imageUrl: '/images/solutions-image-2.png'
    },
    {
        id: 'industrial',
        title: 'Industrial Effluent Treatment',
        description: 'Industrial effluents can contain a wide variety of substances, ranging from oils and greases to soaps and fats. The AWFD® Solution, combined with the power of ECO3®, has demonstrated exceptional results in case studies where it has been implemented.',
        imageAlt: 'Complex industrial installation',
        imageUrl: '/images/solutions-image-3.png'
    },
    {
        id: 'agua',
        title: 'Water Treatment',
        description: 'Water abstraction from wells or surface sources requires treatment to remove impurities and mineral components. The AWFD® system is ideal for water treatment without the need for chemical additives.',
        imageAlt: 'Piping discharging treated water',
        imageUrl: '/images/solutions-image-4.png'
    },
    {
        id: 'nebulizacao',
        title: 'Nebulization (Volume Reduction)',
        description: 'Nebulization can be utilized in effluent treatment systems and delivers significant results in reducing the volume of effluent to be treated, thereby lowering final disposal costs.',
        imageAlt: 'Nebulization treatment tank',
        imageUrl: '/images/solutions-image-5.png'
    },
    {
        id: 'aeracao',
        title: 'Aeration',
        description: 'The aeration performed by the AWFD® injects micro-nano bubbles into the effluent, providing significantly more effective aeration as the air bubbles remain active for much longer. With aeration alone, it is possible to achieve removal rates of up to 85% for parameters such as BOD (Biochemical Oxygen Demand) and COD (Chemical Oxygen Demand).',
        imageAlt: 'Detail of the aeration process',
        imageUrl: '/images/solutions-image-6.png'
    }
];

export const ABOUT_CONTENT = {
    title: "The Creator of the Technology",
    text: "Creator of the AWFD® (Air Waterfall Device) technology and ECO3® cells, João Mariz is a specialist in managing economic and environmental investment projects, as well as resource efficiency. With over 30 years of experience, Mariz has implemented more than 85 industrial and domestic wastewater, leachate, and water treatment plants worldwide, including 35 in Brazil. He also holds a degree in Business Administration and a postgraduate degree in Environmental Management focusing on biotechnology",
    imageUrl: "/images/about-image-1.png",
    imageAlt: "João Mariz presenting the AWFD technology panel"
};

export const HOME_CONTENT = {
    hero: {
        title: "THE SOLUTION FOR YOUR EFFLUENT TREATMENT",
        subtitle: "WHETHER DOMESTIC, INDUSTRIAL, LEACHATE, OR SPECIALIZED WASTE."
    },
    technologies: [
        {
            id: 'awfd',
            title: 'AWFD',
            text: [
                "The AWFD® (Air Waterfall Device) is equipment created and patented by our founder, João Mariz.",
                "Utilizing the Venturi Effect, the AWFD® provides aeration that is distinct from common aerators on the market. By injecting micro-nano bubbles into the effluent, it ensures an aeration density and quality unmatched by any other solution.",
                "Implemented across multiple sites in Portugal and Brazil, this solution demonstrates that the aeration provided by the AWFD® promotes organic load removal rates of up to 85%."
            ]
        },
        {
            id: 'ozone',
            title: 'OZONE - ECO3',
            text: [
                "ECO3® cells transform atmospheric oxygen into ozone.",
                "Ozone is approximately 30 times more oxidizing and 50 times faster than oxygen in oxidizing organic particles, delivering superior results in the treatment of any effluent.",
                "The ozone produced by the ECO3® cells is injected into the AWFD® aerators, accelerating the treatment process and reducing energy consumption."
            ]
        }
    ],
    galleryImages: [
        { id: 1, src: '/images/services-image-1.png', alt: 'Treatment service 1' },
        { id: 2, src: '/images/services-image-2.png', alt: 'Treatment service 2' },
        { id: 3, src: '/images/services-image-3.png', alt: 'Treatment service 3' },
        { id: 4, src: '/images/services-image-4.png', alt: 'Treatment service 4' },
        { id: 5, src: '/images/services-image-5.png', alt: 'Treatment service 5' },
        { id: 6, src: '/images/services-image-6.png', alt: 'Treatment service 6' },
    ]
};

export const CONTACT_PAGE = {
    title: "WE CAN HELP YOU FIND THE BEST SOLUTION FOR YOUR NEEDS",
    subtitle: "Speak to one of our experts and discover how AWFD® technology can optimize your effluent treatment processes.",
    descriptionTitle: "CONTACT US",
    descriptionText: "Using compact designs, we deliver high-impact solutions with a small footprint, suitable for a wide range of effluents across diverse scenarios."
};