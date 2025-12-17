import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './db/db.js';

dotenv.config({
    path: './.env'
});


export const port = process.env.PORT || 3000;
console.log("Mongo URI:", process.env.MONGO_URI);

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
