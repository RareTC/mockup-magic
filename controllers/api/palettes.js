const Palette = require('../../models/palette');

module.exports = {
    generatePalette,
    savePalette, 
    getAllForUser,
}


async function getAllForUser(req, res) {
    try {
        const palettes = await Palette.find({user: req.user._id}).sort('-createdAt');
        res.json(palettes);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function generatePalette(req, res) {
    try {
    const url = `http://colormind.io/api/`;
    const data = {
        input: req.body,
        model: 'default'
    };
        const response = await fetch(url,  {
            method: 'POST',
            body: JSON.stringify(data)
        });
        const colors = await response.json();
        res.json({colors: colors.result, title: 'Generated Palette'});
    } catch (err) {
        res.status(400).json(err);
    }
}

async function savePalette(req, res) {
    try {
        const palette = await Palette.findOne({user: req.user._id, colors: req.body.colors});
        if (palette) { 
            palette.title = req.body.title;
            await palette.save();
        } else { 
            req.body.user = req.user._id;
            await Palette.create(req.body);
        }
        const palettes = await Palette.find({user: req.user._id});
        res.json(palettes);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
}
