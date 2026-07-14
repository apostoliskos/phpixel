import { e as createAstro, f as createComponent } from '../../chunks/astro/server_D8RsS1Sw.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://phpixel.gr");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return Astro2.redirect("/blog", 301);
}, "C:/Users/Work/Documents/vs_code_projects/phpixel/src/pages/blog/tags/index.astro", void 0);

const $$file = "C:/Users/Work/Documents/vs_code_projects/phpixel/src/pages/blog/tags/index.astro";
const $$url = "/blog/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
