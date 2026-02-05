import express from 'express'
import userRouter from './routes/user.routes.js'
const app = express();
const PORT = 8080;

app.use(express.json());


app.get('/', (req, res)=> {
    res.send('home');
});

app.use('/api/users', userRouter);

app.listen(PORT, ()=>{
    console.log(`server listening at port ${PORT}`);
});
