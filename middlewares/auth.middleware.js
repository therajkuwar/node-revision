
export const authCheck = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if(!authHeader) {
        return res.status(401).json({error: "Unauthorized: No Token Provided"});
    }

    console.log("Auth header detected. proceeding...");
    next();
}