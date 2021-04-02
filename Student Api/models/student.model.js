const mongoose=require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    name: {type: String, require: true, max:100},
    regid: {type: Number, required: true},
    age: {type: int, require: true}
}
);

module.exports = mongoose.model('Student',StudentSchema);