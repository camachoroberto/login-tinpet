const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    birth: {
      type: Date,
      required: true
    },
    breed: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    imageUrl: {
      type: String
    },
    gender: {
      type: String,
      required: true,
      enum: ["fêmea", "macho"]
    },
    pedigree: {
      type: Boolean,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
