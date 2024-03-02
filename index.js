const express = require('express');

const app=express();

app.get('/',(req,res)=>res.json({message:"get request"}))

app.listen(3000,()=>console.log(`listing on 3000`))