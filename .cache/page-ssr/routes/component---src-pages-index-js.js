"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/components/CategoryMenu.module.css":
/*!************************************************!*\
  !*** ./src/components/CategoryMenu.module.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "root": () => (/* binding */ root)
/* harmony export */ });
// Exports
var root = "CategoryMenu-module--root--tW26Q";


/***/ }),

/***/ "./src/components/Header.module.css":
/*!******************************************!*\
  !*** ./src/components/Header.module.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": () => (/* binding */ icon),
/* harmony export */   "root": () => (/* binding */ root),
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "titleBar": () => (/* binding */ titleBar)
/* harmony export */ });
// Exports
var titleBar = "Header-module--titleBar--mESso";
var title = "Header-module--title--z8RW8";
var icon = "Header-module--icon--g01zi";
var root = "Header-module--root--trRyt";


/***/ }),

/***/ "./src/components/MainMenu.module.css":
/*!********************************************!*\
  !*** ./src/components/MainMenu.module.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "root": () => (/* binding */ root)
/* harmony export */ });
// Exports
var root = "MainMenu-module--root--9vif7";


/***/ }),

/***/ "./src/components/CategoryMenu.js":
/*!****************************************!*\
  !*** ./src/components/CategoryMenu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategoryMenu)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1848092098_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/1848092098.json */ "./public/page-data/sq/d/1848092098.json");
/* harmony import */ var _CategoryMenu_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryMenu.module.css */ "./src/components/CategoryMenu.module.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function CategoryMenu() {
  const {
    allMarkdownRemark: {
      edges
    }
  } = _public_page_data_sq_d_1848092098_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const categories = edges.map(({
    node: {
      frontmatter: {
        title
      },
      fields: {
        slug
      }
    }
  }) => ({
    slug,
    title
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("nav", {
    className: _CategoryMenu_module_css__WEBPACK_IMPORTED_MODULE_1__.root
  }, categories && categories.map(({
    slug,
    title
  }, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    key: i,
    href: `/paintings/?category=${slug}`
  }, title)));
}

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_4224293195_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/4224293195.json */ "./public/page-data/sq/d/4224293195.json");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.css */ "./src/components/Header.module.css");
/* harmony import */ var _MainMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainMenu */ "./src/components/MainMenu.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CategoryMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CategoryMenu */ "./src/components/CategoryMenu.js");





function Header() {
  const {
    site: {
      siteMetadata: {
        title
      }
    }
  } = _public_page_data_sq_d_4224293195_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("header", {
    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1__.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1__.titleBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", {
    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1__.icon,
    src: "/img/stellaclarke.png",
    alt: "Stella Clarke Icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1__.title
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_MainMenu__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_CategoryMenu__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");


function Layout({
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), children);
}

/***/ }),

/***/ "./src/components/MainMenu.js":
/*!************************************!*\
  !*** ./src/components/MainMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainMenu)
/* harmony export */ });
/* harmony import */ var _MainMenu_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainMenu.module.css */ "./src/components/MainMenu.module.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function MainMenu({
  pages
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("nav", {
    className: _MainMenu_module_css__WEBPACK_IMPORTED_MODULE_0__.root
  }, pages && pages.map(({
    slug,
    title
  }, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    key: i,
    href: `/page/${slug}`
  }, title)));
}

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");




function HomePage({
  data: {
    allMarkdownRemark: {
      edges
    }
  }
}) {
  const categories = edges.map(({
    node: {
      frontmatter: {
        title
      },
      fields: {
        slug
      }
    }
  }) => ({
    slug,
    title
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", null, (categories || []).map(({
    slug,
    title
  }, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: `/paintings?category=${slug}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", null, title))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);
const query = "3906501337";

/***/ }),

/***/ "./public/page-data/sq/d/1848092098.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1848092098.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"title":"#girls #women #retro #vintage #sixties #high-coloured"},"fields":{"slug":"-girls-women-retro-vintage-sixties-high-coloured"}}},{"node":{"frontmatter":{"title":"beach"},"fields":{"slug":"beach"}}},{"node":{"frontmatter":{"title":"Archive"},"fields":{"slug":"archive"}}},{"node":{"frontmatter":{"title":"boy"},"fields":{"slug":"boy"}}},{"node":{"frontmatter":{"title":"funfair"},"fields":{"slug":"funfair"}}},{"node":{"frontmatter":{"title":"Ocean, Island, Shore"},"fields":{"slug":"ocean-island-shore"}}},{"node":{"frontmatter":{"title":"landscape seascape australian art"},"fields":{"slug":"landscape-seascape-australian-art"}}},{"node":{"frontmatter":{"title":"retro"},"fields":{"slug":"retro"}}},{"node":{"frontmatter":{"title":"The Art of Nostalgia"},"fields":{"slug":"the-art-of-nostalgia"}}},{"node":{"frontmatter":{"title":"oil painting"},"fields":{"slug":"oil-painting"}}},{"node":{"frontmatter":{"title":"Water and Gold"},"fields":{"slug":"water-and-gold"}}},{"node":{"frontmatter":{"title":"vintage"},"fields":{"slug":"vintage"}}}]}}}');

/***/ }),

/***/ "./public/page-data/sq/d/4224293195.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/4224293195.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Stella Clarke"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map