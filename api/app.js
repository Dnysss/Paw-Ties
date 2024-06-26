const express = require("express");
const cors = require("cors");

const app = express();

// config JSON response
app.use(express.json());

// solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

// public folder for images
app.use(express.static("public"));

// routes
const UserRoutes = require("./routes/UserRoute");
const PetRoutes = require("./routes/PetRoutes");

app.use("/users", UserRoutes);
app.use("/pets", PetRoutes);

app.listen(3000, () => {
  console.log("Server is running");
});
