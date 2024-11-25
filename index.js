const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const routes = require("./routes");

const app = express();
dotenv.config()
const port = process.env.APP_PORT;

app.use(cors());
app.use(routes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
