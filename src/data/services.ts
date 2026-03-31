export interface Service {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  href: string;
  accent: string;
}

export const services: Service[] = [
  {
    id: 'eshop',
    icon: 'ic:baseline-shopping-cart',
    title: 'E-shop Creation',
    subtitle: 'High-Conversion E-Commerce',
    description:
      'Δημιουργούμε ηλεκτρονικά καταστήματα που μετατρέπουν επισκέπτες σε πελάτες. Shopify, WooCommerce ή custom — πάντα με focus στις πωλήσεις.',
    features: [
      'Πωλήσεις 24/7 με ασφαλείς πληρωμές',
      'Σύνδεση με ERP & Logistics',
      'Mobile-first σχεδιασμός',
      'Analytics & conversion tracking',
    ],
    href: '/services#eshop',
    accent: 'var(--accent-emerald)',
  },
  {
    id: 'website',
    icon: 'ic:baseline-language',
    title: 'Website Building',
    subtitle: 'Ultra-Fast, SEO-Driven Sites',
    description:
      'Ιστοσελίδες με σύγχρονη τεχνολογία (Astro, Next.js) που φορτώνουν αστραπιαία και κατακτούν τις μηχανές αναζήτησης.',
    features: [
      'Βέλτιστη απόδοση & Core Web Vitals',
      'SEO-φιλικός σχεδιασμός',
      'Responsive σε κάθε συσκευή',
      'CMS integration για εύκολη διαχείριση',
    ],
    href: '/services#website',
    accent: 'var(--accent-blue)',
  },
  {
    id: 'apps',
    icon: 'ic:baseline-code',
    title: 'Custom Web Apps',
    subtitle: 'Scalable SaaS & Business Tools',
    description:
      'Αναπτύσσουμε εξατομικευμένες εφαρμογές και SaaS platforms που αυτοματοποιούν τις επιχειρηματικές σας διαδικασίες.',
    features: [
      'Tailor-made λύσεις',
      'Scalable cloud architecture',
      'API integrations',
      'Real-time dashboards & reporting',
    ],
    href: '/services#apps',
    accent: 'var(--accent-violet)',
  },
  {
    id: 'hosting',
    icon: 'ic:baseline-cloud',
    title: 'Hosting & Maintenance',
    subtitle: 'Managed Cloud & 24/7 Support',
    description:
      'Managed hosting, ασφάλεια, backups και συνεχή υποστήριξη. Εσείς εστιάζετε στην επιχείρησή σας, εμείς φροντίζουμε την τεχνολογία.',
    features: [
      'Managed cloud hosting',
      'SSL & security monitoring',
      'Αυτόματα backups',
      '24/7 τεχνική υποστήριξη',
    ],
    href: '/services#hosting',
    accent: 'var(--accent-amber)',
  },
];
