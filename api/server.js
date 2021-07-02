const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 8085;
const serverURL = process.env.BASE_URL + PORT;
const mongoURL = process.env.MONGO_URL

app.listen(PORT, () => console.log(`Server us running at ${serverURL}`));

mongoose
.set('useCreateIndex', true)
.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log(`Connected to DB`));