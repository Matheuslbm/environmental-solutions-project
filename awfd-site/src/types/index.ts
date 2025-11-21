export interface NavigationLink {
    label: string;
    href: string;
}

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    imageAlt: string;
    imageUrl: string;
}

export interface ContactPerson {
    name: string;
    role: string;
    phone: string;
    email: string;
}

export interface CompanyInfo {
    name: string;
    address: string;
    fullAddress: string;
    zip: string;
    phones: string[];
    emails: string[];
}

