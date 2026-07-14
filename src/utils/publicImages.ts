// Build-time ευρετήριο των εικόνων στο /public.
// Επιτρέπει να ελέγχουμε αν ένα asset υπάρχει τη στιγμή του build,
// ώστε να εμφανίζεται ουδέτερο placeholder αντί για σπασμένη εικόνα (§ images spec).
const publicFiles = import.meta.glob(
  '/public/**/*.{jpg,jpeg,png,webp,avif,svg,gif}',
  { query: '?url', import: 'default' }
);

export const publicImageExists = (path: string): boolean =>
  Object.prototype.hasOwnProperty.call(publicFiles, `/public${path}`);
