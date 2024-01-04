
const express =require('express')
const cors=require('cors')
const fs=require('fs')
const mongooseFrom=require('./Mongo/mongooseData.js')


const app=express()
const port=process.env.PORT || 3000
app.use(cors())
app.use(express.json())


//get hotel by name
app.get('/hotel',async (req,res)=>{

  const name=req.query.name

  console.log(name)


  mongooseFrom.cepRaporuAllHotels.find({hotelName:name}).then((result)=>{
if(result && result.length >0){
  res.send(result)
}else{
  res.send("There is no hotel named" + " " + name)
}

   
  }).catch((err)=>{
    console.error(err)
  })

})

//get allBudget
  app.get('/allBudget', (req, res) => {

  mongooseFrom.cepRaporuTotalBudget.find().then((hotels)=>{
  res.send(hotels)
  }).catch((err)=>{
  console.error(err)
  })
  
 /*  fs.readFile('Data/budget.json', 'utf-8',(err,data)=>{
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    const jsonData = JSON.parse(data)

    res.json(jsonData)

  }) */
  
});

//According to query
/* app.get('/hotel', (req, res) => {
  const {name} = req.query;
  const {year} = req.query

  if(name==="Design"){

    fs.readFile("Data/data.json", "utf-8",(err,data)=>{
      
      if(err){

        console.error(err)
        return res.status(500).send('Internal Server Error')
      }
      const jsonData = JSON.parse(data) 
      const hotelNameToFind = name;
      const yearToFind = year;
      const monthToFind = "02";
      const hotelData = findHotelData(jsonData.hotels, hotelNameToFind, yearToFind, monthToFind);
      res.json(hotelData)

    })

  }else if(name==="Hagia"){
    
    fs.readFile("Data/data.json", "utf-8",(err,data)=>{
      
      if(err){

        console.error(err)
        return res.status(500).send('Internal Server Error')
      }
      const jsonData = JSON.parse(data)
      const hotelNameToFind = name;
      const yearToFind = year;
      const monthToFind = "02";
    
      const hotelData = findHotelData(jsonData.hotels, hotelNameToFind, yearToFind, monthToFind);
      res.json(hotelData)

    })
  }
  
});

function findHotelData(hotels, hotelName, year, month) {
  const hotel = hotels.find(hotel => hotel.hotelName === hotelName);

  if (hotel) {
    const data = hotel.data.find(entry => entry.Year === year && entry.Month === month);
    return data || null;
  }

  return null;
} */


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

  


  