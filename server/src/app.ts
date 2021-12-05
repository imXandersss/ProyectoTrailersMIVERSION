import express, {Application} from 'express';
import morgan from 'morgan';
import path from 'path';


const app: Application = express();

import authRoutes from './routes/auth';
import courseRoutes from './routes/course.router';

app.use('../uploads', express.static(path.resolve('uploads')))

//settings
app.set('port', 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/course', courseRoutes);
app.use('/api/auth', authRoutes);

export default app;