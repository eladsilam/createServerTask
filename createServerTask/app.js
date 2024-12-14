const http = require("http"); // Import HTTP module
const fs = require("fs"); // File system module
const path = require("path"); // Path module

// Path to the templates folder
const dirPath = path.join(__dirname, "templates");

// Read the HTML file
const file2Send = fs.readFileSync(`${dirPath}/page.html`, "utf-8");

// Create a server
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html"); // Set response header
  res.end(file2Send); // Send HTML file to the client
});

// Listen on port 3000
server.listen(3000, () => {
  console.log("Node.js server is running at http://localhost:3000");
});
