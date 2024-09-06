const { HTTPError } = require("../helpers/response");
const statusCodes = require("http-status-codes");

const authorizeUserOnly = async (req, res, next) => {
    const user = req.user;
    console.log("authorizeUserOnly", user);

    if (user.role !== "admin" && user.role !== "ADMIN") {
        const error = new HTTPError("Access denied: You are not authorized!", statusCodes.UNAUTHORIZED);
        return res.status(statusCodes.UNAUTHORIZED).json(error);
    }

    next();
}

module.exports = authorizeUserOnly;
