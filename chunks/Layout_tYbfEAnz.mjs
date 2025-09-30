import { c as createComponent, m as maybeRenderHead, e as renderScript, b as addAttribute, a as renderTemplate, d as createAstro, i as renderSlot, r as renderComponent, j as renderHead } from './astro/server_DyvwfAEE.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const menuItems = [
    { href: "/", text: "Inicio", icon: "home" },
    { href: "/about", text: "Sobre m\xED", icon: "user" },
    { href: "/services", text: "Servicios", icon: "briefcase" },
    { href: "/experience", text: "Experiencia", icon: "building" },
    { href: "/certificates", text: "Certificados", icon: "certificate" },
    { href: "/works", text: "Proyectos", icon: "folder" },
    { href: "/blog", text: "Blog", icon: "newspaper" },
    { href: "/contact", text: "Contacto", icon: "envelope" }
  ];
  const socialLinks = [
    { href: "https://facebook.com", icon: "facebook-f", label: "Facebook" },
    { href: "https://twitter.com", icon: "twitter", label: "Twitter" },
    { href: "https://instagram.com", icon: "instagram", label: "Instagram" },
    { href: "https://wa.me/", icon: "whatsapp", label: "WhatsApp" },
    { href: "https://t.me/", icon: "telegram", label: "Telegram" },
    { href: "https://discord.com", icon: "discord", label: "Discord" },
    { href: "https://linkedin.com", icon: "linkedin-in", label: "LinkedIn" },
    { href: "https://github.com", icon: "github", label: "GitHub" }
  ];
  return renderTemplate`${maybeRenderHead()}<button class="menu-toggle" id="menuToggle" data-astro-cid-2j44jlrm> <i class="fas fa-bars" data-astro-cid-2j44jlrm></i> </button> <nav class="menu" id="menu" data-astro-cid-2j44jlrm> <div class="profile" data-astro-cid-2j44jlrm> <div class="avatar" data-astro-cid-2j44jlrm> <img src="/avatar.png" alt="Soufiane Raki" data-astro-cid-2j44jlrm> <span class="status" data-astro-cid-2j44jlrm></span> </div> <h1 data-astro-cid-2j44jlrm>Soufiane Raki</h1> <p data-astro-cid-2j44jlrm>Full Stack Developer</p> </div> <ul class="nav-links" data-astro-cid-2j44jlrm> ${menuItems.map((item) => renderTemplate`<li data-astro-cid-2j44jlrm> <a${addAttribute(item.href, "href")} class="nav-link" data-astro-cid-2j44jlrm> <i${addAttribute(`fas fa-${item.icon}`, "class")} data-astro-cid-2j44jlrm></i> <span data-astro-cid-2j44jlrm>${item.text}</span> </a> </li>`)} </ul> <div class="social-links" data-astro-cid-2j44jlrm> ${socialLinks.map((social) => renderTemplate`<a${addAttribute(social.href, "href")}${addAttribute(social.label, "aria-label")} class="social-icon" target="_blank" rel="noopener noreferrer" data-astro-cid-2j44jlrm> <i${addAttribute(`fab fa-${social.icon}`, "class")} data-astro-cid-2j44jlrm></i> </a>`)} </div> <footer class="menu-footer" data-astro-cid-2j44jlrm> <p data-astro-cid-2j44jlrm>&copy; ${currentYear} Soufiane Raki</p> </footer> </nav>  ${renderScript($$result, "B:/dev/portfolio/src/components/Menu.astro?astro&type=script&index=0&lang.ts")}`;
}, "B:/dev/portfolio/src/components/Menu.astro", void 0);

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="theme-toggle" data-astro-cid-x3pjskd3> <button id="themeToggle" class="theme-toggle-btn" aria-label="Cambiar tema" data-astro-cid-x3pjskd3> <div class="theme-toggle-track" data-astro-cid-x3pjskd3> <div class="theme-toggle-thumb" data-astro-cid-x3pjskd3> <i class="fas fa-moon" id="darkIcon" data-astro-cid-x3pjskd3></i> <i class="fas fa-sun" id="lightIcon" data-astro-cid-x3pjskd3></i> </div> </div> </button> </div>  ${renderScript($$result, "B:/dev/portfolio/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "B:/dev/portfolio/src/components/ThemeToggle.astro", void 0);

const $$LanguageToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="language-toggle" data-astro-cid-lb7h3eps> <button id="languageToggle" class="language-toggle-btn" aria-label="Cambiar idioma" data-astro-cid-lb7h3eps> <div class="language-toggle-track" data-astro-cid-lb7h3eps> <div class="language-toggle-thumb" data-astro-cid-lb7h3eps> <span id="esFlag" class="flag" data-astro-cid-lb7h3eps>🇪🇸</span> <span id="enFlag" class="flag" data-astro-cid-lb7h3eps>🇺🇸</span> </div> </div> </button> </div>  ${renderScript($$result, "B:/dev/portfolio/src/components/LanguageToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "B:/dev/portfolio/src/components/LanguageToggle.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Desarrollador Full Stack especializado en React, Node.js, TypeScript y tecnolog\xEDas modernas. Portfolio de Soufiane Raki con proyectos, certificaciones y experiencia profesional.",
    keywords = "desarrollador full stack, react developer, node.js, typescript, javascript, portfolio, web development, frontend, backend, soufiane raki",
    image = "/avatar.png",
    url = Astro2.url.href,
    canonical = Astro2.url.href,
    noindex = false
  } = Astro2.props;
  const siteName = "Soufiane Raki - Portfolio";
  const twitterHandle = "@soufiane_raki";
  const currentLang = Astro2.url.pathname.startsWith("/en") ? "en" : "es";
  const alternateLang = currentLang === "es" ? "en" : "es";
  const alternateUrl = currentLang === "es" ? url.replace("/en", "") : url.replace(/^\/$/, "/en");
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><meta name="keywords"', '><meta name="author" content="Soufiane Raki"><meta name="robots"', '><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Soufiane Raki - Desarrollador Full Stack"><meta property="og:site_name"', '><meta property="og:locale"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta property="twitter:image:alt" content="Soufiane Raki - Desarrollador Full Stack"><meta property="twitter:creator"', '><meta property="twitter:site"', '><!-- Language and Region --><link rel="alternate"', "", '><link rel="alternate"', "", '><link rel="alternate" hreflang="x-default"', '><!-- Additional SEO Meta Tags --><meta name="theme-color" content="#6366f1"><meta name="msapplication-TileColor" content="#6366f1"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="default"><meta name="apple-mobile-web-app-title" content="Soufiane Raki"><!-- Preconnect for performance --><link rel="preconnect" href="https://cdnjs.cloudflare.com"><link rel="dns-prefetch" href="https://cdnjs.cloudflare.com"><!-- Font Awesome --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"><!-- PWA Manifest --><link rel="manifest" href="/manifest.json"><!-- Structured Data --><script type="application/ld+json">\n		{\n			"@context": "https://schema.org",\n			"@type": "Person",\n			"name": "Soufiane Raki",\n			"jobTitle": "Full Stack Developer",\n			"description": "Desarrollador Full Stack especializado en React, Node.js, TypeScript y tecnolog\xEDas modernas",\n			"url": "https://soufiane-raki.com",\n			"image": "https://soufiane-raki.com/avatar.png",\n			"sameAs": [\n				"https://github.com/soufiane-raki",\n				"https://linkedin.com/in/soufiane-raki",\n				"https://twitter.com/soufiane_raki"\n			],\n			"knowsAbout": [\n				"JavaScript",\n				"TypeScript",\n				"React",\n				"Node.js",\n				"Web Development",\n				"Frontend Development",\n				"Backend Development",\n				"Full Stack Development"\n			],\n			"hasOccupation": {\n				"@type": "Occupation",\n				"name": "Full Stack Developer",\n				"description": "Desarrollo de aplicaciones web completas usando tecnolog\xEDas modernas"\n			},\n			"alumniOf": {\n				"@type": "EducationalOrganization",\n				"name": "Universidad de Inform\xE1tica"\n			}\n		}\n		<\/script>', "</head> <body> ", " ", " ", " ", " </body></html>"])), addAttribute(currentLang, "lang"), addAttribute(Astro2.generator, "content"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(keywords, "content"), addAttribute(noindex ? "noindex,nofollow" : "index,follow", "content"), addAttribute(canonical, "href"), addAttribute(url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.site).href, "content"), addAttribute(siteName, "content"), addAttribute(currentLang === "es" ? "es_ES" : "en_US", "content"), addAttribute(url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.site).href, "content"), addAttribute(twitterHandle, "content"), addAttribute(twitterHandle, "content"), addAttribute(currentLang, "hreflang"), addAttribute(url, "href"), addAttribute(alternateLang, "hreflang"), addAttribute(alternateUrl, "href"), addAttribute(url, "href"), renderHead(), renderComponent($$result, "Menu", $$Menu, {}), renderComponent($$result, "ThemeToggle", $$ThemeToggle, {}), renderComponent($$result, "LanguageToggle", $$LanguageToggle, {}), renderSlot($$result, $$slots["default"]));
}, "B:/dev/portfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
