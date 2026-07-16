export const site = {
  name: 'phpixel',
  tagline: 'From idea to pixel and code',
  description:
    'Κατασκευή e-shop με WooCommerce ή custom, ιστοσελίδες, SEO και email marketing. Δουλεύουμε με επιχειρήσεις σε όλη την Ελλάδα — μιλάς με αυτόν που γράφει τον κώδικα.',
  url: 'https://phpixel.gr',
  lang: 'el',
  contact: {
    phone: '6977383488',
    phoneDisplay: '697 738 3488',
    email: 'info@phpixel.gr',
    address: 'Ελλάδα — δουλεύουμε πανελλαδικά',
  },
  // Συγγραφέας των blog posts — εμφανίζεται στο author block και στο Article schema.
  // TODO: εκκρεμεί το πραγματικό όνομα από τον ιδιοκτήτη· μόλις οριστεί,
  // άλλαξε το name εδώ και το type σε 'Person'.
  blogAuthor: {
    type: 'Organization',
    name: 'phpixel',
    oneLiner: 'Σχεδιάζουμε και φτιάχνουμε e-shop και ιστοσελίδες που πουλάνε.',
  },
  socials: {
    facebook: 'https://facebook.com/phpixel',
    instagram: 'https://instagram.com/phpixel',
    linkedin: 'https://linkedin.com/company/phpixel',
  },
} as const;
