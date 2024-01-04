const mongoose =require('mongoose')
const fs=require('fs')

const modelFrom=require('./model/mongoModel.js')

mongoose.connect('mongodb+srv://adamBlack:KexYuSaLs4sg9Ihe@cluster0.2cninsm.mongodb.net/cepRaporu?retryWrites=true&w=majority',{

}
)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


  const cepRaporuAllHotels = mongoose.model('hotelsbutces', modelFrom.cepRaporuSchemaAllHotels);
  const cepRaporuTotalBudget = mongoose.model('totalbutces', modelFrom.cepRaporuSchemaTotalBudget);

 cepRaporuTotalBudget.find().then((hotels)=>{
  console.log(hotels)
 }).catch((err)=>{
  console.error(err)
 })

  //---------------Read Data from file-----------------------

  /* fs.readFile('Data/hotelsBudget.json', 'utf-8',(err,data)=>{
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    const jsonData = JSON.parse(data) */
//------------------------Json dosyalarını'insertmany ile mongoya aktardım'----------------------------//

   /*  cepRaporu.insertMany(jsonData).then((result)=>{
        console.log(result)
    }).catch((err)=>{
        console.error(err)
    })


  }) */
  

module.exports={
  cepRaporuAllHotels,
  cepRaporuTotalBudget,
  db,

}


 // })