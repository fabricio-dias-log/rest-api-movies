import express from 'express';
import config from 'config';

const app = express();
const port = config.get<number>('port');

// JSON
app.use(express.json());

app.listen(port, async() => {
  console.log(`Server is running on port ${port}`);
});


