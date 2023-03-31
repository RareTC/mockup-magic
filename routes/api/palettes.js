const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const palettesCtrl = require('../../controllers/api/palettes');

//POST to create note
router.post('/', palettesCtrl.generatePalette);

router.get('/category', palettesCtrl.fetchCategories);

router.post('/save', ensureLoggedIn, palettesCtrl.savePalette);

router.get('/saved', ensureLoggedIn, palettesCtrl.getAllForUser);


module.exports = router;