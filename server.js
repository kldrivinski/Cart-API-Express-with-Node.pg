const express = require("express");
const cors = require("cors");
const cartRoutes = require("./routes");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/", cartRoutes);


// test endpoint http://localhost:3000
// cartRoutes.get("/", (req, res) => {
//     res.send("it lives!")
// });



// const port = 3000;

// app.listen(port, () => {
//     console.log(`Server started http://localhost:${port}`)
// })


// define the port
const DEFAULT_PORT = 3000;
// Use Heroku's PORT or default to 3000.
const port = process.env.PORT || DEFAULT_PORT;
// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));
