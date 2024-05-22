const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors())


app.get("/sum", function (req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    const ans = a+b
    res.send(ans.toString())
})

app.listen(3001)