module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5w0S");


/***/ }),

/***/ "2+G7":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ "4D8t":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _server = _interopRequireDefault(__webpack_require__("2+G7"));

var _constants = __webpack_require__("UJjI");

var _documentContext = __webpack_require__("nMq/");

var _utils = __webpack_require__("kYf9");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__("ri/Y");

var _htmlescape = __webpack_require__("fl2h");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/vercel/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: false ? undefined : ''
      }
    }, /*#__PURE__*/_react.default.createElement(Document, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && false ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), !disableRuntimeJS && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && page !== '/_error' && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return /*#__PURE__*/_react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (true) {
        return null;
      }

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH, _constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (false) {}

    const pageScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    const appScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  const startingUrl = page === '/' ? '/index' : page;
  return buildId ? `${startingUrl}.${buildId}.js` : `${startingUrl}.js`;
}

/***/ }),

/***/ "5w0S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomDocument; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sf+I");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_src_assets_image_favicon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("euVh");
/* harmony import */ var common_src_assets_image_favicon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_favicon_png__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class CustomDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps(ctx) {
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__["ServerStyleSheet"]();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(__jsx(App, props))
      });

      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);
      return _objectSpread(_objectSpread({}, initialProps), {}, {
        styles: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, initialProps.styles, sheet.getStyleElement())
      });
    } finally {
      sheet.seal();
    }
  }

  render() {
    return __jsx("html", {
      lang: "en"
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], null, __jsx("link", {
      rel: "shortcut icon",
      type: "image/x-icon",
      href: common_src_assets_image_favicon_png__WEBPACK_IMPORTED_MODULE_3___default.a
    })), __jsx("body", null, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], null), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], null)));
  }

}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "UJjI":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "euVh":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "fl2h":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nMq/":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "ri/Y":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "sf+I":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4D8t")


/***/ })

/******/ });