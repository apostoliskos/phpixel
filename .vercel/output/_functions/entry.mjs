import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DjQKfCNh.mjs';
import { manifest } from './manifest_Cd_7LKSc.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/blog/posts/ab.astro.mjs');
const _page5 = () => import('./pages/blog/posts/ux-ui.astro.mjs');
const _page6 = () => import('./pages/blog/tags/_slug_.astro.mjs');
const _page7 = () => import('./pages/blog/tags.astro.mjs');
const _page8 = () => import('./pages/blog.astro.mjs');
const _page9 = () => import('./pages/contact.astro.mjs');
const _page10 = () => import('./pages/diafimisi.astro.mjs');
const _page11 = () => import('./pages/email-marketing.astro.mjs');
const _page12 = () => import('./pages/fail.astro.mjs');
const _page13 = () => import('./pages/how-we-work.astro.mjs');
const _page14 = () => import('./pages/kataskevi-eshop.astro.mjs');
const _page15 = () => import('./pages/kataskevi-istoselidon.astro.mjs');
const _page16 = () => import('./pages/legal.astro.mjs');
const _page17 = () => import('./pages/portfolio/_slug_.astro.mjs');
const _page18 = () => import('./pages/portfolio.astro.mjs');
const _page19 = () => import('./pages/seo.astro.mjs');
const _page20 = () => import('./pages/services.astro.mjs');
const _page21 = () => import('./pages/software-development.astro.mjs');
const _page22 = () => import('./pages/success.astro.mjs');
const _page23 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/blog/posts/ab.mdx", _page4],
    ["src/pages/blog/posts/ux-ui.mdx", _page5],
    ["src/pages/blog/tags/[slug].astro", _page6],
    ["src/pages/blog/tags/index.astro", _page7],
    ["src/pages/blog/index.astro", _page8],
    ["src/pages/contact.astro", _page9],
    ["src/pages/diafimisi.astro", _page10],
    ["src/pages/email-marketing.astro", _page11],
    ["src/pages/fail.astro", _page12],
    ["src/pages/how-we-work.astro", _page13],
    ["src/pages/kataskevi-eshop.astro", _page14],
    ["src/pages/kataskevi-istoselidon.astro", _page15],
    ["src/pages/legal.astro", _page16],
    ["src/pages/portfolio/[slug].astro", _page17],
    ["src/pages/portfolio.astro", _page18],
    ["src/pages/seo.astro", _page19],
    ["src/pages/services.astro", _page20],
    ["src/pages/software-development.astro", _page21],
    ["src/pages/success.astro", _page22],
    ["src/pages/index.astro", _page23]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "93d20548-8317-4a9a-bfc1-c9cab368391d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
