const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.json({data:"Hi"})
})

const port = 4000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}...`);
});