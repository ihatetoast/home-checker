const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    stateProvence: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    email: { type: String, lowercase: true, required: true },
    mobile: String,
    role: { type: String, required: true },
    assigned: [
      {
        type: String
      }
    ],
    deleted: Boolean,
    date: { type: Date, default: Date.now }
  },
  {
    collection: 'Persons'
  }
);

const Person = mongoose.model('Person', personSchema);
module.exports = Person;
