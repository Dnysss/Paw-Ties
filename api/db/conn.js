const mongoose = require("mongoose");
require("dotenv").config({ path: ".env.local" });

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

async function main() {
  await mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@pawties.hrosoop.mongodb.net/?retryWrites=true&w=majority&appName=pawties`
  );
  console.log("Conectado ao MongoDB!");
}

main().catch((err) => console.log("Error connecting to MongoDB: ", err));

module.exports = mongoose;
