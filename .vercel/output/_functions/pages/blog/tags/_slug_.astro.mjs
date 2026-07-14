import { _ as __vite_glob_0_0 } from '../../../chunks/ab_Be-E9wRL.mjs';
import { _ as __vite_glob_0_1 } from '../../../chunks/ux-ui_BPxCHEBm.mjs';
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../../chunks/astro/server_D8RsS1Sw.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_C5WMkvS-.mjs';
import { g as generateSlug } from '../../../chunks/Post_B8EgL6ri.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://phpixel.gr");
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const postModules = /* #__PURE__ */ Object.assign({"../posts/ab.mdx": __vite_glob_0_0,"../posts/ux-ui.mdx": __vite_glob_0_1});
  const allPosts = Object.values(postModules);
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf()
  );
  let tag = slug;
  for (const post of sortedPosts) {
    if (post.frontmatter.tags) {
      const match = post.frontmatter.tags.find((t) => generateSlug(t) === slug);
      if (match) {
        tag = match;
        break;
      }
    }
  }
  const posts = sortedPosts.filter(
    (post) => post.frontmatter.tags && post.frontmatter.tags.some((t) => generateSlug(t) === slug)
  );
  if (posts.length === 0) {
    return Astro2.redirect("/blog");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${tag} \u2014 Phpixel Blog`, "description": `\u0386\u03C1\u03B8\u03C1\u03B1 \u03BC\u03B5 tag "${tag}" \u03B1\u03C0\u03CC \u03C4\u03BF blog \u03C4\u03B7\u03C2 Phpixel.`, "data-astro-cid-5igcag46": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="tag-page" data-astro-cid-5igcag46> <div class="tag-page__bg" data-astro-cid-5igcag46></div> <div class="container tag-page__inner" data-astro-cid-5igcag46> <div class="reveal" data-astro-cid-5igcag46> <a href="/blog" class="tag-page__back" data-astro-cid-5igcag46>&larr; Πίσω στο Blog</a> <span class="tag-page__badge" data-astro-cid-5igcag46>${tag}</span> <h1 data-astro-cid-5igcag46>Άρθρα: ${tag}</h1> <p class="tag-page__count" data-astro-cid-5igcag46>${posts.length} ${posts.length === 1 ? "\u03AC\u03C1\u03B8\u03C1\u03BF" : "\u03AC\u03C1\u03B8\u03C1\u03B1"}</p> </div> </div> </section> <section class="tag-posts" data-astro-cid-5igcag46> <div class="container" data-astro-cid-5igcag46> <ul class="tag-posts__list" data-astro-cid-5igcag46> ${posts.map((post) => renderTemplate`<li class="tag-post reveal" data-astro-cid-5igcag46> <a${addAttribute(post.url, "href")} class="tag-post__link" data-astro-cid-5igcag46> ${post.frontmatter.featuredImage && renderTemplate`<img${addAttribute(post.frontmatter.featuredImage, "src")}${addAttribute(post.frontmatter.title, "alt")} class="tag-post__img" loading="lazy" data-astro-cid-5igcag46>`} <div class="tag-post__text" data-astro-cid-5igcag46> <h3 data-astro-cid-5igcag46>${post.frontmatter.title}</h3> ${post.frontmatter.excerpt && renderTemplate`<p data-astro-cid-5igcag46>${post.frontmatter.excerpt}</p>`} </div> </a> </li>`)} </ul> </div> </section> ` })} `;
}, "C:/Users/Work/Documents/vs_code_projects/phpixel/src/pages/blog/tags/[slug].astro", void 0);

const $$file = "C:/Users/Work/Documents/vs_code_projects/phpixel/src/pages/blog/tags/[slug].astro";
const $$url = "/blog/tags/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
