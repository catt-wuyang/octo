(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{207:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=__webpack_require__(724);__webpack_require__(725);var react_1=tslib_1.__importStar(__webpack_require__(64)),classnames_1=tslib_1.__importDefault(__webpack_require__(729));exports.default=function(props){var toggles=props.toggles,defaultToggleItem=props.defaultToggleItem,onChange=props.onChange,defaultCurIndex=defaultToggleItem?toggles.findIndex((function(item){return item.value===defaultToggleItem})):0,_a=(0,react_1.useState)(defaultCurIndex),currentIndex=_a[0],setCurrentIndex=_a[1],_b=(0,react_1.useState)({}),slideStyle=_b[0],setSlideStyle=_b[1],toggleItemRef=(0,react_1.useRef)(toggles.map((function(){return react_1.default.createRef()})));return(0,react_1.useEffect)((function(){var refWidths=toggleItemRef.current.map((function(ref){return ref.offsetWidth})),refLefts=refWidths.map((function(width){return width*currentIndex}));!function setSlidePos(width,left){setSlideStyle({width:"".concat(width,"px"),left:"".concat(left,"px")})}(refWidths[currentIndex],refLefts[currentIndex])}),[currentIndex]),react_1.default.createElement("div",{className:"toggle-navigation"},toggles.map((function(item,index){var itemCls=(0,classnames_1.default)("toggle-navigation-item",{active:index===currentIndex});return react_1.default.createElement("span",{ref:function(el){return toggleItemRef.current[index]=el},className:itemCls,key:"_toggle_navigation_item_".concat(index),onClick:function(){return function toggleHandle(index){setCurrentIndex(index);var currentToggle=toggles.find((function(_,i){return i===index}));onChange&&onChange(currentToggle)}(index)}},item.text)})),react_1.default.createElement("span",{className:"toggle-navigation-slide",style:slideStyle}))}},326:function(module,exports,__webpack_require__){__webpack_require__(327),__webpack_require__(489),module.exports=__webpack_require__(490)},373:function(module,exports){},490:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(18),__webpack_require__(17),__webpack_require__(19),__webpack_require__(24),__webpack_require__(23);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(144),req=__webpack_require__(706);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(263)(module))},706:function(module,exports,__webpack_require__){var map={"./rc-component.stories.js":707};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=706},707:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(64),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(144),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(206),_packages_toggleNavigation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(207),_packages_toggleNavigation__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_packages_toggleNavigation__WEBPACK_IMPORTED_MODULE_3__),TOGGLES=[{value:"book",text:"书"},{value:"movie",text:"影"},{value:"music",text:"音"}];Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("ToggleNavigation",module).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_packages_toggleNavigation__WEBPACK_IMPORTED_MODULE_3___default.a,{toggles:TOGGLES,onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onChange")})})).add("defaultValue",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_packages_toggleNavigation__WEBPACK_IMPORTED_MODULE_3___default.a,{toggles:TOGGLES,defaultToggleItem:"movie",onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onChange")})}))}.call(this,__webpack_require__(263)(module))},725:function(module,exports,__webpack_require__){var api=__webpack_require__(726),content=__webpack_require__(727);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},727:function(module,exports,__webpack_require__){(exports=__webpack_require__(728)(!1)).push([module.i,'.toggle-navigation{display:inline-block;position:relative;z-index:1;background:rgba(0,0,0,.03);border-radius:14px}.toggle-navigation .toggle-navigation-item{display:inline-block;font-size:13px;color:rgba(0,0,0,.5);height:28px;line-height:28px;padding:0 12px;cursor:pointer}.toggle-navigation .toggle-navigation-item.active{font-weight:bold;color:rgba(0,0,0,.9)}.toggle-navigation .toggle-navigation-slide{display:inline-block;position:absolute;left:0;right:0;top:0;bottom:0;z-index:-1;height:28px;line-height:28px;background:#fff;border-radius:14px;box-sizing:border-box;transition:all .2s linear}.toggle-navigation .toggle-navigation-slide:after{content:"";display:inline-block;position:absolute;z-index:1;width:200%;height:200%;top:0;left:0;transform-origin:0 0;transform:scale(0.5, 0.5);box-sizing:border-box;border:1px solid silver;border-radius:28px}',""]),module.exports=exports}},[[326,1,2]]]);
//# sourceMappingURL=main.7d6deb3d68f510ec2601.bundle.js.map