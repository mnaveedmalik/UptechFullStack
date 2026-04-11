const express = require("express");
const dotenv = require("dotenv")
dotenv.config();
const connectDB = require("./src/config/db");
connectDB();
const app = express();
//middleware
app.use(express.json());
const PORT = process.env.PORT || 5000;


const operational = require("./src/routerFolder/router.filepath");

app.use("/", operational);



app.listen(PORT, () => {
    console.log(`Server running at:  http://localhost:${PORT}`);
});
