export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  rating: number;
}

/* <!-- TODO: Replace with real client testimonials --> */
export const testimonials: Testimonial[] = [
  {
    quote: 'Η Phpixel μας έφτιαξε ένα e-shop που αύξησε τις πωλήσεις μας κατά 200% τον πρώτο χρόνο. Εξαιρετική ομάδα!',
    name: 'Γιώργος Κ.',
    company: 'Fashion Store',
    rating: 5,
  },
  {
    quote: 'Επαγγελματική δουλειά, γρήγορη παράδοση και συνεχής υποστήριξη. Τους συστήνω ανεπιφύλακτα.',
    name: 'Μαρία Π.',
    company: 'Κλινική Υγείας',
    rating: 5,
  },
  {
    quote: 'Το νέο μας website φορτώνει αστραπιαία και τα rankings μας στο Google εκτοξεύτηκαν. Άψογη συνεργασία.',
    name: 'Νίκος Δ.',
    company: 'Restaurant Chain',
    rating: 5,
  },
];
