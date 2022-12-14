require("dotenv").config();
const express = require( "express" );
const db = require("./db/connect");
const cors = require ("cors");
const employeeRoutes = require("./routes/employees.routes") //import routes

const app = express();

// conecting DB
db();

app.get("/", (request, response) => {
    response.send("Welcome to My Orginization๐๐๐");
})

// middlewares
app.use(express.json());
app.use(cors());


app.use("/api",employeeRoutes);

const PORT = process.env.PORT || 4000 ;

app.listen(PORT, () => {
    console.log( `App is runnning on PORT ${PORT}๐๐๐` );
});