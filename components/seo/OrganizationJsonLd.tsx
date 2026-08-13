const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Norland Academy",
  url: "https://norlandacademy.com",
  email: "admissions@norlandacademy.com",
  description:
    "PGP · The Principal Programme: twelve weeks, five seats, by application. Source your own acquisition target and defend it to an investment committee.",
  parentOrganization: {
    "@type": "Organization",
    name: "Stator Capital",
  },
};

export default function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
