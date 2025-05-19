const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017/statsdb');
var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
]

const updatedStats = [
    {
        'city': 'Pacoima', 
        'zip': '91331', 
        'state': 'CA', 
        'income': '60360',
        'age': '33'
    },
    {
        'city': 'Ketchikan', 
        'zip': '99950', 
        'state': 'AK', 
        'income': '00000',
        'age': '00'
    }
]

client.connect().then(()=>{
    // console.log('Connected Successfully & Database Created!');
    // client.close();
    var dbo = client.db('statsdb');

    // dbo.createCollection('uscensus').then(function() {
    //     console.log('Collection created');
    //     client.close();
    // })

    // dbo.collection('uscensus').insertMany(updatedStats).then(function(res) {
    //     console.log('Number of documents inserted:' + res.insertedCount);
    //     client.close();
    // })

    // var query = {city: "Corona" }
    // dbo
    //   .collection("uscensus")
    //   .find(query)
    //   .toArray()
    //   .then(items => {
    //     console.log(`Successfully found ${items.length} documents`);
    //     console.log(`Zip code of Corona is ${items[0].zip}`);
    //     client.close();
    //   });

        // var query = { state: /^C/  };
        // dbo
        //   .collection("uscensus")
        //   .find(query)
        //   .project({state: 1, income: 1, city: 1})
        //   .toArray()
        //   .then(items => {
        //     items.forEach(item => { console.log(`${item.city}: $${item.income}`); });
        //     client.close();
        //   });
        
        // var myquery = { state: "AK" };
        // var newvalues = { $set: { income: "38910", age: "46" } };
        // dbo
        //   .collection("uscensus")
        //   .updateOne(myquery, newvalues)
        //   .then(function () {
        //     console.log("1 document updated");
        //     client.close();
        //   });

          var mysort = {state:  -1 }
      dbo
        .collection("uscensus")
        .find()
        .sort(mysort)
        .toArray()
        .then(items => {
          console.log(`Successfully found ${items.length} documents in descending order`);
          console.log(items);
          client.close();
        });
  

}).catch(error => console.log('Failed to connect', error));