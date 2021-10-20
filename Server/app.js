const express = require("express");
const cors = require("cors");
const Router = require("./Src/routes/index");
const app = express();

/*middleware*/
app.use(express.json());
app.use(cors());

/*Configure form parameters*/
app.use(express.urlencoded({ extended: true }));

//Configure routes
Router(app);

// Configure port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
