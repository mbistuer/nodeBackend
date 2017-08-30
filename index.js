'use strict'

const mongoose = require('mongoose');
const app = require('./app');

let port = process.env.PORT || 3600
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
.then(() => {
  console.log("la conexion se ha realizado correctamente..");
    app.listen(port, () => {
      console.log("servidor local corriendo");
    })


}).catch(err => console.log(err))
