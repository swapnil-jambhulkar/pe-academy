const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Norland Academy",
  url: "https://norlandacademy.com",
  email: "admissions@norlandacademy.com",
  description:
    "Graduate Certificate in Private Equity (GCPE), 48-week PGP, and the Day One Analyst Simulator. Live deal execution from the Norland Capital pipeline.",
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
