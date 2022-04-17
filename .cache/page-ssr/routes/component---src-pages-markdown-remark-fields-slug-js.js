"use strict";
exports.id = 944;
exports.ids = [944];
exports.modules = {

/***/ 2849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

;// CONCATENATED MODULE: ./src/components/Header.module.css
// Exports
var titleBar = "Header-module--titleBar--mESso";
var Header_module_title = "Header-module--title--z8RW8";
var icon = "Header-module--icon--g01zi";
var root = "Header-module--root--trRyt";

;// CONCATENATED MODULE: ./src/components/MainMenu.module.css
// Exports
var MainMenu_module_root = "MainMenu-module--root--9vif7";

// EXTERNAL MODULE: external "/home/mike/stellanext/stellanext/node_modules/react/index.js"
var index_js_ = __webpack_require__(1349);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/components/MainMenu.js
function MainMenu({pages}){return/*#__PURE__*/index_js_default().createElement("nav",{className:MainMenu_module_root},pages&&pages.map(({slug,title},i)=>/*#__PURE__*/index_js_default().createElement("a",{key:i,href:`/page/${slug}`},title)));}
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(7533);
;// CONCATENATED MODULE: ./src/components/CategoryMenu.module.css
// Exports
var CategoryMenu_module_root = "CategoryMenu-module--root--tW26Q";

;// CONCATENATED MODULE: ./src/components/CategoryMenu.js
function CategoryMenu(){const{allMarkdownRemark:{edges}}=(0,gatsby_browser_entry.useStaticQuery)("1848092098");const categories=edges.map(({node:{frontmatter:{title},fields:{slug}}})=>({slug,title}));return/*#__PURE__*/index_js_default().createElement("nav",{className:CategoryMenu_module_root},categories&&categories.map(({slug,title},i)=>/*#__PURE__*/index_js_default().createElement("a",{key:i,href:`/paintings/?category=${slug}`},title)));}
;// CONCATENATED MODULE: ./src/components/Header.js
function Header(){const{site:{siteMetadata:{title}}}=(0,gatsby_browser_entry.useStaticQuery)("4224293195");return/*#__PURE__*/index_js_default().createElement("header",{className:root},/*#__PURE__*/index_js_default().createElement("div",{className:titleBar},/*#__PURE__*/index_js_default().createElement("img",{className:icon,src:"/img/stellaclarke.png",alt:"Stella Clarke Icon"}),/*#__PURE__*/index_js_default().createElement("span",{className:Header_module_title},title)),/*#__PURE__*/index_js_default().createElement(MainMenu,null),/*#__PURE__*/index_js_default().createElement(CategoryMenu,null));}

/***/ }),

/***/ 2899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1349);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2849);
function Layout({children}){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null),children);}

/***/ }),

/***/ 3022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1349);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2899);
function Template({data// this prop will be injected by the GraphQL query below.
}){const{markdownRemark}=data;// data.markdownRemark holds your post data
const{frontmatter,html}=markdownRemark;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"blog-post"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",null,frontmatter.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",null,frontmatter.date),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:html}})));}const query="1764157143";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-markdown-remark-fields-slug-js.js.map