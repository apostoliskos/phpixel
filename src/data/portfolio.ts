// =====================================================================
// PORTFOLIO DATA
// ---------------------------------------------------------------------
// Single source of truth για όλα τα projects που εμφανίζονται:
//   • στη σελίδα /portfolio (κάρτες grid)
//   • στις δυναμικές σελίδες /portfolio/[slug] (πλήρες case study)
//   • στο section "Δουλειές" της αρχικής
//
// Πηγή περιεχομένου: phpixel-case-study-questionnaire.xlsx (απαντήσεις
// του ιδιοκτήτη ανά project). Κανόνας: ΜΟΝΟ γεγονότα από το questionnaire.
// Χωρίς νούμερα/μετρικές μέχρι να υπάρξουν πραγματικά μετρημένα
// (analytics / Search Console) και έγκριση δημοσίευσης (Q6.8).
// Testimonial μπαίνει μόνο με ρητή άδεια δημοσίευσης (Q7.2).
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

export interface CaseSection {
  /** H2 του section */
  title: string;
  /** Παράγραφοι. Επιτρέπεται inline HTML μόνο για εσωτερικά links. */
  html: string[];
}

export interface CaseStudy {
  /** Outcome-first H1 της σελίδας case study */
  heroTitle: string;
  /** Υπότιτλος κάτω από το H1 (πρώτη «παράγραφος» της σελίδας) */
  heroSub: string;
  /** <title> της σελίδας */
  metaTitle: string;
  /** Meta description (μέχρι 155 χαρακτήρες) */
  metaDescription: string;
  /** Section «Ο πελάτης» */
  client?: CaseSection;
  /** Section «Η πρόκληση» */
  challenge?: CaseSection;
  /** Section «Ο στόχος» */
  goal?: CaseSection;
  /** Section «Η προσέγγιση» */
  approach?: CaseSection;
  /** Τι περιλάμβανε η δουλειά (μόνο επιβεβαιωμένα από Q4.1) */
  deliverables?: string[];
  /** Τελικό CTA προς τη σχετική σελίδα υπηρεσίας (Q9.2) + επικοινωνία */
  cta: {
    heading: string;
    text: string;
    serviceHref: string;
    serviceLabel: string;
  };
}

export interface Project {
  /** URL slug — π.χ. "angela-yfantidou" */
  slug: string;
  /** Σύντομο anchor id στη σελίδα /portfolio — π.χ. "mian" (για deep links) */
  anchor: string;
  /** Brand / project name */
  name: string;
  /** Σύντομη μονόγραμμη περιγραφή με το αποτέλεσμα (κάρτα + meta) */
  tagline: string;
  /** Παράγραφος για το section της αρχικής + schema description */
  description: string;
  /** Industry / sector */
  industry: string;
  /** Κατηγορία project (τροφοδοτεί και το φίλτρο του /portfolio) */
  category: ProjectCategory;
  /** Έτος launch (Q1.6) */
  year: number;
  /** Live URL (full, με https://) */
  url?: string;
  /** Tags (tech / υπηρεσίες) — εμφανίζονται ως chips */
  tags: string[];
  /** Tech stack (μόνο επιβεβαιωμένα, Q5.1) */
  stack: string[];
  /** Τι τρέχει σήμερα (Q1.8) — εμφανίζεται στο snapshot bar */
  ongoing?: string;
  /** Κύρια εικόνα — εμφανίζεται στη κάρτα grid */
  thumb: string;
  /** Νέο screenshot από designer (webp) — αν λείπει, γίνεται fallback στο thumb */
  image?: string;
  /** Alt για τη νέα εικόνα */
  imageAlt?: string;
  /** Hero image στη σελίδα detail */
  hero: string;
  /** Alt του hero image */
  heroAlt: string;
  /** Gallery screenshots */
  gallery: ProjectScreenshot[];
  /** Μετρικές / αποτελέσματα — μπαίνουν ΜΟΝΟ πραγματικά νούμερα με άδεια (Q6.8) */
  metrics: ProjectMetric[];
  /** Optional testimonial — μπαίνει ΜΟΝΟ με άδεια δημοσίευσης (Q7.2) */
  quote?: {
    text: string;
    author: string;
    role?: string;
  };
  /** Color accent για το hero του project (CSS var ή hex) */
  accent: string;
  /** Το πλήρες case study */
  caseStudy: CaseStudy;
}

export const projects: Project[] = [
  // -----------------------------------------------------------------
  // 1. ANGELA YFANTIDOU
  // -----------------------------------------------------------------
  {
    slug: 'angela-yfantidou',
    anchor: 'angelayfantidou',
    name: 'Angela Yfantidou',
    tagline:
      'Από τα social και τα γεμάτα DMs σε δικό της δίγλωσσο site με ξεκάθαρα πακέτα.',
    description:
      'Η Angela Yfantidou είχε μόνο social media και επικοινωνία μέσα από DMs. Φτιάξαμε δίγλωσσο site σε WordPress με premium UI, technical SEO και local SEO, και συνεχίζουμε με SEO και περιεχόμενο για Ελλάδα και Ιταλία.',
    industry: 'Γάμοι & εκδηλώσεις',
    category: 'Website',
    year: 2026,
    url: 'https://angelayfantidou.com',
    tags: ['Website', 'SEO', 'Δίγλωσσο GR/EN'],
    stack: ['WordPress'],
    ongoing: 'SEO και δημιουργία περιεχομένου για Ελλάδα και Ιταλία',
    thumb: '/assets/images/portfolio/angelayfantidou-thumb.jpg',
    image: '/images/portfolio/angelayfantidou.webp',
    imageAlt: 'Η ιστοσελίδα της Angela Yfantidou',
    hero: '/assets/images/portfolio/angelayfantidou-home.jpg',
    heroAlt: 'Η αρχική σελίδα της ιστοσελίδας angelayfantidou.com',
    gallery: [
      {
        src: '/assets/images/portfolio/angelayfantidou-home.jpg',
        alt: 'Η αρχική σελίδα της ιστοσελίδας angelayfantidou.com',
        caption: 'Το homepage: premium UI, mobile-first, με τη δουλειά της μπροστά.',
      },
      {
        src: '/assets/images/portfolio/angelayfantidou-contact.jpg',
        alt: 'Η σελίδα επικοινωνίας της ιστοσελίδας angelayfantidou.com',
        caption:
          'Η σελίδα επικοινωνίας: οι επαφές έρχονται πια μέσα από το site, όχι από τα DMs.',
      },
    ],
    metrics: [],
    accent: '#b78c87',
    caseStudy: {
      heroTitle:
        'Πώς η Angela Yfantidou πέρασε από τα γεμάτα DMs σε δικό της δίγλωσσο site',
      heroSub:
        'Κατασκευή ιστοσελίδας για επαγγελματία του γάμου: δίγλωσσο portfolio, ξεκάθαρα πακέτα και επικοινωνία χωρίς το χάος των DMs.',
      metaTitle:
        'Angela Yfantidou: Δίγλωσσο site αντί για χαμένα DMs | Case Study | phpixel',
      metaDescription:
        'Κατασκευή ιστοσελίδας για την Angela Yfantidou: δίγλωσσο site (GR/EN) που δείχνει τη δουλειά της και φέρνει τις επαφές μέσα από το site, όχι από τα DMs.',
      client: {
        title: 'Η Angela Yfantidou',
        html: [
          'Η Angela Yfantidou δουλεύει στον χώρο του γάμου και των εκδηλώσεων. Μας βρήκε όπως σχεδόν όλοι οι πελάτες μας: από σύσταση.',
        ],
      },
      challenge: {
        title: 'Όλη η δουλειά περνούσε από τα social',
        html: [
          'Μέχρι τότε η παρουσία της ήταν μόνο στα social media. Η δουλειά της ζούσε σκόρπια σε posts και η επικοινωνία με υποψήφιους πελάτες γινόταν αποκλειστικά στα DMs, ανάμεσα σε spam και άσχετα μηνύματα.',
          'Το κόστος ήταν χρόνος: χανόταν πολύς σε αναζήτηση πελατών, μέσα από ένα κανάλι που δεν φτιάχτηκε γι αυτή τη δουλειά.',
        ],
      },
      goal: {
        title: 'Ξεκάθαρα πακέτα, ήσυχα DMs',
        html: [
          'Ένα σημείο που δείχνει καθαρά τα πακέτα και τη δουλειά της, και επικοινωνία που περνάει μέσα από το site αντί για τα DMs.',
        ],
      },
      approach: {
        title: 'Τι φτιάξαμε',
        html: [
          'Σχεδιάσαμε και στήσαμε το site από το μηδέν σε WordPress: <a href="/kataskevi-istoselidon">κατασκευή ιστοσελίδας</a> με premium UI, mobile-first στήσιμο και δίγλωσσο περιεχόμενο σε ελληνικά και αγγλικά.',
          'Από κάτω τρέχει η τεχνική βάση που δεν φαίνεται αλλά μετράει: technical SEO, schema markup, local SEO, caching και CDN.',
          'Η συνεργασία δεν σταμάτησε στο launch: συνεχίζουμε με SEO και δημιουργία περιεχομένου, με στόχευση σε Ελλάδα και Ιταλία.',
        ],
      },
      deliverables: [
        'Σχεδιασμός και ανάπτυξη από το μηδέν',
        'SEO και technical SEO',
        'Caching και CDN setup',
        'Premium UI, mobile-first',
        'Schema markup και local SEO',
        'Δίγλωσσο περιεχόμενο (GR/EN)',
      ],
      cta: {
        heading: 'Θες κι εσύ ένα site που δουλεύει για σένα;',
        text: 'Πες μας τι κάνεις και πού θες να φτάσεις. Θα σου πούμε τίμια τι χρειάζεται, χωρίς δέσμευση.',
        serviceHref: '/kataskevi-istoselidon',
        serviceLabel: 'Κατασκευή Ιστοσελίδων',
      },
    },
  },

  // -----------------------------------------------------------------
  // 2. APORELLI ARTWORKS
  // -----------------------------------------------------------------
  {
    slug: 'aporelli-artworks',
    anchor: 'aporelli',
    name: 'Aporelli Artworks',
    tagline:
      'Ανάληψη ενός αργού, ασυντήρητου e-shop: ταχύτητα, σωστό checkout και σταθερή συντήρηση.',
    description:
      'Το e-shop της Aporelli Artworks ήταν αργό και ασυντήρητο, με καλάθι και checkout που δεν δούλευαν σωστά. Το αναλάβαμε, το κάναμε γρήγορο και λειτουργικό, και το κρατάμε έτσι με μηνιαία συντήρηση, SEO και Google Ads.',
    industry: 'Χειροποίητη θρησκευτική τέχνη',
    category: 'E-shop',
    year: 2026,
    url: 'https://aporelliartworks.com',
    tags: ['E-shop', 'WooCommerce', 'Συντήρηση', 'Google Ads'],
    stack: ['WordPress', 'WooCommerce'],
    ongoing: 'Μηνιαία συντήρηση, SEO, Google Ads',
    thumb: '/assets/images/portfolio/aporelliartworks-thumb.jpg',
    image: '/images/portfolio/aporelli.webp',
    imageAlt: 'Το e-shop της Aporelli Artworks',
    hero: '/assets/images/portfolio/aporelliartworks-home.jpg',
    heroAlt: 'Η αρχική σελίδα του e-shop aporelliartworks.com',
    gallery: [
      {
        src: '/assets/images/portfolio/aporelliartworks-home.jpg',
        alt: 'Η αρχική σελίδα του e-shop aporelliartworks.com',
        caption: 'Το homepage του e-shop μετά την ανάληψη και τη βελτιστοποίηση.',
      },
      {
        src: '/assets/images/portfolio/aporelliartworks-product.jpg',
        alt: 'Σελίδα προϊόντος με χειροποίητη εικόνα Αγίου Γεωργίου',
        caption:
          'Η σελίδα προϊόντος: από εδώ ξεκινά το καλάθι και το checkout που φτιάξαμε να δουλεύουν σωστά.',
      },
    ],
    metrics: [],
    accent: '#8a6a3b',
    caseStudy: {
      heroTitle:
        'Πώς το e-shop της Aporelli Artworks ξαναβρήκε ταχύτητα και σωστό checkout',
      heroSub:
        'Δεν χρειαζόταν καινούργιο site. Χρειαζόταν κάποιον να αναλάβει το e-shop χειροποίητων προϊόντων που υπήρχε ήδη και να το κάνει να δουλεύει.',
      metaTitle:
        'Aporelli Artworks: Ανάληψη και βελτιστοποίηση e-shop | Case Study | phpixel',
      metaDescription:
        'Βελτιστοποίηση e-shop χειροποίητων προϊόντων: πήραμε ένα αργό, ασυντήρητο WooCommerce με προβληματικό checkout και το κάναμε γρήγορο και λειτουργικό.',
      client: {
        title: 'Η Aporelli Artworks',
        html: [
          'Η Aporelli Artworks φτιάχνει χειροποίητα έργα θρησκευτικής τέχνης και τα πουλάει online στο aporelliartworks.com. Ήρθε σε εμάς από σύσταση.',
        ],
      },
      challenge: {
        title: 'Ένα e-shop που είχε μείνει πίσω',
        html: [
          'Το e-shop υπήρχε ήδη, αλλά είχε μείνει χωρίς συντήρηση. Ήταν αργό, με παλιό καλάθι και checkout που δεν δούλευε σωστά: ό,τι χειρότερο για ένα κατάστημα που ζει από online παραγγελίες.',
        ],
      },
      goal: {
        title: 'Να ξαναδουλέψει, και να μείνει έτσι',
        html: [
          'Ταχύτητα, λειτουργικό καλάθι και checkout, και ένα e-shop που δεν θα ξαναμείνει πίσω: με σταθερή μηνιαία συντήρηση αντί για έκτακτες επιδιορθώσεις.',
        ],
      },
      approach: {
        title: 'Τι κάναμε',
        html: [
          'Αναλάβαμε το υπάρχον WooCommerce και δουλέψαμε πάνω σε ό,τι πονούσε: ταχύτητα, καλάθι, checkout, πληρωμές. Η ίδια δουλειά που κάνουμε στην <a href="/kataskevi-eshop">κατασκευή e-shop</a> από το μηδέν, εφαρμοσμένη σε ένα ζωντανό κατάστημα.',
          'Δουλέψαμε επίσης το UX/UI και το email marketing. Σήμερα συνεχίζουμε με μηνιαία συντήρηση, SEO και Google Ads, ώστε το e-shop να μην ξαναμείνει ασυντήρητο.',
        ],
      },
      deliverables: [
        'Ανάληψη και βελτιστοποίηση υπάρχοντος WooCommerce e-shop',
        'Βελτιστοποίηση ταχύτητας',
        'Διόρθωση καλαθιού και checkout',
        'UX/UI βελτιώσεις',
        'Ενσωμάτωση πληρωμών',
        'Email marketing',
      ],
      cta: {
        heading: 'Το e-shop σου σέρνεται ή κολλάει στο checkout;',
        text: 'Αναλαμβάνουμε και υπάρχοντα e-shop, όχι μόνο καινούργια. Στείλε μας το link και θα σου πούμε τίμια τι φταίει, χωρίς δέσμευση.',
        serviceHref: '/kataskevi-eshop',
        serviceLabel: 'Κατασκευή E-shop',
      },
    },
  },

  // -----------------------------------------------------------------
  // 3. ΑΛΑΖΩ — Διαιτολόγος & Βελονιστής
  // -----------------------------------------------------------------
  {
    slug: 'alazo',
    anchor: 'alazo',
    name: 'Αλάζω',
    tagline:
      'Από μηδενική online παρουσία σε site με online ραντεβού για διαιτολόγο και βελονιστή.',
    description:
      'Το Αλάζω (διαιτολόγος και βελονιστής) δεν είχε καμία παρουσία στο internet. Φτιάξαμε το lifechanging.gr σε WordPress, με SEO, φροντισμένο UX/UI και online κράτηση ραντεβού.',
    industry: 'Υγεία & ευεξία',
    category: 'Website',
    year: 2025,
    url: 'https://lifechanging.gr',
    tags: ['Website', 'Online Ραντεβού', 'SEO'],
    stack: ['WordPress'],
    thumb: '/assets/images/portfolio/alazo-thumb.jpg',
    image: '/images/portfolio/alazo.webp',
    imageAlt: 'Η ιστοσελίδα του Αλάζω',
    hero: '/assets/images/portfolio/alazo-home.jpg',
    heroAlt: 'Η αρχική σελίδα της ιστοσελίδας lifechanging.gr',
    gallery: [
      {
        src: '/assets/images/portfolio/alazo-home.jpg',
        alt: 'Η αρχική σελίδα της ιστοσελίδας lifechanging.gr',
        caption: 'Το homepage: καθαρό, με ξεκάθαρη πορεία προς το ραντεβού.',
      },
      {
        src: '/assets/images/portfolio/alazo-services.jpg',
        alt: 'Η σελίδα υπηρεσιών της ιστοσελίδας lifechanging.gr',
        caption:
          'Η σελίδα υπηρεσιών: ο επισκέπτης καταλαβαίνει τι προσφέρεται πριν κλείσει ραντεβού.',
      },
      {
        src: '/assets/images/portfolio/alazo-booking.jpg',
        alt: 'Η φόρμα online κράτησης ραντεβού στο lifechanging.gr',
        caption: 'Το online ραντεβού σε δράση: επιλογή υπηρεσίας και ώρας μέσα από το site.',
      },
    ],
    metrics: [],
    accent: '#e8593c',
    caseStudy: {
      heroTitle:
        'Πώς το Αλάζω απέκτησε online παρουσία και ραντεβού που κλείνονται από το site',
      heroSub:
        'Ιστοσελίδα για διαιτολόγο και βελονιστή: από το μηδέν σε site με online κράτηση ραντεβού.',
      metaTitle:
        'Αλάζω: Ιστοσελίδα με online ραντεβού για διαιτολόγο | Case Study | phpixel',
      metaDescription:
        'Ιστοσελίδα για διαιτολόγο και βελονιστή: το Αλάζω πέρασε από μηδενική online παρουσία σε site με online κράτηση ραντεβού, SEO και φροντισμένο UX.',
      client: {
        title: 'Το Αλάζω',
        html: [
          'Πίσω από το Αλάζω βρίσκεται ένας επαγγελματίας υγείας με δύο ειδικότητες: διαιτολόγος και βελονιστής. Μας βρήκε από σύσταση.',
        ],
      },
      challenge: {
        title: 'Μηδενική παρουσία στο internet',
        html: [
          'Η δουλειά υπήρχε, οι πελάτες όμως δεν μπορούσαν να τη βρουν: καμία παρουσία στο internet, κανένα σημείο να δει κανείς τις υπηρεσίες ή να κλείσει ραντεβού.',
        ],
      },
      goal: {
        title: 'Να κλείνονται ραντεβού online',
        html: [
          'Παρουσία στο internet με ένα γρήγορο site και online κράτηση ραντεβού, ώστε ο επισκέπτης να κλείνει ώρα μόνος του, χωρίς τηλεφωνήματα.',
        ],
      },
      approach: {
        title: 'Τι φτιάξαμε',
        html: [
          'Στήσαμε το lifechanging.gr σε WordPress: <a href="/kataskevi-istoselidon">κατασκευή ιστοσελίδας</a> με φροντισμένο UX/UI, SEO και ενσωματωμένο σύστημα online ραντεβού.',
          'Ο επισκέπτης βλέπει τις υπηρεσίες, διαλέγει και κλείνει ραντεβού, όλα μέσα από το site.',
        ],
      },
      deliverables: [
        'Κατασκευή ιστοσελίδας',
        'Online σύστημα ραντεβού',
        'SEO',
        'UX/UI σχεδιασμός',
      ],
      cta: {
        heading: 'Θες κι εσύ ένα site που κλείνει ραντεβού για σένα;',
        text: 'Πες μας τι κάνεις και πώς δουλεύεις. Θα σου πούμε τίμια τι χρειάζεται, χωρίς δέσμευση.',
        serviceHref: '/kataskevi-istoselidon',
        serviceLabel: 'Κατασκευή Ιστοσελίδων',
      },
    },
  },

  // -----------------------------------------------------------------
  // 4. MIAN NATURAL COSMETICS
  // -----------------------------------------------------------------
  {
    slug: 'mian-natural-cosmetics',
    anchor: 'mian',
    name: 'Mian Natural Cosmetics',
    tagline:
      'Νέο e-shop φυσικών καλλυντικών από το μηδέν, με email flows και δομή για Google Ads.',
    description:
      'Η MIAN Natural Cosmetics ξεκίνησε χωρίς καμία online παρουσία. Στήσαμε πλήρες e-shop σε WooCommerce με φίλτρα προϊόντων, newsletter opt-in στο checkout, flow εγκαταλελειμμένου καλαθιού και δομή Google Ads, και συνεχίζουμε με email marketing και SEO.',
    industry: 'Φυσικά καλλυντικά',
    category: 'E-shop',
    year: 2026,
    url: 'https://miannaturalcosmetics.gr',
    tags: ['E-shop', 'WooCommerce', 'Email Marketing', 'Google Ads'],
    stack: ['WordPress', 'WooCommerce'],
    ongoing: 'Email marketing, Google Ads, SEO',
    thumb: '/assets/images/portfolio/mian-thumb.jpg',
    image: '/images/portfolio/mian.webp',
    imageAlt: 'Το e-shop της Mian Natural Cosmetics',
    hero: '/assets/images/portfolio/mian-home.jpg',
    heroAlt: 'Η αρχική σελίδα του e-shop miannaturalcosmetics.gr',
    gallery: [
      {
        src: '/assets/images/portfolio/mian-home.jpg',
        alt: 'Η αρχική σελίδα του e-shop miannaturalcosmetics.gr',
        caption: 'Το homepage του νέου e-shop.',
      },
      {
        src: '/assets/images/portfolio/mian-shop.jpg',
        alt: 'Ο κατάλογος προϊόντων με φίλτρα στο miannaturalcosmetics.gr',
        caption: 'Ο κατάλογος με τα φίλτρα προϊόντων που στήσαμε.',
      },
      {
        src: '/assets/images/portfolio/mian-product.jpg',
        alt: 'Σελίδα προϊόντος φυσικού καλλυντικού στο miannaturalcosmetics.gr',
        caption: 'Η σελίδα προϊόντος, με τις ελληνικές περιγραφές που γράψαμε.',
      },
    ],
    metrics: [],
    accent: '#a8b48a',
    caseStudy: {
      heroTitle:
        'Πώς η MIAN Natural Cosmetics ξεκίνησε να πουλάει online από το μηδέν',
      heroSub:
        'Κατασκευή e-shop καλλυντικών από λευκό χαρτί: κατάστημα, email flows, δομή Google Ads και πλάνο για τα επόμενα τρίμηνα.',
      metaTitle:
        'MIAN Natural Cosmetics: E-shop καλλυντικών από το μηδέν | Case Study | phpixel',
      metaDescription:
        'Κατασκευή e-shop καλλυντικών για τη MIAN: WooCommerce με φίλτρα προϊόντων, email flows, δομή Google Ads και πλάνο SEO για τα επόμενα τρίμηνα.',
      client: {
        title: 'Η MIAN Natural Cosmetics',
        html: [
          'Η MIAN Natural Cosmetics είναι brand φυσικών καλλυντικών. Η συνεργασία ξεκίνησε από σύσταση, πριν καν υπάρξει το πρώτο της e-shop.',
        ],
      },
      challenge: {
        title: 'Χωρίς κανάλι online πώλησης',
        html: [
          'Το brand δεν είχε παρουσία στο internet: ούτε e-shop, ούτε τρόπος να αγοράσει κανείς τα προϊόντα online.',
        ],
      },
      goal: {
        title: 'Εκκίνηση με πλάνο, όχι απλώς site',
        html: [
          'Όχι απλώς ένα e-shop, αλλά πλήρης εκκίνηση online παρουσίας: κατάστημα, SEO και πλάνο για marketing και περιεχόμενο για τα επόμενα τρία τρίμηνα.',
        ],
      },
      approach: {
        title: 'Τι στήσαμε',
        html: [
          'Πλήρης <a href="/kataskevi-eshop">κατασκευή e-shop</a> σε WordPress και WooCommerce, με φίλτρα προϊόντων και ελληνικό copywriting γραμμένο από εμάς.',
          'Στο checkout προσθέσαμε εγγραφή στο newsletter με σωστό GDPR consent και στήσαμε αυτόματο email flow για τα καλάθια που μένουν στη μέση.',
          'Δομήσαμε επίσης τα Google Ads. Σήμερα συνεχίζουμε με email marketing, Google Ads και SEO.',
        ],
      },
      deliverables: [
        'Πλήρες e-shop σε WooCommerce',
        'Φίλτρα προϊόντων',
        'Newsletter opt-in στο checkout (GDPR)',
        'Flow εγκαταλελειμμένου καλαθιού',
        'Δομή Google Ads',
        'Ελληνικό copywriting',
        'SEO',
      ],
      cta: {
        heading: 'Θες κι εσύ ένα τέτοιο e-shop;',
        text: 'Δες πώς δουλεύουμε στην κατασκευή e-shop ή στείλε μας δυο λόγια για το δικό σου. Απαντάμε τίμια, χωρίς δέσμευση.',
        serviceHref: '/kataskevi-eshop',
        serviceLabel: 'Κατασκευή E-shop',
      },
    },
  },

  // -----------------------------------------------------------------
  // 5. VITHOPOULOS OUTDOOR
  // -----------------------------------------------------------------
  {
    slug: 'vithopoulos-outdoor',
    anchor: 'vithopoulos',
    name: 'Vithopoulos Outdoor',
    tagline:
      'Η επιχείρηση εξοπλισμού βουνού μπήκε online: e-shop με προσεγμένο UX κατηγοριών και SEO.',
    description:
      'Η Vithopoulos Outdoor (εξοπλισμός πεζοπορίας και ορειβασίας) δεν είχε online παρουσία. Φτιάξαμε e-shop σε WooCommerce με προσεγμένο UX κατηγοριών και συνεχίζουμε με SEO και email marketing.',
    industry: 'Outdoor / αθλητικός εξοπλισμός',
    category: 'E-shop',
    year: 2024,
    url: 'https://vithopoulosoutdoor.gr',
    tags: ['E-shop', 'WooCommerce', 'SEO', 'Email Marketing'],
    stack: ['WordPress', 'WooCommerce'],
    ongoing: 'SEO, email marketing',
    thumb: '/assets/images/portfolio/vithopoulos-thumb.jpg',
    image: '/images/portfolio/vithopoulos.webp',
    imageAlt: 'Το e-shop της Vithopoulos Outdoor',
    hero: '/assets/images/portfolio/vithopoulos-home.jpg',
    heroAlt: 'Η αρχική σελίδα του e-shop vithopoulosoutdoor.gr',
    gallery: [
      {
        src: '/assets/images/portfolio/vithopoulos-home.jpg',
        alt: 'Η αρχική σελίδα του e-shop vithopoulosoutdoor.gr',
        caption: 'Το homepage του e-shop που στήσαμε.',
      },
      {
        src: '/assets/images/portfolio/vithopoulos-category.jpg',
        alt: 'Σελίδα κατηγορίας για πεζοπορία στο vithopoulosoutdoor.gr',
        caption:
          'Το UX κατηγοριών σε δράση: ο επισκέπτης φτάνει γρήγορα στο είδος που ψάχνει.',
      },
      {
        src: '/assets/images/portfolio/vithopoulos-shop.jpg',
        alt: 'Ο κατάλογος σακιδίων στο e-shop vithopoulosoutdoor.gr',
        caption: 'Σελίδα καταλόγου: καθαρή λίστα προϊόντων ανά κατηγορία.',
      },
      {
        src: '/assets/images/portfolio/vithopoulos-product.jpg',
        alt: 'Σελίδα προϊόντος σακιδίου στο e-shop vithopoulosoutdoor.gr',
        caption: 'Η σελίδα προϊόντος: καθαρή παρουσίαση με επιλογές παραλλαγών.',
      },
    ],
    metrics: [],
    accent: '#2f6b4a',
    caseStudy: {
      heroTitle:
        'Πώς η Vithopoulos Outdoor μπήκε στο online εμπόριο με δικό της e-shop',
      heroSub:
        'Κατασκευή e-shop για εξοπλισμό πεζοπορίας και ορειβασίας: από μηδενική online παρουσία σε δικό της κατάστημα.',
      metaTitle:
        'Vithopoulos Outdoor: E-shop για εξοπλισμό βουνού | Case Study | phpixel',
      metaDescription:
        'Κατασκευή e-shop για είδη outdoor: η Vithopoulos Outdoor πέρασε από μηδενική online παρουσία σε WooCommerce κατάστημα με καθαρές κατηγορίες και SEO.',
      client: {
        title: 'Η Vithopoulos Outdoor',
        html: [
          'Η Vithopoulos Outdoor πουλάει εξοπλισμό πεζοπορίας και ορειβασίας. Η συνεργασία ξεκίνησε από σύσταση.',
        ],
      },
      challenge: {
        title: 'Κατάστημα χωρίς online παρουσία',
        html: [
          'Η επιχείρηση δεν είχε παρουσία στο internet. Όποιος έψαχνε εξοπλισμό online, απλώς δεν την έβρισκε.',
        ],
      },
      goal: {
        title: 'Δικό της e-shop και ορατότητα στο Google',
        html: [
          'Δικό της e-shop, ορατότητα στο Google και email marketing προς τους πελάτες της.',
        ],
      },
      approach: {
        title: 'Τι φτιάξαμε',
        html: [
          '<a href="/kataskevi-eshop">Κατασκευή e-shop</a> σε WordPress και WooCommerce, με ιδιαίτερη δουλειά στο UX των κατηγοριών: σε ένα κατάστημα εξοπλισμού, το να βρίσκεις γρήγορα το σωστό προϊόν είναι η μισή πώληση.',
          'Από το launch και μετά συνεχίζουμε με SEO και email marketing.',
        ],
      },
      deliverables: [
        'Κατασκευή e-shop σε WooCommerce',
        'Category UX',
        'SEO',
      ],
      cta: {
        heading: 'Θες κι εσύ ένα τέτοιο e-shop;',
        text: 'Δες πώς δουλεύουμε στην κατασκευή e-shop ή στείλε μας δυο λόγια για το δικό σου. Απαντάμε τίμια, χωρίς δέσμευση.',
        serviceHref: '/kataskevi-eshop',
        serviceLabel: 'Κατασκευή E-shop',
      },
    },
  },
];

/** Helper για getStaticPaths */
export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
