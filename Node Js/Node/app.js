const express = require("express");
const app = express();
const port = 3000;
const userData = require("./src/routes/postC.route")


app.use("/datas", userData);

app.listen(port, () => {
    console.log(`Server running http://localhost:${port}/`)
})
// app.get("/", (req, res) => {
//     res.send("Hello from Express ");
// });

// app.listen(port, () => {
//     console.log(`http://localhost:${port}`);
// });

