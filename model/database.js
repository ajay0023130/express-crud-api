const mongoose = require('mongoose');

const CrudSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Crud', CrudSchema);