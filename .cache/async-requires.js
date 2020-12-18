// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("/home/sugiono/web-my-blog/blog/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-templates-tag-js": () => import("/home/sugiono/web-my-blog/blog/src/templates/tag.js" /* webpackChunkName: "component---src-templates-tag-js" */),
  "component---src-pages-index-js": () => import("/home/sugiono/web-my-blog/blog/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-post-list-js": () => import("/home/sugiono/web-my-blog/blog/src/templates/post-list.js" /* webpackChunkName: "component---src-templates-post-list-js" */),
  "component---cache-dev-404-page-js": () => import("/home/sugiono/web-my-blog/blog/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/home/sugiono/web-my-blog/blog/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/home/sugiono/web-my-blog/blog/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-archive-js": () => import("/home/sugiono/web-my-blog/blog/src/pages/archive.js" /* webpackChunkName: "component---src-pages-archive-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/sugiono/web-my-blog/blog/.cache/data.json")

