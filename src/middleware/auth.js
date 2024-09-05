const jwt = require("jsonwebtoken")
const { HTTPError } = require("../helpers/response")
const statusCodes = require("http-status-codes")
const User = require("../models/user.model")

const authToken = async (req, res, next) => {
    try {
        const header = req.header("Authorization");
        if (!header) {
            const error = new HTTPError("Token is not attached", statusCodes.UNAUTHORIZED);
            return res.status(statusCodes.UNAUTHORIZED).json(error);
        }

        if (!header.startsWith("Bearer ")) {
            const error = new HTTPError("Invalid token format", statusCodes.UNAUTHORIZED);
            return res.status(statusCodes.UNAUTHORIZED).json(error);
        }

        const token = header.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);



        const user = await User.findOne({ where: { id: decoded.id } });
        if (!user) {
            const error = new HTTPError("User not found", statusCodes.UNAUTHORIZED);
            return res.status(statusCodes.UNAUTHORIZED).json(error);
        }

        if (decoded.role !== "user") {
            const error = new HTTPError("Unauthorized role", statusCodes.FORBIDDEN);
            return res.status(statusCodes.FORBIDDEN).json(error);
        }

        req.user = decoded;
        console.log("incoming user------->", decoded);
        next();
    } catch (err) {
        console.log("auth-middleware", err.message);
        const error = new HTTPError("Token is invalid or expired", statusCodes.UNAUTHORIZED);
        return res.status(statusCodes.UNAUTHORIZED).json(error);
    }
};
