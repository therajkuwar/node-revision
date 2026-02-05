import express from 'express'

const app = express();
const PORT = 8080;

app.get('/', (req, res)=> {
    res.send('home');
})

app.listen(PORT, ()=>{
    console.log(`server listening at port ${PORT}`);
});
