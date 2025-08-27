const express=require("express");
const app=express();
const path=require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

app.post("/api/echo",(req,res)=>{
    const {massage} = req.body;
    console.log("your friend:",massage);
    res.json({received:massage});
    
})

app.get("/api/echo",(req,res)=>{
    res.send("DUMESHWARI");
})

app.listen(3000, ()=>{
    console.log("server is runing on http://localhost:3000");
});
