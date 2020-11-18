const express=require('express')
const PORT=process.env.PORT || 8080
const path=require('path')

const app=express()

app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/index.html'))
})

app.listen(PORT,()=>{
    console.log(`[Server started on PORT: ${PORT}]`)
})