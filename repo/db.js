var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var url         = "mongodb://localhost:27017/ShipYard";

var FacilitiesSchema = new Schema({
    FacilityName    : String,
    Quantity        : Number,
    Date            : Date
});

var workMenSchema = new Schema({
    workmenType     :   String,
    Quantity        :   Number,
    Date            :   Date
});

var dbOfFacilities  = mongoose.model('Facilities',FacilitiesSchema);
var dbOfWorkMen     = mongoose.model('WorkMen',workMenSchema);

var db  = {dbOfFacilities, dbOfWorkMen};
mongoose.connect(url)
module.exports=db;