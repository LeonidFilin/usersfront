import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import cors from "cors";

// import errorMiddleware from './middlewares/error.middleware.js';

dotenv.config();

const app = express();

// CORS
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());

// routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// error handler
// app.use(errorMiddleware);

export default app;
