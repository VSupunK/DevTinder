const express = require("express");

const app = express(); // create express app

const { adminAuth } = require("./middlewares/auth");
// // this will only handle GET requests to /user
// app.get("/user/:userId/:name/:password", (req, res) => {
//   console.log(req.params);
//   res.send({
//     fistName: "John",
//     lastName: "Doe",
//   });
// });

// //this will match all the HTTP methods API calls to /test
// app.use("/test", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/admin/getAllData", (req, res) => {
//   //Logic of checking if the request is authorized
//   const token = "xyz123";
//   isAdminAuthorized = token === "xyz123";

//   if (isAdminAuthorized) {
//     res.send("All Data sent to Admin");
//   } else {
//     res.status(401).send("Unauthorized Access");
//   }
// });

// --------------------------------

// Handle auth middleware for all GET. POST,..... Requests
app.use("/admin", adminAuth);

app.get("/user", (req, res) => {
  res.send("User Data sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data sent to Admin");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user");
});

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
