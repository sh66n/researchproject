const express = require("express");
const app = express();
const path = require("path")
const ejsMate = require("ejs-mate")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.engine("ejs", ejsMate)

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res)=>{
    res.render("home")
})
app.get("/project", (req, res)=>{
    res.render("project")
})
app.get("/project/astronaut", (req, res)=>{
    res.render("astronaut")
})
app.get("/project/micronchip", (req, res)=>{
    res.render("pcb")
})
app.get("/about", (req, res)=>{
    res.render("about")
})

app.listen("3000", ()=>{
    console.log("Serving on port 3000")
})