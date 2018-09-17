/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.onload = function(){\r\n    let oCan = document.getElementById(\"can\");\r\n    let oList = document.getElementById(\"list\");\r\n    let oColor_li = document.getElementById(\"Color\");\r\n    let oColor = oColor_li.getElementsByTagName(\"input\")[0];\r\n    let o_Box = document.getElementById(\"box\");\r\n    let con = oCan.getContext(\"2d\");\r\n    pencil();\r\n    color();\r\n    oList.onclick = function(e){\r\n         e = e || event;\r\n         let target = e.target || e.srcElement;\r\n         if(target.nodeName.toLowerCase() == \"li\"){\r\n             switch(target.id){\r\n                 case \"Delete\":\r\n                 con.clearRect(0,0,oCan.width,oCan.height);\r\n                 break;\r\n                 case \"Eraser\":\r\n                     eraser(e);\r\n                     break;\r\n                 case \"Pencil\":\r\n                     let oBox = document.getElementsByClassName(\"box\")[0];\r\n                     if(oBox){\r\n\r\n                         oBox.parentNode.removeChild(oBox);\r\n                     }\r\n                     pencil();\r\n                     break;\r\n                 case \"Ring\":\r\n                     oRingOrOFillRing(target.id);\r\n                     break;\r\n                 case \"fillRing\":\r\n                     oRingOrOFillRing(target.id);\r\n                     break;\r\n                 case \"Rect\":\r\n                     oRectOrFill_rect(target.id)\r\n                     break;\r\n                 case \"fill_rect\":\r\n                     oRectOrFill_rect(target.id)\r\n                     break;\r\n             }\r\n         }\r\n     };\r\n    //fill_rect or Rect\r\n    function oRectOrFill_rect (who){\r\n        o_Box.style.display = \"block\";\r\n        o_Box.onmousedown = function(e){\r\n            e = e || event;\r\n            let oRingRect = document.createElement(\"div\");\r\n            let startX = e.pageX - oCan.offsetLeft,startY = e.pageY - oCan.offsetTop;\r\n            let endX,endY;\r\n            document.onmousemove = function(e){\r\n                e = e || event;\r\n                endX = e.pageX - oCan.offsetLeft,endY = e.pageY - oCan.offsetTop;\r\n                oRingRect.style.cssText = \"position:absolute;top:\"+startY+\"px;left:\"+startX+\"px;border:1px solid red;width:\"+(endX-startX)+\"px;height:\"+(endY-startY)+\"px\";\r\n                o_Box.appendChild(oRingRect);\r\n            };\r\n            document.onmouseup = function(){\r\n                this.onmousemove = null;\r\n                this.onmouseup = null;\r\n                let X = (endX-startX),Y = (endY-startY);\r\n\r\n                if(who == \"Rect\"){\r\n                    con.beginPath();\r\n                    con.rect(startX,startY,X,Y);\r\n                    con.closePath();\r\n                    con.stroke();\r\n                    o_Box.removeChild(oRingRect);\r\n                    o_Box.style.display = \"none\";\r\n                }else if(who == \"fill_rect\"){\r\n                    con.fillStyle=oColor.value||\"#000\";\r\n                    con.beginPath();\r\n                    con.rect(startX,startY,X,Y);\r\n                    con.closePath();\r\n                    con.fill();\r\n                    o_Box.removeChild(oRingRect);\r\n                    o_Box.style.display = \"none\";\r\n                }\r\n            };\r\n\r\n        };\r\n    }\r\n    //oRing or oFillRing\r\n    function oRingOrOFillRing(who){\r\n        o_Box.style.display = \"block\";\r\n        o_Box.onmousedown = function(e){\r\n            e = e || event;\r\n            let oRingRect = document.createElement(\"div\");\r\n            let oRing = document.createElement(\"div\");\r\n            let startX = e.pageX - oCan.offsetLeft,startY = e.pageY - oCan.offsetTop;\r\n            let endX,endY;\r\n            document.onmousemove = function(e){\r\n                e = e || event;\r\n                endX = e.pageX - oCan.offsetLeft,endY = e.pageY - oCan.offsetTop;\r\n                oRingRect.style.cssText = \"position:absolute;top:\"+startY+\"px;left:\"+startX+\"px;border:1px solid red;width:\"+(endX-startX)+\"px;height:\"+(endY-startY)+\"px\";\r\n                oRing.style.cssText = \"width:\"+(endX-startX)+\"px;height:\"+(endY-startY)+\"px;position:absolute;top:0px;left:0px;border:1px solid blue;border-radius:100%;\";\r\n                o_Box.appendChild(oRingRect);\r\n                oRingRect.appendChild(oRing);\r\n            };\r\n            document.onmouseup = function(){\r\n                this.onmousemove = null;\r\n                this.onmouseup = null;\r\n                let X = startX+(endX-startX)/2,Y = startY+(endY-startY)/2,R = Math.max((endX-startX)/2,(endY-startY)/2);\r\n\r\n                if(who == \"Ring\"){\r\n                    con.beginPath();\r\n                    con.arc(X,Y,R,0,2*Math.PI,false);\r\n                    con.closePath();\r\n                    con.stroke();\r\n                    o_Box.removeChild(oRingRect);\r\n                    o_Box.style.display = \"none\";\r\n                }else if(who == \"fillRing\"){\r\n                    con.fillStyle=oColor.value||\"#000\";\r\n                    con.beginPath();\r\n                    con.arc(X,Y,R,0,2*Math.PI,false);\r\n                    con.closePath();\r\n                    con.fill();\r\n                    o_Box.removeChild(oRingRect);\r\n                    o_Box.style.display = \"none\";\r\n                }\r\n            };\r\n\r\n        };\r\n    }\r\n    //pencil\r\n    function pencil(){\r\n        oCan.onmousedown = function(e){\r\n            e = e || event;\r\n            let startX = e.pageX-oCan.offsetLeft,startY = e.pageY-oCan.offsetTop;\r\n            con.beginPath();\r\n            con.moveTo(startX,startY);\r\n\r\n            document.onmousemove = function(e){\r\n                e = e || event;\r\n                let endX = e.pageX-oCan.offsetLeft,endY = e.pageY-oCan.offsetTop;\r\n                con.lineTo(endX,endY);\r\n                // con.closePath();\r\n                con.stroke();\r\n            };\r\n            document.onmouseup = function(){\r\n                this.onmousemove = null;\r\n                this.onmouseup = null;\r\n            };\r\n        };\r\n    }\r\n    //Color\r\n    function color(){\r\n        oColor.onchange = function(){\r\n            con.strokeStyle = oColor.value;\r\n        };\r\n    }\r\n    //Eraser\r\n    function eraser(e){\r\n        let EX = e.pageX,EY = e.pageY;\r\n        let oDiv = document.createElement(\"div\");\r\n        oDiv.className = \"box\";\r\n        oDiv.style.left = EX-10+\"px\";\r\n        oDiv.style.top = EY - 10+\"px\";\r\n        document.body.appendChild(oDiv);\r\n        document.onmousemove = function(e){\r\n            e = e || event;\r\n            let endX = e.pageX,endY = e.pageY;\r\n            endX<oCan.offsetLeft||endX>oCan.offsetLeft+oCan.width||endY<oCan.offsetTop||endY>oCan.offsetTop+oCan.height?oDiv.style.display = \"none\":oDiv.style.display = \"block\";\r\n\r\n            oDiv.style.left =endX - 10 +\"px\";\r\n            oDiv.style.top =endY - 10 +\"px\";\r\n        };\r\n        oDiv.onmousedown = function(e){\r\n            e = e || event;\r\n            let startX = e.pageX,startY = e.pageY;\r\n            let This = this;\r\n            let x_= startX-oCan.offsetLeft-10,y_ = startY-oCan.offsetTop-10;\r\n            con.clearRect(x_,y_,parseInt(getStyle(This,\"width\")),parseInt(getStyle(This,\"height\")));\r\n            con.beginPath();\r\n            this.onmousemove = function(e){\r\n                e = e || event;\r\n                let endX = e.pageX,endY = e.pageY;\r\n                let x = endX-oCan.offsetLeft-10,y = endY-oCan.offsetTop-10;\r\n                oDiv.style.left = endX - 10+\"px\";\r\n                oDiv.style.top = endY - 10+\"px\";\r\n                con.clearRect(x,y,parseInt(getStyle(This,\"width\")),parseInt(getStyle(This,\"height\")));\r\n                con.beginPath();\r\n            };\r\n            document.onmouseup = function(){\r\n                oDiv.onmousemove = null;\r\n                this.onmouseup = null;\r\n            };\r\n        };\r\n    }\r\n    function getStyle(obj,styleName){\r\n        return obj.currentStyle?obj.currentStyle[styleName]:getComputedStyle(obj)[styleName];\r\n    }\r\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gICAgbGV0IG9DYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhblwiKTtcclxuICAgIGxldCBvTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFwiKTtcclxuICAgIGxldCBvQ29sb3JfbGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkNvbG9yXCIpO1xyXG4gICAgbGV0IG9Db2xvciA9IG9Db2xvcl9saS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdO1xyXG4gICAgbGV0IG9fQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3hcIik7XHJcbiAgICBsZXQgY29uID0gb0Nhbi5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBwZW5jaWwoKTtcclxuICAgIGNvbG9yKCk7XHJcbiAgICBvTGlzdC5vbmNsaWNrID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgIGUgPSBlIHx8IGV2ZW50O1xyXG4gICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xyXG4gICAgICAgICBpZih0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSBcImxpXCIpe1xyXG4gICAgICAgICAgICAgc3dpdGNoKHRhcmdldC5pZCl7XHJcbiAgICAgICAgICAgICAgICAgY2FzZSBcIkRlbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgIGNvbi5jbGVhclJlY3QoMCwwLG9DYW4ud2lkdGgsb0Nhbi5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgIGNhc2UgXCJFcmFzZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgZXJhc2VyKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICBjYXNlIFwiUGVuY2lsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgIGxldCBvQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJveFwiKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgaWYob0JveCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb0JveC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9Cb3gpO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIHBlbmNpbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICBjYXNlIFwiUmluZ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICBvUmluZ09yT0ZpbGxSaW5nKHRhcmdldC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgIGNhc2UgXCJmaWxsUmluZ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICBvUmluZ09yT0ZpbGxSaW5nKHRhcmdldC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgIGNhc2UgXCJSZWN0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgIG9SZWN0T3JGaWxsX3JlY3QodGFyZ2V0LmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICBjYXNlIFwiZmlsbF9yZWN0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgIG9SZWN0T3JGaWxsX3JlY3QodGFyZ2V0LmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgIH07XHJcbiAgICAvL2ZpbGxfcmVjdCBvciBSZWN0XHJcbiAgICBmdW5jdGlvbiBvUmVjdE9yRmlsbF9yZWN0ICh3aG8pe1xyXG4gICAgICAgIG9fQm94LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgb19Cb3gub25tb3VzZWRvd24gPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZSA9IGUgfHwgZXZlbnQ7XHJcbiAgICAgICAgICAgIGxldCBvUmluZ1JlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRYID0gZS5wYWdlWCAtIG9DYW4ub2Zmc2V0TGVmdCxzdGFydFkgPSBlLnBhZ2VZIC0gb0Nhbi5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIGxldCBlbmRYLGVuZFk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICBlID0gZSB8fCBldmVudDtcclxuICAgICAgICAgICAgICAgIGVuZFggPSBlLnBhZ2VYIC0gb0Nhbi5vZmZzZXRMZWZ0LGVuZFkgPSBlLnBhZ2VZIC0gb0Nhbi5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgICAgICBvUmluZ1JlY3Quc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7dG9wOlwiK3N0YXJ0WStcInB4O2xlZnQ6XCIrc3RhcnRYK1wicHg7Ym9yZGVyOjFweCBzb2xpZCByZWQ7d2lkdGg6XCIrKGVuZFgtc3RhcnRYKStcInB4O2hlaWdodDpcIisoZW5kWS1zdGFydFkpK1wicHhcIjtcclxuICAgICAgICAgICAgICAgIG9fQm94LmFwcGVuZENoaWxkKG9SaW5nUmVjdCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMub25tb3VzZXVwID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGxldCBYID0gKGVuZFgtc3RhcnRYKSxZID0gKGVuZFktc3RhcnRZKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih3aG8gPT0gXCJSZWN0XCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbi5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb24ucmVjdChzdGFydFgsc3RhcnRZLFgsWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uLmNsb3NlUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbi5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBvX0JveC5yZW1vdmVDaGlsZChvUmluZ1JlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9fQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHdobyA9PSBcImZpbGxfcmVjdFwiKXtcclxuICAgICAgICAgICAgICAgICAgICBjb24uZmlsbFN0eWxlPW9Db2xvci52YWx1ZXx8XCIjMDAwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbi5yZWN0KHN0YXJ0WCxzdGFydFksWCxZKTtcclxuICAgICAgICAgICAgICAgICAgICBjb24uY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBvX0JveC5yZW1vdmVDaGlsZChvUmluZ1JlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9fQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vb1Jpbmcgb3Igb0ZpbGxSaW5nXHJcbiAgICBmdW5jdGlvbiBvUmluZ09yT0ZpbGxSaW5nKHdobyl7XHJcbiAgICAgICAgb19Cb3guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBvX0JveC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBlID0gZSB8fCBldmVudDtcclxuICAgICAgICAgICAgbGV0IG9SaW5nUmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGxldCBvUmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFggPSBlLnBhZ2VYIC0gb0Nhbi5vZmZzZXRMZWZ0LHN0YXJ0WSA9IGUucGFnZVkgLSBvQ2FuLm9mZnNldFRvcDtcclxuICAgICAgICAgICAgbGV0IGVuZFgsZW5kWTtcclxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgIGUgPSBlIHx8IGV2ZW50O1xyXG4gICAgICAgICAgICAgICAgZW5kWCA9IGUucGFnZVggLSBvQ2FuLm9mZnNldExlZnQsZW5kWSA9IGUucGFnZVkgLSBvQ2FuLm9mZnNldFRvcDtcclxuICAgICAgICAgICAgICAgIG9SaW5nUmVjdC5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6XCIrc3RhcnRZK1wicHg7bGVmdDpcIitzdGFydFgrXCJweDtib3JkZXI6MXB4IHNvbGlkIHJlZDt3aWR0aDpcIisoZW5kWC1zdGFydFgpK1wicHg7aGVpZ2h0OlwiKyhlbmRZLXN0YXJ0WSkrXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgb1Jpbmcuc3R5bGUuY3NzVGV4dCA9IFwid2lkdGg6XCIrKGVuZFgtc3RhcnRYKStcInB4O2hlaWdodDpcIisoZW5kWS1zdGFydFkpK1wicHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjBweDtsZWZ0OjBweDtib3JkZXI6MXB4IHNvbGlkIGJsdWU7Ym9yZGVyLXJhZGl1czoxMDAlO1wiO1xyXG4gICAgICAgICAgICAgICAgb19Cb3guYXBwZW5kQ2hpbGQob1JpbmdSZWN0KTtcclxuICAgICAgICAgICAgICAgIG9SaW5nUmVjdC5hcHBlbmRDaGlsZChvUmluZyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMub25tb3VzZXVwID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGxldCBYID0gc3RhcnRYKyhlbmRYLXN0YXJ0WCkvMixZID0gc3RhcnRZKyhlbmRZLXN0YXJ0WSkvMixSID0gTWF0aC5tYXgoKGVuZFgtc3RhcnRYKS8yLChlbmRZLXN0YXJ0WSkvMik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYod2hvID09IFwiUmluZ1wiKXtcclxuICAgICAgICAgICAgICAgICAgICBjb24uYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uLmFyYyhYLFksUiwwLDIqTWF0aC5QSSxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uLmNsb3NlUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbi5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBvX0JveC5yZW1vdmVDaGlsZChvUmluZ1JlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9fQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHdobyA9PSBcImZpbGxSaW5nXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbi5maWxsU3R5bGU9b0NvbG9yLnZhbHVlfHxcIiMwMDBcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb24uYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uLmFyYyhYLFksUiwwLDIqTWF0aC5QSSxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uLmNsb3NlUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbi5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb19Cb3gucmVtb3ZlQ2hpbGQob1JpbmdSZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBvX0JveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvL3BlbmNpbFxyXG4gICAgZnVuY3Rpb24gcGVuY2lsKCl7XHJcbiAgICAgICAgb0Nhbi5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBlID0gZSB8fCBldmVudDtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0WCA9IGUucGFnZVgtb0Nhbi5vZmZzZXRMZWZ0LHN0YXJ0WSA9IGUucGFnZVktb0Nhbi5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIGNvbi5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY29uLm1vdmVUbyhzdGFydFgsc3RhcnRZKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICBlID0gZSB8fCBldmVudDtcclxuICAgICAgICAgICAgICAgIGxldCBlbmRYID0gZS5wYWdlWC1vQ2FuLm9mZnNldExlZnQsZW5kWSA9IGUucGFnZVktb0Nhbi5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgICAgICBjb24ubGluZVRvKGVuZFgsZW5kWSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb24uY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBjb24uc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMub25tb3VzZXVwID0gbnVsbDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy9Db2xvclxyXG4gICAgZnVuY3Rpb24gY29sb3IoKXtcclxuICAgICAgICBvQ29sb3Iub25jaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb24uc3Ryb2tlU3R5bGUgPSBvQ29sb3IudmFsdWU7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vRXJhc2VyXHJcbiAgICBmdW5jdGlvbiBlcmFzZXIoZSl7XHJcbiAgICAgICAgbGV0IEVYID0gZS5wYWdlWCxFWSA9IGUucGFnZVk7XHJcbiAgICAgICAgbGV0IG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG9EaXYuY2xhc3NOYW1lID0gXCJib3hcIjtcclxuICAgICAgICBvRGl2LnN0eWxlLmxlZnQgPSBFWC0xMCtcInB4XCI7XHJcbiAgICAgICAgb0Rpdi5zdHlsZS50b3AgPSBFWSAtIDEwK1wicHhcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG9EaXYpO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGUgPSBlIHx8IGV2ZW50O1xyXG4gICAgICAgICAgICBsZXQgZW5kWCA9IGUucGFnZVgsZW5kWSA9IGUucGFnZVk7XHJcbiAgICAgICAgICAgIGVuZFg8b0Nhbi5vZmZzZXRMZWZ0fHxlbmRYPm9DYW4ub2Zmc2V0TGVmdCtvQ2FuLndpZHRofHxlbmRZPG9DYW4ub2Zmc2V0VG9wfHxlbmRZPm9DYW4ub2Zmc2V0VG9wK29DYW4uaGVpZ2h0P29EaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOm9EaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICAgICAgICAgIG9EaXYuc3R5bGUubGVmdCA9ZW5kWCAtIDEwICtcInB4XCI7XHJcbiAgICAgICAgICAgIG9EaXYuc3R5bGUudG9wID1lbmRZIC0gMTAgK1wicHhcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9EaXYub25tb3VzZWRvd24gPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZSA9IGUgfHwgZXZlbnQ7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFggPSBlLnBhZ2VYLHN0YXJ0WSA9IGUucGFnZVk7XHJcbiAgICAgICAgICAgIGxldCBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgbGV0IHhfPSBzdGFydFgtb0Nhbi5vZmZzZXRMZWZ0LTEwLHlfID0gc3RhcnRZLW9DYW4ub2Zmc2V0VG9wLTEwO1xyXG4gICAgICAgICAgICBjb24uY2xlYXJSZWN0KHhfLHlfLHBhcnNlSW50KGdldFN0eWxlKFRoaXMsXCJ3aWR0aFwiKSkscGFyc2VJbnQoZ2V0U3R5bGUoVGhpcyxcImhlaWdodFwiKSkpO1xyXG4gICAgICAgICAgICBjb24uYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMub25tb3VzZW1vdmUgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgIGUgPSBlIHx8IGV2ZW50O1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuZFggPSBlLnBhZ2VYLGVuZFkgPSBlLnBhZ2VZO1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSBlbmRYLW9DYW4ub2Zmc2V0TGVmdC0xMCx5ID0gZW5kWS1vQ2FuLm9mZnNldFRvcC0xMDtcclxuICAgICAgICAgICAgICAgIG9EaXYuc3R5bGUubGVmdCA9IGVuZFggLSAxMCtcInB4XCI7XHJcbiAgICAgICAgICAgICAgICBvRGl2LnN0eWxlLnRvcCA9IGVuZFkgLSAxMCtcInB4XCI7XHJcbiAgICAgICAgICAgICAgICBjb24uY2xlYXJSZWN0KHgseSxwYXJzZUludChnZXRTdHlsZShUaGlzLFwid2lkdGhcIikpLHBhcnNlSW50KGdldFN0eWxlKFRoaXMsXCJoZWlnaHRcIikpKTtcclxuICAgICAgICAgICAgICAgIGNvbi5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIG9EaXYub25tb3VzZW1vdmUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbm1vdXNldXAgPSBudWxsO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRTdHlsZShvYmosc3R5bGVOYW1lKXtcclxuICAgICAgICByZXR1cm4gb2JqLmN1cnJlbnRTdHlsZT9vYmouY3VycmVudFN0eWxlW3N0eWxlTmFtZV06Z2V0Q29tcHV0ZWRTdHlsZShvYmopW3N0eWxlTmFtZV07XHJcbiAgICB9XHJcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });