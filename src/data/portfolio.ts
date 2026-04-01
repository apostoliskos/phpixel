export interface Project {
  name: string;
  description: string;
  tags: string[];
  image: string;
}

/* <!-- TODO: Replace with real project data and screenshots --> */
export const projects: Project[] = [
  {
    name: 'Fashion E-shop',
    description: 'Ηλεκτρονικό κατάστημα μόδας με 2000+ προϊόντα',
    tags: ['Shopify', 'Custom Theme'],
    image: '/assets/images/placeholder-project.jpg',
  },
  {
    name: 'Restaurant Chain',
    description: 'Website με online παραγγελίες για αλυσίδα εστιατορίων',
    tags: ['Next.js', 'Headless CMS'],
    image: '/assets/images/placeholder-project.jpg',
  },
  {
    name: 'SaaS Dashboard',
    description: 'Custom web app για διαχείριση αποθήκης',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    image: '/assets/images/placeholder-project.jpg',
  },
  {
    name: 'Medical Clinic',
    description: 'Ιστοσελίδα με σύστημα online ραντεβού',
    tags: ['Astro', 'Tailwind'],
    image: '/assets/images/placeholder-project.jpg',
  },
];
