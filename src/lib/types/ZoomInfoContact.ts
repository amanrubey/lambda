type JobFunction = {
    name: string;
    department: string;
};

type Education = {
    school: string;
    educationDegree: {
        degree: string;
        areaOfStudy: string;
    };
};

type EmploymentHistory = {
    jobTitle: string;
    managementLevel: string[];
    fromDate: string;
    toDate: string;
    company: {
        companyId: number;
        companyName: string;
        companyPhone: string;
        companyWebsite: string;
    };
};

type CompanyDescription = {
    description: string;
};

type ExternalUrl = {
    type: string;
    url: string;
};

type SicCode = {
    id: string;
    name: string;
};

type NaicsCode = {
    id: string;
    name: string;
};

type Company = {
    division: string;
    id: number;
    name: string;
    descriptionList: CompanyDescription[];
    phone: string;
    fax: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    logo: string;
    sicCodes: SicCode[];
    naicsCodes: NaicsCode[];
    website: string;
    revenue: string;
    revenueNumeric: number;
    employeeCount: number;
    type: string;
    ticker: string;
    ranking: string[];
    socialMediaUrls: any[];
    primaryIndustry: string[];
    industries: string[];
    revenueRange: string;
    employeeRange: string;
};

type ResultData = {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    hasCanadianEmail: string;
    phone: string;
    directPhoneDoNotCall: boolean;
    street: string;
    city: string;
    region: string;
    metroArea: string;
    zipCode: string;
    state: string;
    country: string;
    personHasMoved: string;
    withinEu: boolean;
    withinCalifornia: boolean;
    withinCanada: boolean;
    lastUpdatedDate: string;
    noticeProvidedDate: string;
    salutation: string;
    suffix: string;
    jobTitle: string;
    jobFunction: JobFunction[];
    education: Education[];
    hashedEmails: string[];
    picture: string;
    mobilePhoneDoNotCall: boolean;
    externalUrls: ExternalUrl[];
    contactAccuracyScore: number;
    isDefunct: boolean;
    employmentHistory: EmploymentHistory[];
    managementLevel: string[];
    locationCompanyId: number;
    company: Company;
};

type Result = {
    input: {
        companyid: number;
        firstname: string;
        lastname: string;
    };
    data: ResultData[];
};

type OutputFields = string[];

type ZoomInfoContact = {
    success: boolean;
    data: {
        outputFields: OutputFields[][];
        result: Result[];
    };
};
