const mongoose = require('mongoose');
const InfoSchema = new mongoose.Schema({
        sophieu: {type: String, required: true, unique: true},   
        ngaynghan: {type: Date},
        loai: {type: String},
        model: {type: String},
        tinhtrang: {type: String},
        sncu: {type: String},
        snmoi: {type: String},
        trungtambaohanh: {type: String},
        ngaydi: {type: Date},
        ngayve: {type: Date},


});
module.exports = mongoose.model('Info', InfoSchema);