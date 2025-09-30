import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DyvwfAEE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_tYbfEAnz.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      icon: "code",
      title: "Desarrollo Web",
      description: "Soluciones de desarrollo web personalizadas utilizando las \xFAltimas tecnolog\xEDas y mejores pr\xE1cticas.",
      dataService: "web"
    },
    {
      icon: "mobile-screen",
      title: "Dise\xF1o Responsivo",
      description: "Creando sitios web que funcionan perfectamente en todos los dispositivos y tama\xF1os de pantalla.",
      dataService: "responsive"
    },
    {
      icon: "server",
      title: "Desarrollo Backend",
      description: "Soluciones backend robustas y escalables para tus aplicaciones web.",
      dataService: "backend"
    },
    {
      icon: "palette",
      title: "Dise\xF1o UI/UX",
      description: "Creando interfaces hermosas y f\xE1ciles de usar que involucren a los usuarios.",
      dataService: "uiux"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Services - Soufiane Raki", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-content" data-astro-cid-ucd2ps2b> <section class="services" data-astro-cid-ucd2ps2b> <h1 class="title" data-astro-cid-ucd2ps2b>Mis Servicios</h1> <div class="services-grid" data-astro-cid-ucd2ps2b> ${services.map((service) => renderTemplate`<div class="service-card" data-astro-cid-ucd2ps2b> <div class="service-icon" data-astro-cid-ucd2ps2b> <i${addAttribute(`fas fa-${service.icon}`, "class")} data-astro-cid-ucd2ps2b></i> </div> <h3${addAttribute(service.dataService, "data-service")} data-astro-cid-ucd2ps2b>${service.title}</h3> <p${addAttribute(service.dataService, "data-service-desc")} data-astro-cid-ucd2ps2b>${service.description}</p> </div>`)} </div> </section> </main> ` })} `;
}, "B:/dev/portfolio/src/pages/services.astro", void 0);

const $$file = "B:/dev/portfolio/src/pages/services.astro";
const $$url = "/portfolio/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Services,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
