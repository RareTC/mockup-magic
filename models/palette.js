const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paletteSchema = new Schema({
    colors: [[Number]],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  }, {
    timestamps: true,
  });

module.exports = mongoose.model('Palette', paletteSchema);