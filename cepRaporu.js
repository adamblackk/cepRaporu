const { isUtf8 } = require('buffer');
const express =require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const fs=require('fs')

const app=express()

const port=process.env.PORT || 3000

app.use(cors())

app.use(express.json())


app.get('/', (req, res) => {

  fs.readFile('Data/budget.json', 'utf-8',(err,data)=>{
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    const jsonData = JSON.parse(data)

    res.json(jsonData)

  })
  ;
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

  


  