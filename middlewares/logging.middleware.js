
export default function loggingFn (req, res, next){
    console.log(`Method: ${req.method}  ${req.url}`);
    next();
}