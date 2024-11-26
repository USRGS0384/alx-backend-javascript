// full_server/server.js
import express from 'express';
import routes from './routes/index.js';

const app = express();
const PORT = 1245;

// Assuming the database file path is passed as an argument
const dbPath = process.argv[2] || './database.csv';
app.locals.dbPath = dbPath;

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
