const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const palettesCtrl = require('../../controllers/api/palettes');

// router.get('/', ensureLoggedIn, notesCtrl.index);

//POST to create note
router.post('/', palettesCtrl.fetchColors);


module.exports = router;