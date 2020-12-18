const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/sugiono/web-my-blog/blog/src/templates/blog-post.js"))),
  "component---src-templates-tag-js": hot(preferDefault(require("/home/sugiono/web-my-blog/blog/src/templates/tag.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/sugiono/web-my-blog/blog/src/pages/index.js"))),
  "component---src-templates-post-list-js": hot(preferDefault(require("/home/sugiono/web-my-blog/blog/src/templates/post-list.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/sugiono/web-my-blog/blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/sugiono/web-my-blog/blog/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/sugiono/web-my-blog/blog/src/pages/about.js"))),
  "component---src-pages-archive-js": hot(preferDefault(require("/home/sugiono/web-my-blog/blog/src/pages/archive.js")))
}

