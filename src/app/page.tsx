import fs from "fs";
import appollo_contacts from "../lib/providers_json/contact_apollo.json";
import cognism_contacts from "../lib/providers_json/contact_cognism.json";
import linkedin_contacts from "../lib/providers_json/contact_linkedin.json";
import lusha_contacts from "../lib/providers_json/contact_lusha.json";
import zoomInfo_contacts from "../lib/providers_json/contact_zoominfo.json";
import {
  Contact,
  mapApolloContact,
  mapCognismContact,
  mapLinkedinContact,
  mapLushaContact,
  mapZoomInfoContact,
} from "@/lib/mapping";

export default function Home() {
  const appollo_contacts_sanitized = mapApolloContact(
    JSON.parse(JSON.stringify(appollo_contacts))
  );
  const cognism_contacts_sanitized = mapCognismContact(
    JSON.parse(JSON.stringify(cognism_contacts))
  );
  const linkedin_contacts_sanitized = mapLinkedinContact(
    JSON.parse(JSON.stringify(linkedin_contacts))
  );
  const lusha_contacts_sanitized = mapLushaContact(
    JSON.parse(JSON.stringify(lusha_contacts))
  );
  const zoomInfo_contacts_sanitized = mapZoomInfoContact(
    JSON.parse(JSON.stringify(zoomInfo_contacts))
  );

  const finalContact: Contact = {
    firstName: chooseValue([
      appollo_contacts_sanitized.firstName,
      cognism_contacts_sanitized.firstName,
      linkedin_contacts_sanitized.firstName,
      lusha_contacts_sanitized.firstName,
      zoomInfo_contacts_sanitized.firstName,
    ]) as string,
    lastName: chooseValue([
      appollo_contacts_sanitized.lastName,
      cognism_contacts_sanitized.lastName,
      linkedin_contacts_sanitized.lastName,
      lusha_contacts_sanitized.lastName,
      zoomInfo_contacts_sanitized.lastName,
    ]),
    email: chooseValue([
      appollo_contacts_sanitized.email,
      cognism_contacts_sanitized.email,
      linkedin_contacts_sanitized.email,
      lusha_contacts_sanitized.email,
      zoomInfo_contacts_sanitized.email,
    ]),
    phone: chooseValue([
      appollo_contacts_sanitized.phone,
      cognism_contacts_sanitized.phone,
      linkedin_contacts_sanitized.phone,
      lusha_contacts_sanitized.phone,
      zoomInfo_contacts_sanitized.phone,
    ]),
    directPhoneDoNotCall: chooseValue([
      appollo_contacts_sanitized.directPhoneDoNotCall,
      cognism_contacts_sanitized.directPhoneDoNotCall,
      linkedin_contacts_sanitized.directPhoneDoNotCall,
      lusha_contacts_sanitized.directPhoneDoNotCall,
      zoomInfo_contacts_sanitized.directPhoneDoNotCall,
    ]),
    street: chooseValue([
      appollo_contacts_sanitized.street,
      cognism_contacts_sanitized.street,
      linkedin_contacts_sanitized.street,
      lusha_contacts_sanitized.street,
      zoomInfo_contacts_sanitized.street,
    ]),
    city: chooseValue([
      appollo_contacts_sanitized.city,
      cognism_contacts_sanitized.city,
      linkedin_contacts_sanitized.city,
      lusha_contacts_sanitized.city,
      zoomInfo_contacts_sanitized.city,
    ]),
    personHasMoved: chooseValue([
      appollo_contacts_sanitized.personHasMoved,
      cognism_contacts_sanitized.personHasMoved,
      linkedin_contacts_sanitized.personHasMoved,
      lusha_contacts_sanitized.personHasMoved,
      zoomInfo_contacts_sanitized.personHasMoved,
    ]),
    jobTitle: chooseValue([
      appollo_contacts_sanitized.jobTitle,
      cognism_contacts_sanitized.jobTitle,
      linkedin_contacts_sanitized.jobTitle,
      lusha_contacts_sanitized.jobTitle,
      zoomInfo_contacts_sanitized.jobTitle,
    ]),
    jobFunction: chooseValue([
      appollo_contacts_sanitized.jobFunction,
      cognism_contacts_sanitized.jobFunction,
      linkedin_contacts_sanitized.jobFunction,
      lusha_contacts_sanitized.jobFunction,
      zoomInfo_contacts_sanitized.jobFunction,
    ]),
  };

  function chooseValue<T>(values: (T | undefined)[]): T | undefined {
    //  Choosing the first non-undefined value
    for (const value of values) {
      if (value !== undefined) {
        return value;
      }
    }
    return undefined;
  }
  // Convert JSON object to JSON string
  const jsonString = JSON.stringify(finalContact, null, 2);

  // Write JSON string to a file
  fs.writeFileSync("output.json", jsonString);
  return <>{JSON.stringify(finalContact)}</>;
}
