const mongoose = require('mongoose');
const addressBHSchema = new mongoose.Schema({
      hang: {type:String, required:true},
      diachi: {type: String},
      sanphamgui : {type:String}


});
module.exports = mongoose.model('addressBH', addressBHSchema);