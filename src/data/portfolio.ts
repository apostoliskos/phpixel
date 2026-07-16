// =====================================================================
// PORTFOLIO DATA
// ---------------------------------------------------------------------
// Single source of truth για όλα τα projects που εμφανίζονται:
//   • στη σελίδα /portfolio (κάρτες grid)
//   • στις δυναμικές σελίδες /portfolio/[slug] (πλήρες case study)
//
// Πώς να προσθέσεις νέο project:
//   1. Πρόσθεσε ένα entry στο array `projects` παρακάτω.
//   2. Πέταξε τα screenshots στο /public/assets/images/portfolio/
//   3. Done — τόσο η λίστα όσο και η σελίδα detail δημιουργούνται αυτόματα.
//
// Σημείωση: metrics και quotes αφαιρέθηκαν — ήταν placeholder τιμές, όχι
// πραγματικά μετρημένα αποτελέσματα. Όταν υπάρξουν αληθινά νούμερα
// (με πηγή: analytics / Search Console), προστίθενται ξανά στα entries.
// =====================================================================

export type ProjectCategory =
  | 'E-shop'
  | 'Website'
  | 'Web App'
  | 'Landing Page';

export interface ProjectMetric {
  /** Π.χ. "92" ή "+180%" */
  value: string;
  /** Π.χ. "PageSpeed Score (mobile)" */
  label: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  /** URL slug — π.χ. "angela-yfantidou" */
  slug: string;
  /** Σύντομο anchor id στη σελίδα /portfolio — π.χ. "mian" (για deep links) */
  anchor: string;
  /** Brand / project name */
  name: string;
  /** Σύντομη μονόγραμμη περιγραφή (κάρτα + meta) */
  tagline: string;
  /** Παράγραφος για το overview block */
  description: string;
  /** Industry / sector */
  industry: string;
  /** Κατηγορία project */
  category: ProjectCategory;
  /** Έτος υλοποίησης */
  year: number;
  /** Live URL (full, με https://) */
  url?: string;
  /** Tags (tech / υπηρεσίες) — εμφανίζονται ως chips */
  tags: string[];
  /** Υπηρεσίες που υλοποιήθηκαν (bullet list στο case study) */
  services: string[];
  /** Tech stack */
  stack: string[];
  /** Κύρια εικόνα — εμφανίζεται στη κάρτα grid */
  thumb: string;
  /** Νέο screenshot από designer (webp) — αν λείπει, γίνεται fallback στο thumb */
  image?: string;
  /** Alt για τη νέα εικόνα */
  imageAlt?: string;
  /** Hero image στη σελίδα detail */
  hero: string;
  /** Gallery screenshots */
  gallery: ProjectScreenshot[];
  /** Μετρικές / αποτελέσματα */
  metrics: ProjectMetric[];
  /** Project highlights — bullet points για quick read */
  highlights: string[];
  /** Optional testimonial */
  quote?: {
    text: string;
    author: string;
    role?: string;
  };
  /** Color accent για το hero του project (CSS var ή hex) */
  accent: string;
}

export const projects: Project[] = [
  // -----------------------------------------------------------------
  // 1. ANGELA YFANTIDOU
  // -----------------------------------------------------------------
  {
    slug: 'angela-yfantidou',
    anchor: 'angelayfantidou',
    name: 'Angela Yfantidou',
    tagline: 'Premium portfolio site για επαγγελματία τελετουργό γάμου.',
    description:
      'Σχεδιάσαμε και υλοποιήσαμε ένα μοντέρνο, premium portfolio site για την Angela Yfantidou, επαγγελματία τελετουργό γάμου. Στόχος ήταν μια αισθητική που να αντικατοπτρίζει την κομψότητα και τη σοβαρότητα του brand, με τεχνική απόδοση που να βάζει το site στις κορυφαίες θέσεις των αναζητήσεων.',
    industry: 'Wedding & Events',
    category: 'Website',
    year: 2025,
    url: 'https://angelayfantidou.com',
    tags: ['Website', 'SEO', 'Premium Design', 'Performance'],
    services: [
      'Σχεδιασμός & ανάπτυξη ιστοσελίδας από το μηδέν',
      'SEO optimization & technical SEO',
      'Extreme caching strategy & CDN setup',
      'Premium visual identity & UI design',
      'Mobile-first responsive layout',
      'Schema markup & local SEO',
    ],
    stack: ['WordPress', 'Custom Theme', 'Cloudflare', 'Elementor Pro'],
    thumb: '/assets/images/portfolio/angelayfantidou-thumb.jpg',
    image: '/images/portfolio/angelayfantidou.webp',
    imageAlt: 'Η ιστοσελίδα της Angela Yfantidou',
    hero: '/assets/images/portfolio/angelayfantidou-home.jpg',
    gallery: [
      {
        src: '/assets/images/portfolio/angelayfantidou-home.jpg',
        alt: 'Homepage της Angela Yfantidou',
        caption: 'Premium homepage με cinematic hero και κομψή τυπογραφία.',
      },
      {
        src: '/assets/images/portfolio/angelayfantidou-contact.jpg',
        alt: 'Φόρμα επικοινωνίας',
        caption: 'Custom "Let\'s Chat" φόρμα με validation και anti-spam.',
      },
    ],
    metrics: [],
    highlights: [
      'Premium, art-direction look που αντικατοπτρίζει το brand',
      'Extreme caching για ταχύτατη φόρτωση',
      'On-page SEO optimization για όλες τις key services',
      'Custom contact form με spam protection',
    ],
    accent: '#b78c87',
  },

  // -----------------------------------------------------------------
  // 2. APORELLI ARTWORKS
  // -----------------------------------------------------------------
  {
    slug: 'aporelli-artworks',
    anchor: 'aporelli',
    name: 'Aporelli Artworks',
    tagline:
      'E-shop χειροποίητων ορθόδοξων εικόνων με premium αισθητική και πλήρη ενσωμάτωση πληρωμών.',
    description:
      'Δημιουργήσαμε ένα ολοκληρωμένο e-shop για τη Aporelli Artworks, εξειδικευμένη στην κατασκευή χειροποίητων ορθόδοξων εικόνων. Δουλέψαμε πάνω στην αρχιτεκτονική του καταλόγου, στη ροή αγοράς και στη φωτογράφιση των προϊόντων ώστε κάθε εικόνα να παρουσιάζεται με τη βαρύτητα και τη σοβαρότητα που της αξίζει.',
    industry: 'Religious Art & Handmade',
    category: 'E-shop',
    year: 2024,
    url: 'https://aporelliartworks.com',
    tags: ['E-shop', 'WooCommerce', 'UX/UI', 'Email Marketing'],
    services: [
      'Δημιουργία e-shop από το μηδέν',
      'Custom product page με zoom & gallery',
      'Πληρωμές: κάρτες, PayPal, αντικαταβολή',
      'Email marketing flows (welcome / abandoned cart)',
      'Google Shopping feed & Merchant Center setup',
      'Page speed optimization',
    ],
    stack: ['WordPress', 'WooCommerce', 'Stripe', 'Mailchimp'],
    thumb: '/assets/images/portfolio/aporelliartworks-thumb.jpg',
    image: '/images/portfolio/aporelli.webp',
    imageAlt: 'Το e-shop της Aporelli Artworks',
    hero: '/assets/images/portfolio/aporelliartworks-home.jpg',
    gallery: [
      {
        src: '/assets/images/portfolio/aporelliartworks-home.jpg',
        alt: 'Homepage Aporelli Artworks',
        caption: 'Premium homepage με focus στη φωτογραφία προϊόντος.',
      },
      {
        src: '/assets/images/portfolio/aporelliartworks-product.jpg',
        alt: 'Product page εικόνας Αγίου Γεωργίου',
        caption:
          'Λεπτομερής product page με variants (διαστάσεις, στιλβωτό φύλλο χρυσού).',
      },
    ],
    metrics: [],
    highlights: [
      'Cinematic product photography pipeline',
      'Πολλαπλά payment gateways χωρίς ταλαιπωρία checkout',
      'Email automation που επαναφέρει εγκαταλειμμένα καλάθια',
      'SEO-ready URLs & schema για κάθε προϊόν',
    ],
    accent: '#8a6a3b',
  },

  // -----------------------------------------------------------------
  // 3. ΑΛΑΖΩ (Alazo) — Διαιτολόγος & Βελονιστής
  // -----------------------------------------------------------------
  {
    slug: 'alazo',
    anchor: 'alazo',
    name: 'Αλάζω',
    tagline:
      'Επαγγελματικό site για διαιτολόγο & βελονιστή με σύστημα online ραντεβού.',
    description:
      'Στο "Αλάζω" σχεδιάσαμε και αναπτύξαμε έναν ολοκληρωμένο ψηφιακό κόμβο για διαιτολόγο και βελονιστή. Στόχος ήταν να ενημερώνει με σαφήνεια για τις υπηρεσίες, να εμπνέει εμπιστοσύνη και να μετατρέπει επισκέπτες σε ραντεβού μέσα από ένα γρήγορο και απλό online booking flow.',
    industry: 'Health & Wellness',
    category: 'Website',
    year: 2025,
    url: 'https://alazo.gr',
    tags: ['Website', 'Online Booking', 'SEO', 'UX/UI'],
    services: [
      'Σχεδιασμός & ανάπτυξη ιστοσελίδας',
      'Custom online booking system (multi-step)',
      'SEO & local SEO (Google Business Profile)',
      'Content writing για κάθε υπηρεσία',
      'GDPR-compliant φόρμες & cookies',
      'Performance optimization',
    ],
    stack: ['WordPress', 'Custom Booking Module', 'Cloudflare', 'PHP'],
    thumb: '/assets/images/portfolio/alazo-thumb.jpg',
    image: '/images/portfolio/alazo.webp',
    imageAlt: 'Η ιστοσελίδα του Αλάζω',
    hero: '/assets/images/portfolio/alazo-home.jpg',
    gallery: [
      {
        src: '/assets/images/portfolio/alazo-home.jpg',
        alt: 'Homepage Αλάζω',
        caption: 'Καθαρή, φιλική homepage με ξεκάθαρα CTAs.',
      },
      {
        src: '/assets/images/portfolio/alazo-services.jpg',
        alt: 'Σελίδα υπηρεσιών',
        caption: 'Παρουσίαση υπηρεσιών με photo-led layout.',
      },
      {
        src: '/assets/images/portfolio/alazo-booking.jpg',
        alt: 'Online σύστημα ραντεβού',
        caption: 'Multi-step booking flow με date/time picker.',
      },
    ],
    metrics: [],
    highlights: [
      'Online ραντεβού όποια ώρα βολεύει τον ασθενή, λιγότερα χαμένα τηλεφωνήματα',
      'Local SEO που φέρνει ασθενείς από Καρδίτσα & γύρω περιοχή',
      'GDPR-compliant: cookies, φόρμες, ιατρικά δεδομένα',
      'Responsive design για ασθενείς που μπαίνουν από κινητό',
    ],
    accent: '#e8593c',
  },

  // -----------------------------------------------------------------
  // 4. MIAN NATURAL COSMETICS
  // -----------------------------------------------------------------
  {
    slug: 'mian-natural-cosmetics',
    anchor: 'mian',
    name: 'Mian Natural Cosmetics',
    tagline:
      'Ολοκληρωμένο e-shop φυσικών καλλυντικών με πλήρες σύστημα filtering & email marketing.',
    description:
      'Η Mian Natural Cosmetics χρειαζόταν ένα e-shop που να αναδεικνύει τη natural / sustainable ταυτότητά της και ταυτόχρονα να διαχειρίζεται έναν μεγάλο κατάλογο προϊόντων. Στήσαμε ολόκληρη την υποδομή: από τη δομή του καταλόγου και τα multi-attribute φίλτρα μέχρι τα αυτόματα email flows που φέρνουν τους πελάτες πίσω.',
    industry: 'Beauty & Cosmetics',
    category: 'E-shop',
    year: 2024,
    url: 'https://miannaturalcosmetics.gr',
    tags: ['E-shop', 'WooCommerce', 'Email Marketing', 'SEO'],
    services: [
      'Δημιουργία e-shop & migration προϊόντων',
      'Multi-attribute φίλτρα (κατηγορία, brand, ingredient, τιμή)',
      'Email marketing automation flows',
      'Page speed & checkout optimization',
      'Google Shopping & Meta catalog sync',
      'SEO για κάθε κατηγορία προϊόντος',
    ],
    stack: ['WordPress', 'WooCommerce', 'Klaviyo', 'Algolia Search'],
    thumb: '/assets/images/portfolio/mian-thumb.jpg',
    image: '/images/portfolio/mian.webp',
    imageAlt: 'Το e-shop της Mian Natural Cosmetics',
    hero: '/assets/images/portfolio/mian-home.jpg',
    gallery: [
      {
        src: '/assets/images/portfolio/mian-home.jpg',
        alt: 'Homepage Mian Natural Cosmetics',
        caption: 'Editorial homepage με focus στο φυσικό / sustainable brand.',
      },
      {
        src: '/assets/images/portfolio/mian-shop.jpg',
        alt: 'Κατάλογος προϊόντων με φίλτρα',
        caption: 'Σελίδα καταλόγου με πλούσια φίλτρα και instant search.',
      },
      {
        src: '/assets/images/portfolio/mian-product.jpg',
        alt: 'Σελίδα προϊόντος',
        caption: 'Λεπτομερής σελίδα προϊόντος με ingredients & cross-sells.',
      },
    ],
    metrics: [],
    highlights: [
      'Πλήρες multi-attribute filtering για γρήγορη αναζήτηση',
      'Email flows: welcome, abandoned cart, win-back',
      'Bundles & cross-sells για αύξηση AOV',
      'Optimized checkout (1-page) με Apple/Google Pay',
    ],
    accent: '#a8b48a',
  },

  // -----------------------------------------------------------------
  // 5. VITHOPOULOS OUTDOOR
  // -----------------------------------------------------------------
  {
    slug: 'vithopoulos-outdoor',
    anchor: 'vithopoulos',
    name: 'Vithopoulos Outdoor',
    tagline:
      'E-shop εξοπλισμού πεζοπορίας & ορειβασίας με δυνατό category UX και Google Ads.',
    description:
      'Η Vithopoulos Outdoor είναι ένα κατάστημα εξοπλισμού πεζοπορίας, ορειβασίας και camping με μεγάλη γκάμα προϊόντων. Στήσαμε ένα e-shop που οργανώνει τον τεράστιο κατάλογο σε καθαρές κατηγορίες, με photo-led navigation και full integration σε Google Ads / Shopping ώστε κάθε επένδυση σε διαφήμιση να επιστρέφει μετρήσιμα.',
    industry: 'Outdoor & Sports Retail',
    category: 'E-shop',
    year: 2024,
    url: 'https://vithopoulosoutdoor.gr',
    tags: ['E-shop', 'Google Ads', 'WooCommerce', 'SEO'],
    services: [
      'Δημιουργία e-shop με μεγάλο κατάλογο προϊόντων',
      'Photo-led category navigation',
      'Google Ads & Shopping campaigns',
      'Page speed optimization',
      'SEO & rich snippets',
      'Σύνδεση με αποθήκη / ERP',
    ],
    stack: ['WordPress', 'WooCommerce', 'Google Ads', 'Custom ERP Sync'],
    thumb: '/assets/images/portfolio/vithopoulos-thumb.jpg',
    image: '/images/portfolio/vithopoulos.webp',
    imageAlt: 'Το e-shop της Vithopoulos Outdoor',
    hero: '/assets/images/portfolio/vithopoulos-home.jpg',
    gallery: [
      {
        src: '/assets/images/portfolio/vithopoulos-home.jpg',
        alt: 'Homepage Vithopoulos Outdoor',
        caption: 'Photo-led homepage με σαφή κατηγοριοποίηση.',
      },
      {
        src: '/assets/images/portfolio/vithopoulos-category.jpg',
        alt: 'Trekking & Hiking landing',
        caption: 'Custom landing page για trekking & hiking equipment.',
      },
      {
        src: '/assets/images/portfolio/vithopoulos-shop.jpg',
        alt: 'Σελίδα καταλόγου σακιδίων',
        caption: 'Σελίδα καταλόγου με πλούσια φίλτρα.',
      },
      {
        src: '/assets/images/portfolio/vithopoulos-product.jpg',
        alt: 'Σελίδα προϊόντος Ande 40L',
        caption: 'Product page με variations, αξιολογήσεις και cross-sells.',
      },
    ],
    metrics: [],
    highlights: [
      'Photo-led κατηγορίες που μειώνουν το decision fatigue',
      'Google Shopping feed με auto-sync τιμών & stock',
      'Σύνδεση με ERP, μηδέν υπερπώληση',
      'Σελίδες προϊόντων σχεδιασμένες για conversions',
    ],
    accent: '#2f6b4a',
  },
];

/** Helper για getStaticPaths */
export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
