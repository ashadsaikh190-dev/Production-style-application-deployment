const express= require('express');
const app= express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/health',(req,res)=>{
     res.json({
        status: "healthy",
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    });
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})