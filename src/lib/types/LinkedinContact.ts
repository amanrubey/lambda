type Education = {
    program: string;
    end_year: string;
    institute: string;
    start_year: string;
    institute_linkedin_url: string;
};

type WorkExperience = {
    end_date: string | null;
    location: string;
    job_title: string;
    is_current: boolean;
    start_date: string;
    description: string | null;
    company_name: string;
    company_linkedin_url: string;
};

export type LinkedinContact = {
    skills: string[];
    location: string;
    job_title: string;
    languages: string[];
    last_name: string;
    educations: Education[];
    first_name: string;
    contact_key: string;
    company_name: string;
    linkedin_url: string;
    work_experience: WorkExperience[];
    linkedin_profile_id: string;
    licenses_certifications: string[];
};

