const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const paletteSchema = new Schema({
  colors: [],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, {
  timestamps: true,
});

const myPaletteSchema = new Schema ({
  myPalettes : [paletteSchema],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, 
}, {
    timestamps: true,
});

module.exports = mongoose.model('Palette', myPaletteSchema);