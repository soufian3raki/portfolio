import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DyvwfAEE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_tYbfEAnz.mjs';
import { g as getCollection } from '../chunks/_astro_content_C4kFf5Rp.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  posts.sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog de Desarrollo Web | Art\xEDculos y Tutoriales por Soufiane Raki", "description": "Blog t\xE9cnico sobre desarrollo web, React, Node.js, TypeScript y tecnolog\xEDas modernas. Tutoriales, gu\xEDas y art\xEDculos escritos por Soufiane Raki, desarrollador Full Stack.", "keywords": "blog desarrollo web, tutoriales react, node.js tutorial, typescript, javascript, programaci\xF3n, desarrollo full stack, soufiane raki blog", "image": "/avatar.png", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-content" data-astro-cid-5tznm7mj> <section class="blog" data-astro-cid-5tznm7mj> <h1 class="title" data-astro-cid-5tznm7mj>Blog</h1> <div class="posts-grid" data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<article class="post-card" data-astro-cid-5tznm7mj> <div class="post-image" data-astro-cid-5tznm7mj> <img${addAttribute(post.data.image || post.data.heroImage || "/avatar.png", "src")}${addAttribute(post.data.title, "alt")} data-astro-cid-5tznm7mj> </div> <div class="post-content" data-astro-cid-5tznm7mj> <h2 data-astro-cid-5tznm7mj>${post.data.title}</h2> <p class="post-date" data-astro-cid-5tznm7mj>${new Date(post.data.pubDate).toLocaleDateString()}</p> <p class="post-description" data-astro-cid-5tznm7mj>${post.data.description}</p> <div class="post-tags" data-astro-cid-5tznm7mj> ${post.data.tags?.map((tag) => renderTemplate`<span class="tag" data-astro-cid-5tznm7mj>#${tag}</span>`)} </div> <a${addAttribute(`/blog/${post.slug}`, "href")} class="read-more" data-astro-cid-5tznm7mj> <span class="read-more-text" data-astro-cid-5tznm7mj>Leer más</span> <span class="arrow" data-astro-cid-5tznm7mj>→</span> </a> </div> </article>`)} </div> </section> </main> ` })} `;
}, "B:/dev/portfolio/src/pages/blog/index.astro", void 0);

const $$file = "B:/dev/portfolio/src/pages/blog/index.astro";
const $$url = "/portfolio/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
