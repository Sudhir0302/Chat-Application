const express=require('express');
const app=express();
const path=require('path');
const PORT=3005;
const cors=require('cors');

app.use((cors()));

app.get('/',(req,res)=>{
    res.json({msg:"THIS IS CHAT BACKEND"});
})

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
})