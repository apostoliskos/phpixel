import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D8RsS1Sw.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Icon } from '../chunks/BaseLayout_C5WMkvS-.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://phpixel.gr");
const $$Success = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Success;
  const c_status = Astro2.cookies.get("form_status")?.value;
  const c_name = Astro2.cookies.get("form_name")?.value;
  if (c_status !== "sent") {
    return Astro2.redirect("/contact");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u03A4\u03BF \u039C\u03AE\u03BD\u03C5\u03BC\u03B1 \u03A3\u03C4\u03AC\u03BB\u03B8\u03B7\u03BA\u03B5 | phpixel", "description": "\u03A4\u03BF \u03BC\u03AE\u03BD\u03C5\u03BC\u03AC \u03C3\u03BF\u03C5 \u03C3\u03C4\u03AC\u03BB\u03B8\u03B7\u03BA\u03B5 \u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1.", "data-astro-cid-5y44lzmc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="status-page" data-astro-cid-5y44lzmc> <div class="container status-page__inner" data-astro-cid-5y44lzmc> <div class="status-card reveal" data-astro-cid-5y44lzmc> <div class="status-icon status-icon--success" data-astro-cid-5y44lzmc> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ic:baseline-check-circle", "data-astro-cid-5y44lzmc": true })} </div> <h1 data-astro-cid-5y44lzmc>Ευχαριστούμε${c_name ? `, ${c_name}` : ""}!</h1> <p data-astro-cid-5y44lzmc>Το μήνυμά σου στάλθηκε. Θα σου απαντήσουμε μέσα σε μία εργάσιμη.</p> <div class="status-actions" data-astro-cid-5y44lzmc> <a href="/" class="btn btn--primary" data-astro-cid-5y44lzmc>Πίσω στην Αρχική</a> <a href="/services" class="btn btn--outline" data-astro-cid-5y44lzmc>Οι Υπηρεσίες μας</a> </div> </div> </div> </section> ` })} `;
}, "C:/Users/Work/Documents/vs_code_projects/phpixel/src/pages/success.astro", void 0);

const $$file = "C:/Users/Work/Documents/vs_code_projects/phpixel/src/pages/success.astro";
const $$url = "/success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Success,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
