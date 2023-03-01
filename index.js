import express from 'express';
import cors from 'cors';
import registerRouter from './routers/register.js';
import authRouter from './routers/auth.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(registerRouter);
app.use(authRouter); 

app.listen(5000, () => console.log('Server On'));