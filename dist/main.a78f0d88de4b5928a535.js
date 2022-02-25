/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style.css?");

/***/ }),

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst header_1 = __webpack_require__(/*! ./components/header */ \"./components/header.ts\");\r\nconst link_1 = __webpack_require__(/*! ./components/link */ \"./components/link.ts\");\r\nconst logo_1 = __webpack_require__(/*! ./components/logo */ \"./components/logo.ts\");\r\nconst main_1 = __webpack_require__(/*! ./components/main */ \"./components/main.ts\");\r\nconst menu_1 = __webpack_require__(/*! ./components/menu */ \"./components/menu.ts\");\r\nclass App {\r\n    constructor(rootElement) {\r\n        this.rootElement = rootElement;\r\n        this.header = new header_1.default();\r\n        this.logo = new logo_1.default();\r\n        this.menu = new menu_1.default();\r\n        this.links = [];\r\n        this.links.push(new link_1.default('About Game'));\r\n        this.links.push(new link_1.default('Best Score'));\r\n        this.links.push(new link_1.default('Game settings'));\r\n        this.links[0].setHREF('#form');\r\n        this.links[1].setHREF('#game');\r\n        this.links[2].setHREF('#about');\r\n        this.main = new main_1.default();\r\n        this.rootElement.appendChild(this.header.element);\r\n        this.header.element.appendChild(this.logo.element);\r\n        this.header.element.appendChild(this.menu.element);\r\n        this.links.forEach((link) => {\r\n            this.menu.element.appendChild(link.element);\r\n        });\r\n        this.links.forEach((link) => {\r\n            link.element.addEventListener('click', () => {\r\n                const address = link.element.getAttribute('href');\r\n                this.main.changeInsight((address === null || address === void 0 ? void 0 : address.slice(1)) || 'default');\r\n            });\r\n        });\r\n        this.rootElement.appendChild(this.main.element);\r\n    }\r\n}\r\nexports.default = App;\r\n\n\n//# sourceURL=webpack:///./app.ts?");

/***/ }),

/***/ "./components/base-component.ts":
/*!**************************************!*\
  !*** ./components/base-component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass BaseComponent {\r\n    constructor(tag = 'div', styles = []) {\r\n        this.element = document.createElement(tag);\r\n        this.element.classList.add(...styles);\r\n    }\r\n}\r\nexports.default = BaseComponent;\r\n\n\n//# sourceURL=webpack:///./components/base-component.ts?");

/***/ }),

/***/ "./components/button.ts":
/*!******************************!*\
  !*** ./components/button.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass Button {\r\n    constructor(styles = [], type, content) {\r\n        this.element = document.createElement('button');\r\n        this.element.classList.add(...styles);\r\n        this.element.type = type;\r\n        this.element.textContent = content;\r\n    }\r\n}\r\nexports.default = Button;\r\n\n\n//# sourceURL=webpack:///./components/button.ts?");

/***/ }),

/***/ "./components/card.ts":
/*!****************************!*\
  !*** ./components/card.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst base_component_1 = __webpack_require__(/*! ./base-component */ \"./components/base-component.ts\");\r\nclass Card extends base_component_1.default {\r\n    constructor(img) {\r\n        super('div', ['card']);\r\n        this.isFlipped = false;\r\n        this.img = img;\r\n        this.element.innerHTML = `\r\n            <div class=\"card__front\" style=\"background-image: url(${img})\"></div>\r\n            <div class=\"card__back\"></div>\r\n    `;\r\n    }\r\n    flipFront() {\r\n        this.isFlipped = true;\r\n        return this.flip();\r\n    }\r\n    flipBack() {\r\n        this.isFlipped = false;\r\n        return this.flip(true);\r\n    }\r\n    flip(isFront = false) {\r\n        return new Promise((resolve) => {\r\n            this.element.classList.toggle('flip', !isFront);\r\n            this.element.addEventListener('transitionend', () => resolve(), {\r\n                once: true,\r\n            });\r\n        });\r\n    }\r\n}\r\nexports.default = Card;\r\n\n\n//# sourceURL=webpack:///./components/card.ts?");

/***/ }),

/***/ "./components/cards-container.ts":
/*!***************************************!*\
  !*** ./components/cards-container.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst base_component_1 = __webpack_require__(/*! ./base-component */ \"./components/base-component.ts\");\r\nclass CardsContainer extends base_component_1.default {\r\n    constructor() {\r\n        super('div', ['cards-container']);\r\n        this.cards = [];\r\n    }\r\n    clear() {\r\n        this.cards = [];\r\n        this.element.innerHTML = '';\r\n    }\r\n    addCards(cards) {\r\n        this.cards = cards;\r\n        this.cards.forEach((card) => {\r\n            this.element.appendChild(card.element);\r\n        });\r\n    }\r\n}\r\nexports.default = CardsContainer;\r\n\n\n//# sourceURL=webpack:///./components/cards-container.ts?");

/***/ }),

/***/ "./components/database.ts":
/*!********************************!*\
  !*** ./components/database.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst iDB = window.indexedDB;\r\nclass DataBase {\r\n    init(dbName, version) {\r\n        const openRequest = iDB.open(dbName, version);\r\n        openRequest.onupgradeneeded = () => {\r\n            const database = openRequest.result;\r\n            const store = database.createObjectStore('users', { keyPath: 'id', autoIncrement: true });\r\n            store.createIndex('name', 'name');\r\n            store.createIndex('surname', 'surname');\r\n            store.createIndex('email', 'email');\r\n            this.db = database;\r\n        };\r\n        openRequest.onsuccess = () => {\r\n            this.db = openRequest.result;\r\n        };\r\n    }\r\n    write(name, surname, email, score) {\r\n        const transaction = this.db.transaction('users', 'readwrite');\r\n        const store = transaction.objectStore('users');\r\n        const result = store.put({\r\n            name, surname, email, score,\r\n        });\r\n        result.onsuccess = () => {\r\n            console.log('complete', result.result);\r\n        };\r\n        result.onerror = () => {\r\n            console.log('error', result.error);\r\n        };\r\n    }\r\n    readAll() {\r\n        const transaction = this.db.transaction('users', 'readonly');\r\n        const store = transaction.objectStore('users');\r\n        const result = store.getAll();\r\n        result.onsuccess = () => {\r\n            console.log(result.result);\r\n        };\r\n    }\r\n    readFiltered() {\r\n        const transaction = this.db.transaction('users', 'readonly');\r\n        const store = transaction.objectStore('users');\r\n        const result = store.index('email').openCursor(null, 'prev');\r\n        const resData = [];\r\n        result.onsuccess = () => {\r\n            const cursor = result.result;\r\n            if (cursor) {\r\n                console.log(cursor.value);\r\n                if (cursor.value.email[0] === 'y') {\r\n                    resData.push(cursor.value);\r\n                }\r\n                cursor.continue();\r\n            }\r\n        };\r\n        transaction.oncomplete = () => {\r\n            console.log(resData);\r\n        };\r\n    }\r\n}\r\nexports.default = DataBase;\r\n\n\n//# sourceURL=webpack:///./components/database.ts?");

/***/ }),

/***/ "./components/form.ts":
/*!****************************!*\
  !*** ./components/form.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst base_component_1 = __webpack_require__(/*! ./base-component */ \"./components/base-component.ts\");\r\nconst button_1 = __webpack_require__(/*! ./button */ \"./components/button.ts\");\r\nconst input_1 = __webpack_require__(/*! ./input */ \"./components/input.ts\");\r\nconst database_1 = __webpack_require__(/*! ./database */ \"./components/database.ts\");\r\nclass Form extends base_component_1.default {\r\n    constructor() {\r\n        super('form', ['form']);\r\n        this.inputs = [];\r\n        this.inputs.push(new input_1.default(['input'], 'name', 'text'));\r\n        this.inputs.push(new input_1.default(['input'], 'surname', 'text'));\r\n        this.inputs.push(new input_1.default(['input'], 'email', 'email'));\r\n        this.inputs.forEach((input) => {\r\n            this.element.append(input.element);\r\n        });\r\n        this.button = new button_1.default(['button'], 'submit', 'Submit');\r\n        this.element.append(this.button.element);\r\n        this.db = new database_1.default();\r\n        this.db.init('gameDB');\r\n        this.button.element.addEventListener('click', () => {\r\n            this.inputs.forEach((input) => {\r\n                console.log(input.getValue());\r\n            });\r\n        });\r\n    }\r\n}\r\nexports.default = Form;\r\n\n\n//# sourceURL=webpack:///./components/form.ts?");

/***/ }),

/***/ "./components/game-field.ts":
/*!**********************************!*\
  !*** ./components/game-field.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst base_component_1 = __webpack_require__(/*! ./base-component */ \"./components/base-component.ts\");\r\nconst card_1 = __webpack_require__(/*! ./card */ \"./components/card.ts\");\r\nconst cards_container_1 = __webpack_require__(/*! ./cards-container */ \"./components/cards-container.ts\");\r\nconst stop_watch_1 = __webpack_require__(/*! ./stop-watch */ \"./components/stop-watch.ts\");\r\nclass GameField extends base_component_1.default {\r\n    constructor(images) {\r\n        super('div', ['game']);\r\n        this.stopWatch = new stop_watch_1.default();\r\n        this.cardsContainer = new cards_container_1.default();\r\n        this.cards = images.map((url) => new card_1.default(url));\r\n        this.element.appendChild(this.stopWatch.element);\r\n        this.element.appendChild(this.cardsContainer.element);\r\n        this.cardsContainer.addCards(this.cards);\r\n        this.startGame();\r\n    }\r\n    startGame() {\r\n        this.preGame();\r\n        this.cards.forEach((card) => {\r\n            card.element.addEventListener('click', () => this.cardHandler(card));\r\n        });\r\n    }\r\n    cardHandler(card) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (card.isFlipped)\r\n                return;\r\n            if (!this.activeCard) {\r\n                this.activeCard = card;\r\n                card.flipFront();\r\n                return;\r\n            }\r\n            yield card.flipFront();\r\n            if (this.activeCard.img !== card.img) {\r\n                this.activeCard.flipBack();\r\n                card.flipBack();\r\n            }\r\n            this.activeCard = undefined;\r\n            if (this.checkFlipped())\r\n                this.stopWatch.stopStopWatch();\r\n        });\r\n    }\r\n    checkFlipped() {\r\n        let result = true;\r\n        this.cards.forEach((card) => {\r\n            if (!card.element.classList.contains('flip'))\r\n                result = false;\r\n        });\r\n        return result;\r\n    }\r\n    preGame() {\r\n        this.cards.forEach((card) => {\r\n            card.flipFront();\r\n        });\r\n        const pause = setTimeout(() => {\r\n            this.cards.forEach((card) => {\r\n                this.stopWatch.startStopWatch();\r\n                card.flipBack();\r\n            });\r\n        }, 10000);\r\n    }\r\n}\r\nexports.default = GameField;\r\n\n\n//# sourceURL=webpack:///./components/game-field.ts?");

/***/ }),

/***/ "./components/header.ts":
/*!******************************!*\
  !*** ./components/header.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst base_component_1 = __webpack_require__(/*! ./base-component */ \"./components/base-component.ts\");\r\nclass Header extends base_component_1.default {\r\n    constructor() {\r\n        super('header', ['header']);\r\n    }\r\n}\r\nexports.default = Header;\r\n\n\n//# sourceURL=webpack:///./components/header.ts?");

/***/ }),

/***/ "./components/input.ts":
/*!*****************************!*\
  !*** ./components/input.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass Input {\r\n    constructor(styles = [], id, type) {\r\n        this.element = document.createElement('input');\r\n        this.element.classList.add(...styles);\r\n        this.element.type = type;\r\n        this.element.id = id;\r\n        this.element.placeholder = id.toUpperCase();\r\n    }\r\n    getValue() {\r\n        return this.element.value;\r\n    }\r\n}\r\nexports.default = Input;\r\n\n\n//# sourceURL=webpack:///./components/input.ts?");

/***/ }),

/***/ "./components/link.ts":
/*!****************************!*\
  !*** ./components/link.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst base_component_1 = __webpack_require__(/*! ./base-component */ \"./components/base-component.ts\");\r\nclass Link extends base_component_1.default {\r\n    constructor(content) {\r\n        super('a', ['link']);\r\n        this.element = this.element;\r\n        this.element.innerHTML = content;\r\n    }\r\n    setHREF(address) {\r\n        this.element.setAttribute('href', address);\r\n    }\r\n}\r\nexports.default = Link;\r\n\n\n//# sourceURL=webpack:///./components/link.ts?");

/***/ }),

/***/ "./components/logo.ts":
/*!****************************!*\
  !*** ./components/logo.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst base_component_1 = __webpack_require__(/*! ./base-component */ \"./components/base-component.ts\");\r\nclass Logo extends base_component_1.default {\r\n    constructor() {\r\n        super('div', ['logo']);\r\n    }\r\n}\r\nexports.default = Logo;\r\n\n\n//# sourceURL=webpack:///./components/logo.ts?");

/***/ }),

/***/ "./components/main.ts":
/*!****************************!*\
  !*** ./components/main.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst base_component_1 = __webpack_require__(/*! ./base-component */ \"./components/base-component.ts\");\r\nconst form_1 = __webpack_require__(/*! ./form */ \"./components/form.ts\");\r\nconst router_1 = __webpack_require__(/*! ./router */ \"./components/router.ts\");\r\nclass Main extends base_component_1.default {\r\n    constructor() {\r\n        super('main', ['main']);\r\n        this.router = new router_1.default();\r\n        this.element.appendChild(this.router.getRout('default').element);\r\n    }\r\n    changeInsight(address) {\r\n        this.element.innerHTML = '';\r\n        this.router = new router_1.default();\r\n        const element2 = this.router.getRout(address).element;\r\n        console.log(element2);\r\n        if (address === 'form') {\r\n            if (new form_1.default() instanceof form_1.default) {\r\n                console.log('yes');\r\n            }\r\n        }\r\n        this.element.appendChild(element2);\r\n    }\r\n}\r\nexports.default = Main;\r\n\n\n//# sourceURL=webpack:///./components/main.ts?");

/***/ }),

/***/ "./components/menu.ts":
/*!****************************!*\
  !*** ./components/menu.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst base_component_1 = __webpack_require__(/*! ./base-component */ \"./components/base-component.ts\");\r\nclass Menu extends base_component_1.default {\r\n    constructor() {\r\n        super('div', ['menu']);\r\n    }\r\n}\r\nexports.default = Menu;\r\n\n\n//# sourceURL=webpack:///./components/menu.ts?");

/***/ }),

/***/ "./components/router.ts":
/*!******************************!*\
  !*** ./components/router.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n/* eslint-disable @typescript-eslint/no-unused-expressions */\r\nconst base_component_1 = __webpack_require__(/*! ./base-component */ \"./components/base-component.ts\");\r\nconst form_1 = __webpack_require__(/*! ./form */ \"./components/form.ts\");\r\nconst game_field_1 = __webpack_require__(/*! ./game-field */ \"./components/game-field.ts\");\r\nclass Router {\r\n    constructor() {\r\n        this.gameField = new game_field_1.default(['./assets/gallery_3.png', './assets/gallery_3.png', './assets/gallery_4.png', './assets/gallery_4.png', './assets/card-front.png', './assets/card-front.png', './assets/card-front.png', './assets/card-front.png']);\r\n        this.default = new base_component_1.default('div', ['helper']);\r\n        this.base = new base_component_1.default('div', ['helper2']);\r\n        this.form = new form_1.default();\r\n    }\r\n    getRout(name) {\r\n        const defaultRout = {\r\n            name: 'default',\r\n            content: this.default,\r\n        };\r\n        const routers = [{\r\n                name: 'game',\r\n                content: new game_field_1.default(['./assets/gallery_3.png', './assets/gallery_3.png', './assets/gallery_4.png', './assets/gallery_4.png', './assets/card-front.png', './assets/card-front.png', './assets/card-front.png', './assets/card-front.png']),\r\n            },\r\n            {\r\n                name: 'form',\r\n                content: new form_1.default(),\r\n            },\r\n        ];\r\n        // eslint-disable-next-line array-callback-return\r\n        let result;\r\n        for (let i = 0; i < routers.length; i += 1) {\r\n            if (routers[i].name === name) {\r\n                result = routers[i].content;\r\n                break;\r\n            }\r\n        }\r\n        return result || defaultRout.content;\r\n    }\r\n}\r\nexports.default = Router;\r\n\n\n//# sourceURL=webpack:///./components/router.ts?");

/***/ }),

/***/ "./components/stop-watch.ts":
/*!**********************************!*\
  !*** ./components/stop-watch.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst base_component_1 = __webpack_require__(/*! ./base-component */ \"./components/base-component.ts\");\r\nclass StopWatch extends base_component_1.default {\r\n    constructor() {\r\n        super('div', ['stop-watch']);\r\n        this.seconds = 0;\r\n        this.minutes = 0;\r\n        this.element.innerHTML = '00:00';\r\n        this.stopTime = true;\r\n    }\r\n    startStopWatch() {\r\n        if (this.stopTime === true) {\r\n            this.stopTime = false;\r\n            this.counter();\r\n        }\r\n    }\r\n    stopStopWatch() {\r\n        if (this.stopTime === false) {\r\n            this.stopTime = true;\r\n        }\r\n    }\r\n    refreshStopWatch() {\r\n        this.seconds = 0;\r\n        this.minutes = 0;\r\n        this.element.innerHTML = '00:00';\r\n    }\r\n    counter() {\r\n        const timer = setInterval(() => {\r\n            if (this.stopTime !== false) {\r\n                clearInterval(timer);\r\n                return;\r\n            }\r\n            let sec;\r\n            let min;\r\n            this.seconds += 1;\r\n            if (this.seconds === 60) {\r\n                this.minutes += 1;\r\n                this.seconds = 0;\r\n            }\r\n            if (this.seconds < 10 || this.seconds === 0) {\r\n                sec = `0${this.seconds.toString()}`;\r\n            }\r\n            else\r\n                sec = this.seconds.toString();\r\n            if (this.minutes < 10 || this.minutes === 0) {\r\n                min = `0${this.minutes.toString()}`;\r\n            }\r\n            else\r\n                min = this.minutes.toString();\r\n            this.element.innerHTML = `${min}:${sec}`;\r\n        }, 1000);\r\n    }\r\n}\r\nexports.default = StopWatch;\r\n\n\n//# sourceURL=webpack:///./components/stop-watch.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__webpack_require__(/*! ./style.css */ \"./style.css\");\r\nconst app_1 = __webpack_require__(/*! ./app */ \"./app.ts\");\r\nwindow.onload = () => {\r\n    // eslint-disable-next-line no-new\r\n    new app_1.default(document.body);\r\n};\r\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;