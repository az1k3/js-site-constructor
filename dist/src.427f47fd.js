parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Paoz":[function(require,module,exports) {
module.exports="/image.84e1acd9.jpg";
},{}],"FOZT":[function(require,module,exports) {
"use strict";function r(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<div class="row" style="'.concat(o,'">').concat(r,"</div>")}function o(r){return'<div class="col-sm">'.concat(r,"</div>")}function n(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("string"==typeof r)return r;return Object.keys(r).map(function(o){return"".concat(o,": ").concat(r[o])}).join(";")}function t(r){return'\n    <form name="'.concat(r,'">\n      <h5>').concat(r,'</h5>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="value" placeholder="value">\n      </div>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="styles" placeholder="styles">\n      </div>\n      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>\n    </form>\n    <hr />\n  ')}Object.defineProperty(exports,"__esModule",{value:!0}),exports.row=r,exports.col=o,exports.css=n,exports.block=t,exports.colSize=exports.colAlign=exports.colColors=exports.colValue=void 0;var e="\n                  Пример создания контента: <br>\n                  value = Азамат, <br>\n                  styles = color: red; text-align: center;\n";exports.colValue=e;var l="Цвет текста: <br>\n    color: red; <br>\n    color: black; <br>\n    color: blue; <br>\n    color: red; <br>\n    color: purple<br>\n    \n";exports.colColors=l;var c="Положение текста: <br>\n   text-align: center; <br>\n   text-align: left; <br> \n   text-align: right;<br>\n";exports.colAlign=c;var s="Размер текста: <br>\n  font-size: 16px; <br>\n  font-size: 22px; <br>\n  font-size: 26px; <br>\n  font-size: 32px; <br>\n";exports.colSize=s;
},{}],"dDFO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextBlock=exports.ColumnsBlock=exports.ImageBlock=exports.TitleBlock=void 0;var t=require("../utils");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){var e=i();return function(){var o,n=s(t);if(e){var r=s(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return c(this,o)}}function c(t,o){if(o&&("object"===e(o)||"function"==typeof o))return o;if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");return u(t)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,o){return e&&a(t.prototype,e),o&&a(t,o),t}var p=function(){function t(e,o){l(this,t),this.value=e,this.options=o}return f(t,[{key:"toHTML",value:function(){throw new Error("Метод toHTML должен быть выполнен")}}]),t}(),y=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.tag,n=void 0===o?"h1":o,r=e.styles;return(0,t.row)((0,t.col)("<".concat(n,">").concat(this.value,"</").concat(n,">")),(0,t.css)(r))}}]),c}();exports.TitleBlock=y;var v=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.imageStyles,n=e.alt,r=void 0===n?"":n,c=e.styles;return(0,t.row)('<img src="'.concat(this.value,'" alt="').concat(r,'" style="').concat((0,t.css)(o),'"/>'),(0,t.css)(c))}}]),c}();exports.ImageBlock=v;var h=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.value.map(t.col).join("");return(0,t.row)(e,(0,t.css)(this.options.styles))}}]),c}();exports.ColumnsBlock=h;var b=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){return(0,t.row)((0,t.col)("<p>".concat(this.value,"</p>")),(0,t.css)(this.options.styles))}}]),c}();exports.TextBlock=b;
},{"../utils":"FOZT"}],"JDu1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=o(require("./assets/image.jpg")),t=require("./classes/blocks"),l=require("./utils");function o(e){return e&&e.__esModule?e:{default:e}}var a='Developed by <a href="https://github.com/az1k3/">az1k3</a>',r=[new t.TitleBlock("Конструктор сайтов на JavaScript",{tag:"h2",styles:{background:"linear-gradient(to right, #ff0099, #493240);",color:"#fff","text-align":"center",padding:"1.5rem"}}),new t.ImageBlock(e.default,{styles:{padding:"2rem 0",display:"flex","justify-content":"center"},imageStyles:{width:"900px",height:"auto"},alt:"MirageWebs"}),new t.ColumnsBlock([l.colValue,l.colColors,l.colAlign,l.colSize],{styles:{background:"linear-gradient(to bottom, #8e2de2, #4a00e0)",padding:"2rem",color:"#fff","font-weight":"bold"}}),new t.TextBlock(a,{styles:{background:"linear-gradient(to left, #f2994a, #f2c94c)",padding:"1rem","font-weight":"bold","text-align":"center"}})];exports.model=r;
},{"./assets/image.jpg":"Paoz","./classes/blocks":"dDFO","./utils":"FOZT"}],"jExt":[function(require,module,exports) {

},{}],"V48B":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Site=void 0;var r=function(){function n(t){e(this,n),this.$el=document.querySelector(t)}return t(n,[{key:"render",value:function(e){var n=this;this.$el.innerHTML="",e.forEach(function(e){n.$el.insertAdjacentHTML("beforeend",e.toHTML())})}}]),n}();exports.Site=r;
},{}],"idI0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Sidebar=void 0;var e=require("../utils"),t=require("./blocks");function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var a=function(){function r(e,t){n(this,r),this.$el=document.querySelector(e),this.update=t,this.init()}return i(r,[{key:"init",value:function(){this.$el.insertAdjacentHTML("afterbegin",this.template),this.$el.addEventListener("submit",this.add.bind(this))}},{key:"template",get:function(){return[(0,e.block)("text"),(0,e.block)("title")].join("")}},{key:"add",value:function(e){e.preventDefault();var n=e.target.name,r=e.target.value.value,i=e.target.styles.value,a="text"===n?new t.TextBlock(r,{styles:i}):new t.TitleBlock(r,{styles:i});this.update(a),e.target.value.value="",e.target.styles.value=""}}]),r}();exports.Sidebar=a;
},{"../utils":"FOZT","./blocks":"dDFO"}],"Z1kE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=void 0;var e=require("./site"),r=require("./sidebar");function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function t(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function i(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}var o=function(){function t(e){n(this,t),this.model=e}return i(t,[{key:"init",value:function(){var n=this,t=new e.Site("#site");t.render(this.model);new r.Sidebar("#panel",function(e){n.model.push(e),t.render(n.model)})}}]),t}();exports.App=o;
},{"./site":"V48B","./sidebar":"idI0"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./model");require("./styles/main.css");var r=require("./classes/app");new r.App(e.model).init();
},{"./model":"JDu1","./styles/main.css":"jExt","./classes/app":"Z1kE"}]},{},["Focm"], null)