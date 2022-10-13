/* eslint-disable no-console */
//createmockDb will read our mock data and write it to a separate file called db.json
//This will create our mock Db each time we run npm start.
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData")

const { books } = mockData;
const data = JSON.stringify({ books });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});

