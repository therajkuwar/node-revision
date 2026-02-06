import express from 'express'
import morgan from 'morgan'
import userRouter from './routes/user.routes.js'
import loggingMiddleware from './middlewares/logging.middleware.js'
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(morgan('dev')); // Automatically logs: GET /api/users 200 5ms
app.use(loggingMiddleware);
app.use('/api/users', userRouter);

app.listen(PORT, ()=>{
    console.log(`server listening at port ${PORT}`);
});
