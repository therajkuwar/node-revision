import express from 'express'

const app = express();
const PORT = 8080;

app.use((req, res, next)=>{
    const time = new Date().toLocaleTimeString();
    console.log(`[${time}] ${req.method} request to ${req.url}`);
    next();
})

app.get('/', (req, res)=> {
    res.send('home');
})

app.listen(PORT, ()=>{
    console.log(`server listening at port ${PORT}`);
});
