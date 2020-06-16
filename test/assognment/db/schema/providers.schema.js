const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const providersSchema = new Schema({
  'name': { type: String, index: true },
  'specialties': { type: Array },
  'availableDates':  { type: Date },
  'score':  { type: Number },
});

module.exports = providersSchema;
