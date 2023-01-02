"use strict";
(() => {
var exports = {};
exports.id = 41;
exports.ids = [41];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 6198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const uri = process.env.MONGODB_URI;
const options = {};
let client;
let clientPromise;
if (false) {} else {
    // In production mode, it's best to not use a global variable.
    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);
    clientPromise = client.connect();
}
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);


/***/ }),

/***/ 6562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6198);

/**
 * @param {Object} newCharacter
 * @param {string} newCharacter.name
 * @param {string} newCharacter.description
 * @param {string} newCharacter.thumbnail
 */ async function handler(req, res) {
    const newCharacter = req.body;
    try {
        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
        const db = client.db("marvel-api");
        await db.collection("heroes").insertOne(newCharacter);
        res.status(200).json("Character successfully added");
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: err
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6562));
module.exports = __webpack_exports__;

})();