"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const jwt = require("jsonwebtoken");
function checkAuth(req, res, next) {
    try {
        console.log("in auth middleware");
        // const token = req.headers.authorization.split(" ")[1];
        const token = req.cookies.token;
        const decoded = jwt.verify(token, "secret_key");
        console.log(decoded);
        req.userData = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({
            message: "Auth failed",
        });
    }
}
exports.checkAuth = checkAuth;
