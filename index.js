const express = require("express")
const app = express()
const port = 5000


app.get("/", (req, res) => {
    return res.send("hell no")
})

app.listen(port, () => console.log(`Server is running at port ${port}`))