
import { AppolloContact } from "./types/AppolloContact";
import { CognismContact } from "./types/CognismContact";
import { LinkedinContact } from "./types/LinkedinContact";
import { LushaContact } from "./types/LushaContact";

export type Contact = {
  firstName: string;
  lastName?: string;
  email?: string;
  phone?: string;
  directPhoneDoNotCall?: boolean;
  street?: string;
  city?: string;
  personHasMoved?: string;
  jobTitle?: string;
  jobFunction?: { name: string; department: string }[];
};

export function mapApolloContact(data: AppolloContact): Contact {
  const person = data.matches[0];
  const jobFunction = [
    {
      name: person.subdepartments[0],
      department: person.departments[0],
    },
  ];
  const contact: Contact = {
    firstName: person.first_name,
    lastName: person.last_name,
    email: person.email,
    phone: person.phone_numbers[0].raw_number,
    street: person.organization.street_address,
    city: person.city,
    jobTitle: person.title,
    jobFunction
  };
  return contact;
}

export function mapCognismContact(data: CognismContact): Contact {
  const person = data.result[0];
  const jobFunction = [
    {
      name: person.jobFunctions[0],
      department: person.jobFunctions[1],
    },
  ];
  const contact: Contact = {
    firstName: person.firstName,
    lastName: person.lastName,
    email: person.email.address,
    phone: person.mobilePhoneNumbers[0].number,
    street: person.account.locations[0].street,
    city: person.city,
    jobTitle: person.jobTitle,
    jobFunction,
  };

  return contact;
}

export function mapLinkedinContact(person: LinkedinContact): Contact {
  const jobFunction = [
    {
       name: person.work_experience[0].job_title, 
       department: ""
    }
  ];
  const contact: Contact = {
    firstName: person.first_name,
    lastName: person.last_name,
    city: person.location,
    jobTitle: person.job_title,
    jobFunction,
  };

  return contact;
}

export function mapLushaContact(data: LushaContact): Contact {
  const ContactMap = data.contacts;
  const CompanyMap = data.companies;
  let person_id = "";
  let company_id = "";
  for (let key in ContactMap)
  {
    person_id = key;
    break;
  }
  for (let key in CompanyMap)
  {
    company_id = key;
    break;
  }
  let person = data.contacts[person_id].data;
  let company = data.companies[company_id];
  const jobFunction = [
    {
      name: person.jobTitle.title,
      department: person.jobTitle.departments[0],
    },
  ];
  const contact: Contact = {
    firstName: person.firstName,
    lastName: person.lastName,
    email: person.emails[0],
    phone: person.phones[0],
    street: company.location.street,
    city: person.location.raw_location.split(',')[0].trim(),
    jobTitle: person.jobTitle.title,
    jobFunction,
  };

  return contact;
}

export function mapZoomInfoContact(data: ZoomInfoContact): Contact {
  const person = data.data.result[0].data[0];
  
  const contact: Contact = {
    firstName: person.firstName,
    lastName: person.lastName,
    email: person.email,
    phone: person.phone,
    street: person.street,
    city: person.city,
    jobTitle: person.jobTitle,
    jobFunction: person.jobFunction
  };
  
  return contact;
}