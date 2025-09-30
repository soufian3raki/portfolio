import { c as createComponent, d as createAstro, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DyvwfAEE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_tYbfEAnz.mjs';
import { g as getCollection } from '../chunks/_astro_content_C4kFf5Rp.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const experiences = await getCollection("experience");
  experiences.sort((a, b) => {
    const dateA = new Date(a.data.endDate || a.data.startDate);
    const dateB = new Date(b.data.endDate || b.data.startDate);
    return dateB.getTime() - dateA.getTime();
  });
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-ES", { year: "numeric", month: "long" });
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Experience - Soufiane Raki", "data-astro-cid-mk6acr4n": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-content" data-astro-cid-mk6acr4n> <section class="experience" data-astro-cid-mk6acr4n> <h1 class="title" data-astro-cid-mk6acr4n>Experiencia</h1> <div class="timeline" data-astro-cid-mk6acr4n> ${experiences.map((exp, index) => renderTemplate`<article${addAttribute(`timeline-item ${exp.data.type}`, "class")} data-astro-cid-mk6acr4n> <div class="timeline-marker" data-astro-cid-mk6acr4n> <div class="marker-content" data-astro-cid-mk6acr4n> <img${addAttribute(exp.data.logo, "src")}${addAttribute(exp.data.company, "alt")} class="company-logo" data-astro-cid-mk6acr4n> </div> </div> <div class="timeline-content" data-astro-cid-mk6acr4n> <div class="content-header" data-astro-cid-mk6acr4n> <h3 class="position" data-astro-cid-mk6acr4n>${exp.data.position}</h3> <span class="company" data-astro-cid-mk6acr4n>${exp.data.company}</span> <div class="meta" data-astro-cid-mk6acr4n> <span class="location" data-astro-cid-mk6acr4n> <i class="fas fa-map-marker-alt" data-astro-cid-mk6acr4n></i> ${exp.data.location} </span> <span class="date" data-astro-cid-mk6acr4n> <i class="fas fa-calendar" data-astro-cid-mk6acr4n></i> ${formatDate(exp.data.startDate)} - ${exp.data.current ? "Actual" : exp.data.endDate ? formatDate(exp.data.endDate) : "Actual"} </span> </div> </div> <div class="content-body" data-astro-cid-mk6acr4n> <ul class="achievements" data-astro-cid-mk6acr4n> ${exp.data.achievements.map((achievement) => renderTemplate`<li data-astro-cid-mk6acr4n>${achievement}</li>`)} </ul> </div> <div class="technologies" data-astro-cid-mk6acr4n> ${exp.data.technologies.map((tech) => renderTemplate`<span class="tech-tag" data-astro-cid-mk6acr4n>${tech}</span>`)} </div> </div> </article>`)} </div> </section> </main> ` })}  ${renderScript($$result, "B:/dev/portfolio/src/pages/experience/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "B:/dev/portfolio/src/pages/experience/index.astro", void 0);

const $$file = "B:/dev/portfolio/src/pages/experience/index.astro";
const $$url = "/portfolio/experience";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
