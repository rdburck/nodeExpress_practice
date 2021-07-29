// Here we call an instance of express by requiring it
const express = require("express");

// Here we call express as a function
const app = express();

// Defining the PORT our app will use
const PORT = 3000;

// Path is a Node module that helps us deal with the file and directory paths
const path = require("path");

// Middleware are functions native to Express that run while the server is running

// express.json() is used to automatically parse JSON files for us
app.use(express.json());

// URL encoding refers to how JavaScript interprets data sent and coded into a url: https://www.w3schools.com/tags/ref_urlencode.ASP
app.use(express.urlencoded({ extended: true }));

// App.get is telling express to get whatever is at the designated url path. In this case, we are getting our html file

//app.get("/", (req, res) => {
	//res.sendFile(path.join(__dirname, "public", "index.html"));
//});

//app.get('/whale', (req, res) => (
	//res.sendFile(path.join(__dirname, "public", "whale.html"))
//));

// Using the Express static middleware, express will serve static html files in whatever folder is being pointed to

app.use(express.static(path.join(__dirname, "public")));

// Here we are only sending text but we can format HTML inside the send function as well
app.get("/hello", (req, res) => {
	res.send("Hello World!");
});



// Importing our user's array and displaying those to our /api/users path

const {villains, heroes} = require("./data/users.js");
app.get("/api/users/villains", (req, res) => res.json(villains));
app.get("/api/users/heroes", (req, res) => res.json(heroes));

// Finally, we ask our express app to listen to a certain port where our files can be posted
app.listen(PORT, () =>
	console.log(`App is listening on http://localhost:${PORT}`)
);
