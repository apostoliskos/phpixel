import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, o as renderSlot, h as addAttribute } from './astro/server_D8RsS1Sw.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from './BaseLayout_C5WMkvS-.mjs';
/* empty css                      */

function generateSlug(string) {
	return string
		.toString()
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w\-]+/g, '')
		.replace(/\-\-+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');
}

function generateTagData(categories) {
	let categoryData = [];
	categories.forEach(category => {
		categoryData.push({
			title: category,
			slug: `${generateSlug(category)}`,
		});
	});
	return categoryData;
}

const $$Astro = createAstro("https://phpixel.gr");
const $$Post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const { content: { title, description, publishDate, canonicalURL, featuredImage, tags } } = Astro2.props;
  let allTagsData = [];
  if (tags && tags.length > 0) {
    allTagsData = generateTagData(tags);
  }
  const dateStr = publishDate ? (() => {
    try {
      return new Date(publishDate).toLocaleDateString("el-GR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    } catch {
      return publishDate;
    }
  })() : null;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${title} \u2014 Blog | phpixel`, "description": description, "image": featuredImage, "canonicalURL": canonicalURL }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="post"> <!-- Post Header --> <header class="post-header"> <div class="post-header__bg"></div> <div class="container post-header__inner"> <div class="reveal"> <a href="/blog" class="post-header__back">&larr; Πίσω στο Blog</a> ${allTagsData.length > 0 && renderTemplate`<div class="post-tags post-tags--header"> ${allTagsData.map((tag) => renderTemplate`<a${addAttribute(`/blog/tags/${tag.slug}`, "href")} class="post-tag">${tag.title}</a>`)} </div>`} <h1 class="post-header__title">${title}</h1> ${dateStr && renderTemplate`<time class="post-header__date">${dateStr}</time>`} </div> </div> </header> <!-- Featured Image --> ${featuredImage && renderTemplate`<div class="post-featured container"> <img${addAttribute(featuredImage, "src")}${addAttribute(title, "alt")} class="post-featured__img reveal"> </div>`} <!-- Post Body --> <div class="container post-body"> <div class="post-content reveal"> ${renderSlot($$result2, $$slots["default"])} </div> <!-- Tags Footer --> ${allTagsData.length > 0 && renderTemplate`<div class="post-tags-footer reveal"> <span class="post-tags-footer__label">Tags:</span> ${allTagsData.map((tag, index) => renderTemplate`<a${addAttribute(`/blog/tags/${tag.slug}`, "href")} class="post-tag"> ${tag.title} </a>`)} </div>`} </div> </article> ` })} `;
}, "C:/Users/Work/Documents/vs_code_projects/phpixel/src/layouts/Post.astro", void 0);

export { $$Post as $, generateSlug as g };
