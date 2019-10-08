const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema(
  {
    petEvaluating: { type: Schema.Types.ObjectId, ref: 'Pet', required: true },
    petEvaluated: { type: Schema.Types.ObjectId, ref: 'Pet', required: true },
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
