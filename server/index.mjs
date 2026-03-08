import express from "express";
import cors from "cors";
import Information from "./information.mjs";
import path from "path";
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);


const datas=Information;
console.log(datas);const app=express();

app.use("/images",express.static(path.join(__dirname,"images")));app.use(cors());
app.get("/:name",(req,res)=>{
    const name=req.params.name.toLowerCase();

    const sorteddata=datas.find((item)=>item.name.toLowerCase()===name);
    if(!sorteddata){
        return res.status(404).send("Movie not found")
    }
    res.json(sorteddata);
})
app.listen(5000,()=>{
    console.log("running on port 5000");
});