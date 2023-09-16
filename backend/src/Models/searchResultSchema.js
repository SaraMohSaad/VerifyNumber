const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchResultsSchema = new Schema({

    valid: {
        type: Boolean,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    local_format: {
        type: String,
        required: true,
    },
    international_format: {
        type: String,
        required: true,
    },
    country_prefix: {
        type: String,
        required: true,
    },
    country_code: {
        type: String,
        required: true,
    },
    country_name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    carrier: {
        type: String,
        required: true,
    },
    line_type: {
        type: String,
        required: true,
    },



    // valid,number,local_format,international_format,country_prefix,country_code,country_name,location,carrier,line_type,

}, { timestamps: true });



const searchResult = mongoose.model('searchResult', searchResultsSchema);
module.exports = searchResult;