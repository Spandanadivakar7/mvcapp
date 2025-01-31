const app = require("./app")
const env = require("dotenv");
const path = require("path")
const envpath=path.join(__dirname,'/utility/config.env');
console.log(envpath)
env.config({path:envpath})
app.listen(process.env.PORT|3000, () => {
    console.log("Server is running ")
    console.log(process.env.PORT)
    
})