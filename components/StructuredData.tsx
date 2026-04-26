const SITE_URL = 'https://sunnylanddaycare.com';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  '@id': `${SITE_URL}/#business`,
  name: 'Sunnyland Family Daycare',
  description:
    'Loving, licensed family daycare in San Mateo serving children 6 months to 5 years in a warm, home-like environment.',
  url: SITE_URL,
  telephone: '+1-650-302-8856',
  email: 'sunnyland6@hotmail.com',
  image: `${SITE_URL}/images/logo.png`,
  logo: `${SITE_URL}/images/logo.png`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '717 Birch Ave',
    addressLocality: 'San Mateo',
    addressRegion: 'CA',
    postalCode: '94402',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'San Mateo' },
    { '@type': 'City', name: 'Foster City' },
    { '@type': 'City', name: 'Burlingame' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '18:00',
    },
  ],
  audience: {
    '@type': 'PeopleAudience',
    suggestedMinAge: 0.5,
    suggestedMaxAge: 5,
  },
  sameAs: [
    'https://maps.app.goo.gl/wBVjFiBwnJDCVV7u7',
  ],
};

export default function StructuredData() {
  return (
    <script type="application/ld+json">
      {JSON.stringify(schema).replace(/</g, '\\u003c')}
    </script>
  );
}
