const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const examRoutes = require('./routes/examRoutes');
const mcqRoutes = require('./routes/mcqRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/', examRoutes, mcqRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on Port:${PORT}`);
});
