const express = require("express");
const app = express();
const port = 3000;

// Express Configs
require("./config/express")(app);

// Routes
app.use(require("./routes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
