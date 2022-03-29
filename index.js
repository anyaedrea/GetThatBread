//code for the server!!!
const port = 3000;
const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get("/", (req, res) => {
  //these are just sample data! will replace this with the data from the database
  const jobs = [
    "UX Designer",
    "Software Engineer",
    "Web Developer",
    "Data Analyst",
  ];
  const locations = ["USA", "Canada", "Bangladesh", "Germany", "Argentina"];
  res.render("home", { jobs, locations }); //this code will pass the jobs and locations object to home.ejs
});

app.get("/search", (req, res) => {
  const { job, location } = req.query;
  //get data from database here
  res.render("search", { job, location }); //this code will pass the jobs and locations object to search.ejs
});

app.get("*", (req, res) => {
  res.send("Page Not Found!");
});
