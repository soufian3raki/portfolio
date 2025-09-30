import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DyvwfAEE.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_C4kFf5Rp.mjs';
import { $ as $$Layout } from '../../chunks/Layout_tYbfEAnz.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.data.title} - Blog | Soufiane Raki`, "description": post.data.description, "keywords": post.data.tags?.join(", ") || "blog, desarrollo web, programaci\xF3n", "image": post.data.image || post.data.heroImage || "/avatar.png", "data-astro-cid-7jjqptxk": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-content" data-astro-cid-7jjqptxk> <nav class="breadcrumb-nav" data-astro-cid-7jjqptxk> <a href="/blog" class="back-to-blog" data-astro-cid-7jjqptxk> <i class="fas fa-arrow-left" data-astro-cid-7jjqptxk></i>
Volver al Blog
</a> </nav> <article class="post" data-astro-cid-7jjqptxk> <header class="post-header" data-astro-cid-7jjqptxk> <div class="post-meta" data-astro-cid-7jjqptxk> <div class="post-tags" data-astro-cid-7jjqptxk> ${post.data.tags?.map((tag) => renderTemplate`<span class="tag" data-astro-cid-7jjqptxk>#${tag}</span>`)} </div> <time class="post-date" data-astro-cid-7jjqptxk> <i class="fas fa-calendar-alt" data-astro-cid-7jjqptxk></i> ${new Date(post.data.pubDate).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> </div> <h1 data-astro-cid-7jjqptxk>${post.data.title}</h1> <p class="post-description" data-astro-cid-7jjqptxk>${post.data.description}</p> </header> <div class="post-image" data-astro-cid-7jjqptxk> <img${addAttribute(post.data.image, "src")}${addAttribute(post.data.title, "alt")} data-astro-cid-7jjqptxk> </div> <div class="post-content" data-astro-cid-7jjqptxk> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-7jjqptxk": true })} </div> </article> </main> ` })} `;
}, "B:/dev/portfolio/src/pages/blog/[...slug].astro", void 0);

const $$file = "B:/dev/portfolio/src/pages/blog/[...slug].astro";
const $$url = "/portfolio/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
