"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./lib/mongodb.js

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const uri = process.env.MONGODB_URI;
const options = {};
let client;
let clientPromise;
if (false) {} else {
    // In production mode, it's best to not use a global variable.
    client = new external_mongodb_namespaceObject.MongoClient(uri, options);
    clientPromise = client.connect();
}
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
/* harmony default export */ const mongodb = (clientPromise);

;// CONCATENATED MODULE: ./pages/api/index.js

async function handler(req, res) {
    try {
        const client = await mongodb;
        const db = client.db("marvel-api");
        const characters = await db.collection("heroes").find({}).toArray();
        res.status(200).json({
            characters
        });
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(487));
module.exports = __webpack_exports__;

})();