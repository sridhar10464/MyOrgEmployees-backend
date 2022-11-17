require("dotenv").config();
const express = require( "express" );
const db = require("./db/connect");
const employeeRoutes = require("./routes/employees.routes") //import routes

const app = express();

// conecting DB
db()

app.get("/", (request, response) => {
    response.send("Welcome to My Orginization🌎🌎🌎");
})

// middlewares
app.use(express.json());

app.use("/api",employeeRoutes);

const PORT = process.env.PORT || 4000 ;

app.listen(PORT, () => {
    console.log( `App is runnning on PORT ${PORT}👏👏👏` );
});