import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_DyvwfAEE.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///B:/dev/portfolio/","cacheDir":"file:///B:/dev/portfolio/node_modules/.astro/","outDir":"file:///B:/dev/portfolio/dist/","srcDir":"file:///B:/dev/portfolio/src/","publicDir":"file:///B:/dev/portfolio/public/","buildClientDir":"file:///B:/dev/portfolio/dist/client/","buildServerDir":"file:///B:/dev/portfolio/dist/server/","adapterName":"","routes":[{"file":"file:///B:/dev/portfolio/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///B:/dev/portfolio/dist/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///B:/dev/portfolio/dist/certificates/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/certificates","isIndex":true,"type":"page","pattern":"^\\/certificates\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/index.astro","pathname":"/certificates","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///B:/dev/portfolio/dist/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":true,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/index.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///B:/dev/portfolio/dist/experience/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/experience","isIndex":true,"type":"page","pattern":"^\\/experience\\/?$","segments":[[{"content":"experience","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/experience/index.astro","pathname":"/experience","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///B:/dev/portfolio/dist/services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///B:/dev/portfolio/dist/sitemap.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sitemap.xml","isIndex":false,"type":"endpoint","pattern":"^\\/sitemap\\.xml\\/?$","segments":[[{"content":"sitemap.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sitemap.xml.ts","pathname":"/sitemap.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///B:/dev/portfolio/dist/works/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/works","isIndex":true,"type":"page","pattern":"^\\/works\\/?$","segments":[[{"content":"works","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/works/index.astro","pathname":"/works","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///B:/dev/portfolio/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/portfolio/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["B:/dev/portfolio/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["B:/dev/portfolio/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["B:/dev/portfolio/src/pages/certificates/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/certificates/index@_@astro",{"propagation":"in-tree","containsHead":false}],["B:/dev/portfolio/src/pages/experience/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/experience/index@_@astro",{"propagation":"in-tree","containsHead":false}],["B:/dev/portfolio/src/pages/sitemap.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/sitemap.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["B:/dev/portfolio/src/pages/works/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/works/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["B:/dev/portfolio/src/pages/works/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/works/index@_@astro",{"propagation":"in-tree","containsHead":false}],["B:/dev/portfolio/src/pages/about.astro",{"propagation":"none","containsHead":true}],["B:/dev/portfolio/src/pages/contact/index.astro",{"propagation":"none","containsHead":true}],["B:/dev/portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["B:/dev/portfolio/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/certificates/index@_@astro":"pages/certificates.astro.mjs","\u0000@astro-page:src/pages/contact/index@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/experience/index@_@astro":"pages/experience.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/sitemap.xml@_@ts":"pages/sitemap.xml.astro.mjs","\u0000@astro-page:src/pages/works/[slug]@_@astro":"pages/works/_slug_.astro.mjs","\u0000@astro-page:src/pages/works/index@_@astro":"pages/works.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_NtTwKR4K.mjs","B:\\dev\\portfolio\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","B:\\dev\\portfolio\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_P4QFtsgO.mjs","B:/dev/portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_wV31-0pF.mjs","B:/dev/portfolio/src/pages/certificates/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.UcAQkns0.js","B:/dev/portfolio/src/pages/contact/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.DJmce5BB.js","B:/dev/portfolio/src/pages/experience/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.C6EHvB1m.js","B:/dev/portfolio/src/pages/works/[slug].astro?astro&type=script&index=0&lang.ts":"_astro/_slug_.astro_astro_type_script_index_0_lang.C6EHvB1m.js","B:/dev/portfolio/src/pages/works/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang._YcvrtkK.js","B:/dev/portfolio/src/components/Menu.astro?astro&type=script&index=0&lang.ts":"_astro/Menu.astro_astro_type_script_index_0_lang.Bw1E78w1.js","B:/dev/portfolio/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts":"_astro/ThemeToggle.astro_astro_type_script_index_0_lang.BX1IeL8Q.js","B:/dev/portfolio/src/components/LanguageToggle.astro?astro&type=script&index=0&lang.ts":"_astro/LanguageToggle.astro_astro_type_script_index_0_lang.D3DKQCDH.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["B:/dev/portfolio/src/pages/experience/index.astro?astro&type=script&index=0&lang.ts","const f={React:\"fab fa-react\",\"Node.js\":\"fab fa-node-js\",JavaScript:\"fab fa-js-square\",TypeScript:\"fab fa-js-square\",MongoDB:\"fas fa-database\",Express:\"fab fa-node-js\",PostgreSQL:\"fas fa-database\",Redis:\"fas fa-database\",Stripe:\"fab fa-stripe\",\"React Native\":\"fab fa-react\",Redux:\"fab fa-react\",\"Vue.js\":\"fab fa-vuejs\",TailwindCSS:\"fab fa-css3-alt\",Astro:\"fas fa-rocket\",HTML:\"fab fa-html5\",CSS:\"fab fa-css3-alt\",Git:\"fab fa-git-alt\",GitHub:\"fab fa-github\",Docker:\"fab fa-docker\",AWS:\"fab fa-aws\",\"OpenWeather API\":\"fas fa-cloud-sun\",\"Chart.js\":\"fas fa-chart-bar\"};function s(a){return f[a]||\"fas fa-code\"}function c(a){return`<i class=\"${s(a)}\"></i> ${a}`}function n(){document.querySelectorAll(\".tech-tag\").forEach(e=>{const t=e.textContent.trim();e.innerHTML=c(t)})}document.addEventListener(\"DOMContentLoaded\",n);"],["B:/dev/portfolio/src/pages/works/[slug].astro?astro&type=script&index=0&lang.ts","const f={React:\"fab fa-react\",\"Node.js\":\"fab fa-node-js\",JavaScript:\"fab fa-js-square\",TypeScript:\"fab fa-js-square\",MongoDB:\"fas fa-database\",Express:\"fab fa-node-js\",PostgreSQL:\"fas fa-database\",Redis:\"fas fa-database\",Stripe:\"fab fa-stripe\",\"React Native\":\"fab fa-react\",Redux:\"fab fa-react\",\"Vue.js\":\"fab fa-vuejs\",TailwindCSS:\"fab fa-css3-alt\",Astro:\"fas fa-rocket\",HTML:\"fab fa-html5\",CSS:\"fab fa-css3-alt\",Git:\"fab fa-git-alt\",GitHub:\"fab fa-github\",Docker:\"fab fa-docker\",AWS:\"fab fa-aws\",\"OpenWeather API\":\"fas fa-cloud-sun\",\"Chart.js\":\"fas fa-chart-bar\"};function s(a){return f[a]||\"fas fa-code\"}function c(a){return`<i class=\"${s(a)}\"></i> ${a}`}function n(){document.querySelectorAll(\".tech-tag\").forEach(e=>{const t=e.textContent.trim();e.innerHTML=c(t)})}document.addEventListener(\"DOMContentLoaded\",n);"],["B:/dev/portfolio/src/pages/works/index.astro?astro&type=script&index=0&lang.ts","const f={React:\"fab fa-react\",\"Node.js\":\"fab fa-node-js\",JavaScript:\"fab fa-js-square\",TypeScript:\"fab fa-js-square\",MongoDB:\"fas fa-database\",Express:\"fab fa-node-js\",PostgreSQL:\"fas fa-database\",Redis:\"fas fa-database\",Stripe:\"fab fa-stripe\",\"React Native\":\"fab fa-react\",Redux:\"fab fa-react\",\"Vue.js\":\"fab fa-vuejs\",TailwindCSS:\"fab fa-css3-alt\",Astro:\"fas fa-rocket\",HTML:\"fab fa-html5\",CSS:\"fab fa-css3-alt\",Git:\"fab fa-git-alt\",GitHub:\"fab fa-github\",Docker:\"fab fa-docker\",AWS:\"fab fa-aws\",\"OpenWeather API\":\"fas fa-cloud-sun\",\"Chart.js\":\"fas fa-chart-bar\"};function s(a){return f[a]||\"fas fa-code\"}function c(a){return`<i class=\"${s(a)}\"></i> ${a}`}function n(){document.querySelectorAll(\".tech-tag\").forEach(e=>{const t=e.textContent.trim();e.innerHTML=c(t)})}document.addEventListener(\"DOMContentLoaded\",n);"],["B:/dev/portfolio/src/components/Menu.astro?astro&type=script&index=0&lang.ts","const c=window.location.pathname,o=document.querySelectorAll(\".nav-link\");o.forEach(e=>{const n=e.getAttribute(\"href\");(n===\"/\"&&c===\"/\"||n!==\"/\"&&c.startsWith(n))&&e.classList.add(\"active\")});const i=document.getElementById(\"menuToggle\"),t=document.getElementById(\"menu\");i&&t&&(i.addEventListener(\"click\",()=>{t.classList.toggle(\"open\")}),o.forEach(e=>{e.addEventListener(\"click\",()=>{window.innerWidth<=768&&t.classList.remove(\"open\")})}),document.addEventListener(\"click\",e=>{window.innerWidth<=768&&!t.contains(e.target)&&!i.contains(e.target)&&t.classList.remove(\"open\")}));"],["B:/dev/portfolio/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts","function c(){const i=document.documentElement,n=i.getAttribute(\"data-theme\"),o=n===\"light\"?\"dark\":\"light\";console.log(\"Cambiando tema de\",n,\"a\",o),i.setAttribute(\"data-theme\",o),localStorage.setItem(\"theme\",o);const e=document.getElementById(\"darkIcon\"),t=document.getElementById(\"lightIcon\");e&&t&&(o===\"light\"?(e.style.opacity=\"0\",e.style.visibility=\"hidden\",t.style.opacity=\"1\",t.style.visibility=\"visible\"):(e.style.opacity=\"1\",e.style.visibility=\"visible\",t.style.opacity=\"0\",t.style.visibility=\"hidden\"))}function l(){const i=localStorage.getItem(\"theme\"),n=window.matchMedia(\"(prefers-color-scheme: dark)\").matches,o=i||(n?\"dark\":\"light\");document.documentElement.setAttribute(\"data-theme\",o),console.log(\"Tema inicializado:\",o);const e=document.getElementById(\"darkIcon\"),t=document.getElementById(\"lightIcon\");e&&t&&(o===\"light\"?(e.style.opacity=\"0\",e.style.visibility=\"hidden\",t.style.opacity=\"1\",t.style.visibility=\"visible\"):(e.style.opacity=\"1\",e.style.visibility=\"visible\",t.style.opacity=\"0\",t.style.visibility=\"hidden\"))}document.addEventListener(\"DOMContentLoaded\",function(){l();const i=document.getElementById(\"themeToggle\");i&&i.addEventListener(\"click\",function(n){n.preventDefault(),c()})});document.readyState===\"loading\"?document.addEventListener(\"DOMContentLoaded\",l):l();window.matchMedia(\"(prefers-color-scheme: dark)\").addEventListener(\"change\",function(i){if(!localStorage.getItem(\"theme\")){const n=i.matches?\"dark\":\"light\";document.documentElement.setAttribute(\"data-theme\",n),l()}});"]],"assets":["/portfolio/file:///B:/dev/portfolio/dist/about/index.html","/portfolio/file:///B:/dev/portfolio/dist/blog/index.html","/portfolio/file:///B:/dev/portfolio/dist/certificates/index.html","/portfolio/file:///B:/dev/portfolio/dist/contact/index.html","/portfolio/file:///B:/dev/portfolio/dist/experience/index.html","/portfolio/file:///B:/dev/portfolio/dist/services/index.html","/portfolio/file:///B:/dev/portfolio/dist/sitemap.xml","/portfolio/file:///B:/dev/portfolio/dist/works/index.html","/portfolio/file:///B:/dev/portfolio/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"KhMop6fQj0XwrqSwcw5qdeWSMBVKGM1H/cdOm7eydno="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
