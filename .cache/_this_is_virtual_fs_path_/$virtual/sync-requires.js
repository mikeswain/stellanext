
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/mike/stellanext/stellanext/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/home/mike/stellanext/stellanext/src/pages/index.js")),
  "component---src-pages-markdown-remark-fields-slug-js": preferDefault(require("/home/mike/stellanext/stellanext/src/pages/{MarkdownRemark.fields__slug}.js")),
  "component---src-pages-paintings-index-js": preferDefault(require("/home/mike/stellanext/stellanext/src/pages/paintings/index.js"))
}

