const Mongoose = require('mongoose').Mongoose;
const mongoose = new Mongoose();

const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);

mongoose.model('providers', require('./schema/providers.schema'));

async function connectToDb() {
    await mockgoose.prepareStorage();
    mongoose.connect('../../providers/providers.json', (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log('connect to db');
        }
    })
}

module.exports = {
  mongoose,
  models: mongoose.models,
  connectToDb
};
