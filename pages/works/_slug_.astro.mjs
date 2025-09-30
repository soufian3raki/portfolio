import { c as createComponent, d as createAstro, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DyvwfAEE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_tYbfEAnz.mjs';
import { g as getCollection } from '../../chunks/_astro_content_C4kFf5Rp.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const works = await getCollection("works");
  return works.map((work) => ({
    params: { slug: work.slug },
    props: { work }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { work } = Astro2.props;
  const { Content } = await work.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${work.data.title} - Soufiane Raki`, "data-astro-cid-4vgqnzw6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-content" data-astro-cid-4vgqnzw6> <section class="work-detail" data-astro-cid-4vgqnzw6> <!-- Breadcrumb --> <nav class="breadcrumb" data-astro-cid-4vgqnzw6> <a href="/works" class="breadcrumb-link" data-astro-cid-4vgqnzw6> <i class="fas fa-arrow-left" data-astro-cid-4vgqnzw6></i> <span class="back-to-works-text" data-astro-cid-4vgqnzw6>Volver a Proyectos</span> </a> </nav> <!-- Project Header --> <div class="work-header" data-astro-cid-4vgqnzw6> <div class="work-image-large" data-astro-cid-4vgqnzw6> <img${addAttribute(work.data.image, "src")}${addAttribute(work.data.title, "alt")} data-astro-cid-4vgqnzw6> </div> <div class="work-info" data-astro-cid-4vgqnzw6> <h1 class="work-title"${addAttribute(work.data.title, "data-work-title")}${addAttribute(work.data.title_es || work.data.title, "data-work-title-es")} data-astro-cid-4vgqnzw6> ${work.data.title_es || work.data.title} </h1> <p class="work-description"${addAttribute(work.data.description, "data-work-description")}${addAttribute(work.data.description_es || work.data.description, "data-work-description-es")} data-astro-cid-4vgqnzw6> ${work.data.description_es || work.data.description} </p> <div class="work-meta" data-astro-cid-4vgqnzw6> <div class="work-date" data-astro-cid-4vgqnzw6> <i class="fas fa-calendar" data-astro-cid-4vgqnzw6></i> <span class="completed-text" data-astro-cid-4vgqnzw6>Completado:</span> <time data-astro-cid-4vgqnzw6>${work.data.completed}</time> </div> <div class="work-technologies" data-astro-cid-4vgqnzw6> <h3 class="technologies-title" data-astro-cid-4vgqnzw6>Tecnologías:</h3> <div class="tech-tags" data-astro-cid-4vgqnzw6> ${work.data.technologies.map((tech) => renderTemplate`<span class="tech-tag" data-astro-cid-4vgqnzw6>${tech}</span>`)} </div> </div> </div> <div class="work-actions" data-astro-cid-4vgqnzw6> ${work.data.link && renderTemplate`<a${addAttribute(work.data.link, "href")} class="btn btn-primary" target="_blank" rel="noopener noreferrer" data-astro-cid-4vgqnzw6> <i class="fas fa-external-link-alt" data-astro-cid-4vgqnzw6></i> <span class="visit-site-text" data-astro-cid-4vgqnzw6>Visitar Sitio</span> </a>`} ${work.data.github && renderTemplate`<a${addAttribute(work.data.github, "href")} class="btn btn-secondary" target="_blank" rel="noopener noreferrer" data-astro-cid-4vgqnzw6> <i class="fab fa-github" data-astro-cid-4vgqnzw6></i> <span class="view-code-text" data-astro-cid-4vgqnzw6>Ver Código</span> </a>`} </div> </div> </div> <!-- Project Content --> <div class="work-content" data-astro-cid-4vgqnzw6> <div class="content-wrapper" data-astro-cid-4vgqnzw6> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-4vgqnzw6": true })} </div> </div> </section> </main> ` })}  ${renderScript($$result, "B:/dev/portfolio/src/pages/works/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "B:/dev/portfolio/src/pages/works/[slug].astro", void 0);

const $$file = "B:/dev/portfolio/src/pages/works/[slug].astro";
const $$url = "/portfolio/works/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
