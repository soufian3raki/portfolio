import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DyvwfAEE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_tYbfEAnz.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto - Soufiane Raki | Desarrollador Full Stack Disponible", "description": "Contacta con Soufiane Raki, desarrollador Full Stack disponible para nuevos proyectos. Especializado en React, Node.js y desarrollo web moderno. \xA1Hablemos de tu proyecto!", "keywords": "contacto soufiane raki, desarrollador full stack disponible, contratar desarrollador, proyectos web, react developer, node.js, desarrollo web, contacto profesional", "image": "/avatar.png", "data-astro-cid-ahc3q4vw": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-content" data-astro-cid-ahc3q4vw> <section class="contact" data-astro-cid-ahc3q4vw> <h1 class="title" data-astro-cid-ahc3q4vw>Contacto</h1> <div class="contact-container" data-astro-cid-ahc3q4vw> <div class="contact-info" data-astro-cid-ahc3q4vw> <h2 class="contact-greeting" data-astro-cid-ahc3q4vw>¡Hablemos!</h2> <p class="contact-subtitle" data-astro-cid-ahc3q4vw>Estoy disponible para nuevas oportunidades y colaboraciones.</p> <div class="contact-methods" data-astro-cid-ahc3q4vw> <a href="mailto:tu.email@ejemplo.com" class="contact-method email" data-astro-cid-ahc3q4vw> <i class="fas fa-envelope" data-astro-cid-ahc3q4vw></i> <div data-astro-cid-ahc3q4vw> <h3 data-astro-cid-ahc3q4vw>Email</h3> <span data-astro-cid-ahc3q4vw>tu.email@ejemplo.com</span> </div> </a> <a href="https://linkedin.com/in/tu-perfil" target="_blank" class="contact-method linkedin" data-astro-cid-ahc3q4vw> <i class="fab fa-linkedin" data-astro-cid-ahc3q4vw></i> <div data-astro-cid-ahc3q4vw> <h3 data-astro-cid-ahc3q4vw>LinkedIn</h3> <span data-astro-cid-ahc3q4vw>linkedin.com/in/tu-perfil</span> </div> </a> <a href="https://github.com/tu-usuario" target="_blank" class="contact-method github" data-astro-cid-ahc3q4vw> <i class="fab fa-github" data-astro-cid-ahc3q4vw></i> <div data-astro-cid-ahc3q4vw> <h3 data-astro-cid-ahc3q4vw>GitHub</h3> <span data-astro-cid-ahc3q4vw>github.com/tu-usuario</span> </div> </a> </div> </div> <div class="contact-form" data-astro-cid-ahc3q4vw> <form id="contact-form" action="#" method="POST" data-astro-cid-ahc3q4vw> <div class="form-group" data-astro-cid-ahc3q4vw> <label for="name" class="form-label-name" data-astro-cid-ahc3q4vw>Nombre</label> <input type="text" id="name" name="name" class="form-input-name" placeholder="Tu nombre" required data-astro-cid-ahc3q4vw> </div> <div class="form-group" data-astro-cid-ahc3q4vw> <label for="email" class="form-label-email" data-astro-cid-ahc3q4vw>Email</label> <input type="email" id="email" name="email" class="form-input-email" placeholder="tu@email.com" required data-astro-cid-ahc3q4vw> </div> <div class="form-group" data-astro-cid-ahc3q4vw> <label for="subject" class="form-label-subject" data-astro-cid-ahc3q4vw>Asunto</label> <input type="text" id="subject" name="subject" class="form-input-subject" placeholder="Asunto del mensaje" required data-astro-cid-ahc3q4vw> </div> <div class="form-group" data-astro-cid-ahc3q4vw> <label for="message" class="form-label-message" data-astro-cid-ahc3q4vw>Mensaje</label> <textarea id="message" name="message" class="form-input-message" placeholder="Cuéntame sobre tu proyecto..." rows="5" required data-astro-cid-ahc3q4vw></textarea> </div> <button type="submit" class="submit-btn form-submit-btn" data-astro-cid-ahc3q4vw>
Enviar Mensaje
<i class="fas fa-paper-plane" data-astro-cid-ahc3q4vw></i> </button> </form> </div> </div> </section> <!-- Toast Notifications Container --> <div id="toast-container" class="toast-container" data-astro-cid-ahc3q4vw></div> </main> ` })}  ${renderScript($$result, "B:/dev/portfolio/src/pages/contact/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "B:/dev/portfolio/src/pages/contact/index.astro", void 0);

const $$file = "B:/dev/portfolio/src/pages/contact/index.astro";
const $$url = "/portfolio/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
