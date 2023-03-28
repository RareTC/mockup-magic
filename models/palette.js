const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paletteSchema = new Schema({
  title: String,
  colors: [String],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Palette', paletteSchema);