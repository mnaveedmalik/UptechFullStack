const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
//middleware
app.use(express.json());
const port = 3000;


const operational = require("./src/Router/routerPath");

app.use("/", operational);



app.listen(port, () => {
    console.log(`Server running at:  http://localhost:${port}`);
});
