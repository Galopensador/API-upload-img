const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

async function main(){
    await mongoose.connect
    // Link do mongoDB
    (`mongodb+srv://${dbUser}:${dbPassword}@apiuc13.hnbpm.mongodb.net/?retryWrites=true&w=majority&appName=APIUC13`);
    console.log("Conectado ao banco de dados");
}

main().catch((err) => console.log(err));

module.exports = main;