"use strict";
(() => {
var exports = {};
exports.id = 719;
exports.ids = [719];
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

/***/ 1924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6198);


async function handler(req, res) {
    const characterInfo = req.body;
    const { id , name , description , newThumbnail  } = characterInfo;
    try {
        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
        const db = client.db("marvel-api");
        const filter = {
            _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId)(id)
        };
        const update = {
            $set: {
                name,
                description,
                thumbnail: newThumbnail
            }
        };
        await db.collection("heroes").updateOne(filter, update);
        res.status(200).json("Character successfully updated");
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
var __webpack_exports__ = (__webpack_exec__(1924));
module.exports = __webpack_exports__;

})();