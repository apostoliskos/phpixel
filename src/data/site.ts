export const site = {
  name: 'phpixel',
  tagline: 'From idea to pixel and code',
  description:
    'Κατασκευή e-shop με WooCommerce ή custom, ιστοσελίδες, SEO και email marketing. Δουλεύουμε με επιχειρήσεις σε όλη την Ελλάδα. Μιλάς με αυτόν που γράφει τον κώδικα.',
  url: 'https://phpixel.gr',
  lang: 'el',
  contact: {
    phone: '6977383488',
    phoneDisplay: '697 738 3488',
    email: 'info@phpixel.gr',
  },
  // Συγγραφέας των blog posts — εμφανίζεται στο author block και στο Article schema.
  blogAuthor: {
    type: 'Person',
    name: 'Αποστόλης Κωστόπουλος',
    oneLiner: 'Σχεδιάζω και φτιάχνω e-shop και ιστοσελίδες που πουλάνε.',
  },
  socials: {
    facebook: 'https://facebook.com/phpixel',
    instagram: 'https://instagram.com/phpixel',
    linkedin: 'https://linkedin.com/company/phpixel',
  },
} as const;
