var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model(
  'Global',
  new Schema({
    id: Number,
    Gvolume: Number,
    Gshots: Number,
    Gpax: Number,
    Gmodifier: Number,
    created_at: { type: Date, default: Date.now }
  })
);
