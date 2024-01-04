const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://adamBlack:KexYuSaLs4sg9Ihe@cluster0.2cninsm.mongodb.net/cepRaporu?retryWrites=true&w=majority',{

}
)
const dataContent= new mongoose.Schema({
    "Year": String,
    "Month": String,
    "Occ": String,
    "Adr": String,
    "Rev": String,
    "RN": String
})

const cepRaporuSchemaAllHotels=new mongoose.Schema({
    "hotelName": String,
        "data":[dataContent]
         
  },"hotelsbutces")

  const cepRaporuSchemaTotalBudget= new mongoose.Schema({
    "Year": String,
    "Month": String,
    "Occ": String,
    "Adr": String,
    "Rev": String,
    "RN": String
},"totalbutces")


  module.exports={
    cepRaporuSchemaTotalBudget,
    cepRaporuSchemaAllHotels

  }

