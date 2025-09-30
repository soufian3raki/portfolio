import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DyvwfAEE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_tYbfEAnz.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre Soufiane Raki - Desarrollador Full Stack | Experiencia y Habilidades", "description": "Conoce a Soufiane Raki, desarrollador Full Stack con m\xE1s de 2 a\xF1os de experiencia. Especializado en React, Node.js, TypeScript y tecnolog\xEDas modernas de desarrollo web.", "keywords": "sobre soufiane raki, desarrollador full stack, experiencia profesional, habilidades t\xE9cnicas, react, node.js, typescript, desarrollo web, perfil profesional", "image": "/avatar.png", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-content" data-astro-cid-kh7btl4r> <section class="about" data-astro-cid-kh7btl4r> <h1 class="title" data-astro-cid-kh7btl4r>Sobre mí</h1> <div class="content" data-astro-cid-kh7btl4r> <div class="bio" data-astro-cid-kh7btl4r> <h2 class="who-am-i" data-astro-cid-kh7btl4r>¿Quién soy?</h2> <p class="bio-description" data-astro-cid-kh7btl4r>
Soy un desarrollador web apasionado con amplia experiencia en la creación de aplicaciones web modernas y responsivas.
						Mi viaje en el desarrollo web comenzó hace varios años, y desde entonces, he estado aprendiendo constantemente y
						evolucionando con las últimas tecnologías.
</p> <h2 class="skills-title" data-astro-cid-kh7btl4r>Habilidades</h2> <div class="skills" data-astro-cid-kh7btl4r> <div class="skill" data-astro-cid-kh7btl4r> <span class="skill-name" data-skill="frontend" data-astro-cid-kh7btl4r>Desarrollo Frontend</span> <div class="skill-bar" data-astro-cid-kh7btl4r> <div class="skill-level" style="width: 90%" data-astro-cid-kh7btl4r></div> </div> </div> <div class="skill" data-astro-cid-kh7btl4r> <span class="skill-name" data-skill="backend" data-astro-cid-kh7btl4r>Desarrollo Backend</span> <div class="skill-bar" data-astro-cid-kh7btl4r> <div class="skill-level" style="width: 85%" data-astro-cid-kh7btl4r></div> </div> </div> <div class="skill" data-astro-cid-kh7btl4r> <span class="skill-name" data-skill="uiux" data-astro-cid-kh7btl4r>Diseño UI/UX</span> <div class="skill-bar" data-astro-cid-kh7btl4r> <div class="skill-level" style="width: 80%" data-astro-cid-kh7btl4r></div> </div> </div> </div> </div> </div> </section> </main> ` })} `;
}, "B:/dev/portfolio/src/pages/about.astro", void 0);

const $$file = "B:/dev/portfolio/src/pages/about.astro";
const $$url = "/portfolio/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
