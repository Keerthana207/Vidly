import express from 'express';
import genres from './routes/genres.mjs';

const app = express();
app.use(express.json());
app.use('/api/courses',genres);


//port terminal
const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port}...`));