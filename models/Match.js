const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema(
  {
    petEvaluating: { type: String, required: true },
    petEvaluated: { type: String, required: true },
    evaluation: {
      type: String,
      required: true,
      enum: ['undecided', 'accepted', 'rejected']
    }
  },
  {
    timestamps: true
  }
);

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
