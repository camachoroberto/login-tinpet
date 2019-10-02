import { Schema, model } from 'mongoose';

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    image: {
      type: String,
      default: ' https://images.media-allrecipes.com/images/75131.jpg',
    },

    gender: {
      type: String,
      required: true,
      enum: ['fêmea', 'macho'],
    },
    birth: {
      type: Date,
      required: true,
    },
    breed: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    pedigree: {
      type: Boolean,
      required: true,
    },
    color: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
  },
  {
    timestamps: true,
  },
);

export default model('Pet', petSchema);
