const app = require("./app")
const port = process.env.port || 3000

app.listen(port, () => 
    console.log("Aplikacja zostala odpalona na porcie 3000")
    )