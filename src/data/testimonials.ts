export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  rating: number;
}

// ΠΡΟΣΟΧΗ: Placeholder περιεχόμενο — ΔΕΝ είναι αληθινά testimonials.
// Η ενότητα εμφανίζεται μόνο όταν SHOW_TESTIMONIALS = true (src/config.ts).
// Αντικατέστησε με πραγματικές κριτικές πελατών πριν την ενεργοποιήσεις.
export const testimonials: Testimonial[] = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Όνομα Πελάτη',
    company: 'Επιχείρηση',
    rating: 5,
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    name: 'Όνομα Πελάτη',
    company: 'Επιχείρηση',
    rating: 5,
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit.',
    name: 'Όνομα Πελάτη',
    company: 'Επιχείρηση',
    rating: 5,
  },
];
