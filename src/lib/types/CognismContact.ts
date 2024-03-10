export type CognismContact = {
    total: number;
    result: Result[];
}

type Result = {
    id: string;
    fullName: string;
    firstName: string;
    lastName: string;
    email: {
        address: string;
        quality: string;
    };
    linkedinURL: string;
    jobTitle: string;
    managementLevel: string;
    seniority: string;
    jobFunctions: string[];
    positionStartDate: string;
    skills: string[];
    yearOfBirth: number;
    country: string;
    city: string;
    education: {
        field: string;
        school: string;
        start: string;
        degree?: string;
        end: string;
    }[];
    mobilePhoneNumbers: {
        number: string;
        score: number;
        dnc: boolean;
        label: string;
    }[];
    account: {
        id: string;
        name: string;
        domain: string;
        industries: string[];
        description: string;
        shortDescription: string;
        founded: number;
        website: string;
        linkedinURL: string;
        revenue: number;
        naics: string[];
        sic: string[];
        sizeFrom: number;
        sizeTo: number;
        tech: string[];
        type: string;
        officePhoneNumbers: {
            number: string;
            score: number;
            dnc: boolean;
            label: string;
        }[];
        hqPhoneNumbers: {
            number: string;
            score: number;
            dnc: boolean;
            label: string;
        }[];
        locations: {
            type: string;
            country: string;
            state?: string;
            city: string;
            street?: string;
            zip?: string;
        }[];
        companyHiring: {
            employer: string;
            jobTitle: string;
            department: string;
            jobDate: string;
            country: string;
            url: string;
            internship: boolean;
            workFromHome: boolean;
        }[];
    };
    previousAccounts: {
        name: string;
        jobTitle: string;
        role: string;
        start: string;
        end: string;
        location: {
            country: string;
            city: string;
        };
    }[];
};
