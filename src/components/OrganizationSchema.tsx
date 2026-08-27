export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://rehanconsultants.com/#organization",
    name: "Rehan Consultants",
    url: "https://rehanconsultants.com",
    logo: "https://rehanconsultants.com/mainlogo.png",

    description:
      "Rehan Consultants is a civil engineering and architecture consultancy based in Quetta, Balochistan, Pakistan, providing civil and structural engineering, architecture, infrastructure, quantity surveying, cost consultancy and project management services.",

    email: "therehanconsultants@gmail.com",
    telephone: "+92 317 8921361",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Jinnah Town",
      addressLocality: "Quetta",
      addressRegion: "Balochistan",
      addressCountry: "PK",
    },

    areaServed: [
      {
        "@type": "City",
        name: "Quetta",
      },
      {
        "@type": "AdministrativeArea",
        name: "Balochistan",
      },
      {
        "@type": "Country",
        name: "Pakistan",
      },
    ],

    serviceType: [
      "Civil Engineering",
      "Structural Engineering",
      "Architecture",
      "Infrastructure Engineering",
      "Quantity Surveying",
      "Cost Consultancy",
      "Project Management",
      "Construction Consultancy",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
