import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D8RsS1Sw.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Icon } from '../chunks/BaseLayout_CK7uW-Fq.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://phpixel.gr");
const $$Fail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Fail;
  const c_status = Astro2.cookies.get("form_status")?.value;
  if (c_status !== "sent") {
    return Astro2.redirect("/contact");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u0391\u03C0\u03BF\u03C4\u03C5\u03C7\u03AF\u03B1 \u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE\u03C2 | phpixel", "description": "\u039A\u03AC\u03C4\u03B9 \u03C0\u03AE\u03B3\u03B5 \u03C3\u03C4\u03C1\u03B1\u03B2\u03AC. \u0394\u03BF\u03BA\u03AF\u03BC\u03B1\u03C3\u03B5 \u03BE\u03B1\u03BD\u03AC \u03AE \u03C0\u03AC\u03C1\u03B5 \u03BC\u03B1\u03C2 \u03C4\u03B7\u03BB\u03AD\u03C6\u03C9\u03BD\u03BF.", "data-astro-cid-7vej5qli": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="status-page" data-astro-cid-7vej5qli> <div class="container status-page__inner" data-astro-cid-7vej5qli> <div class="status-card reveal" data-astro-cid-7vej5qli> <div class="status-icon status-icon--error" data-astro-cid-7vej5qli> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ic:baseline-error", "data-astro-cid-7vej5qli": true })} </div> <h1 data-astro-cid-7vej5qli>Κάτι πήγε στραβά</h1> <p data-astro-cid-7vej5qli>Δεν μπορέσαμε να στείλουμε το μήνυμά σου. Δοκίμασε ξανά ή πάρε μας στο 697 738 3488.</p> <div class="status-actions" data-astro-cid-7vej5qli> <a href="/contact" class="btn btn--primary" data-astro-cid-7vej5qli>Δοκίμασε ξανά</a> <a href="tel:+306977383488" class="btn btn--outline" data-astro-cid-7vej5qli>Πάρε μας τηλέφωνο</a> </div> </div> </div> </section> ` })} `;
}, "C:/Users/Work/Documents/vs_code_projects/phpixel/src/pages/fail.astro", void 0);

const $$file = "C:/Users/Work/Documents/vs_code_projects/phpixel/src/pages/fail.astro";
const $$url = "/fail";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Fail,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
