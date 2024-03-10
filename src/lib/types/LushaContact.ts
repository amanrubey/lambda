type Location = {
    state: string;
    country: string;
    country_iso2: string;
    continent: string;
    raw_location: string;
    city?: string;
    stateCode?: string;
    street?: string;
    locationCoordinates?: [number, number];
};

type JobTitle = {
    seniority: string;
    title: string;
    departments: string[];
    seniorityLabels?: { id: number; value: string }[];
};

type PreviousJob = {
    company: {
        name: string;
        domain: string;
    };
    jobTitle: JobTitle;
};

type SocialLinks = {
    linkedin?: string;
    // Add other social links here if needed
};

type ContactData = {
    firstName: string;
    lastName: string;
    fullName: string;
    companyId: number;
    emails: string[];
    phones: string[];
    location: Location;
    jobTitle: JobTitle;
    socialLinks: SocialLinks;
    jobStartDate: string;
    previousJob?: PreviousJob;
};

type CompanyData = {
    name: string;
    description: string;
    domains: {
        homepage: string;
        email: string;
    };
    homepageUrl: string;
    fqdn: string;
    location: Location;
    companySize: number[];
    revenueRange: number[];
    industryPrimaryGroup: string;
    logoUrl: string;
    social: SocialLinks;
    specialities: string[];
};

type ContactMap = {
    [contactId: string]: {
        error: null | any; // You may want to refine this type
        isCreditCharged: boolean;
        data: ContactData;
    };
};

type CompanyMap = {
    [companyId: string]: CompanyData;
};

export type LushaContact = {
    contacts: ContactMap;
    companies: CompanyMap;
};

