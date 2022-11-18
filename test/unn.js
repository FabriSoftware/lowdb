const db = require("../src/index");
const dba = new db.Database({
    name: "strif",
    directory: "./database"
}) 