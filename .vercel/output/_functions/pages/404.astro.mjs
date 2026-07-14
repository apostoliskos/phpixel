import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D8RsS1Sw.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C5WMkvS-.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404 \u2014 \u0397 \u03A3\u03B5\u03BB\u03AF\u03B4\u03B1 \u0394\u03B5\u03BD \u0392\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 | phpixel", "description": "\u0397 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1 \u03C0\u03BF\u03C5 \u03C8\u03AC\u03C7\u03BD\u03B5\u03B9\u03C2 \u03B4\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03AE \u03AD\u03C7\u03B5\u03B9 \u03BC\u03B5\u03C4\u03B1\u03BA\u03B9\u03BD\u03B7\u03B8\u03B5\u03AF.", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="error-page" data-astro-cid-zetdm5md> <div class="container error-page__inner" data-astro-cid-zetdm5md> <div class="error-content reveal" data-astro-cid-zetdm5md> <span class="error-badge" data-astro-cid-zetdm5md>Ωπ!</span> <h1 class="error-num" data-astro-cid-zetdm5md>404.</h1> <h2 data-astro-cid-zetdm5md>Η σελίδα δεν βρέθηκε</h2> <p class="error-desc" data-astro-cid-zetdm5md>
Η σελίδα που ψάχνεις δεν υπάρχει ή μετακόμισε αλλού.
</p> <div class="error-actions" data-astro-cid-zetdm5md> <a href="/" class="btn btn--primary" data-astro-cid-zetdm5md>Πίσω στην Αρχική</a> <a href="/contact" class="btn btn--outline" data-astro-cid-zetdm5md>Επικοινωνία</a> </div> </div> </div> </section> ` })} `;
}, "C:/Users/Work/Documents/vs_code_projects/phpixel/src/pages/404.astro", void 0);

const $$file = "C:/Users/Work/Documents/vs_code_projects/phpixel/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
