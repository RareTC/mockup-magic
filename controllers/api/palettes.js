const Palette = require('../../models/palette');

module.exports = {
    generatePalette,
    savePalette, 
    getAllForUser,
    // edit,
}

// function edit(req, res) {
//     Palette.findOne({'palettes._id': req.params.id}), function(err, palette) {
//         const editPalette = palette.id(req.params.id)
//         console.log(ediPalette, ' testing this function in edit ')
//     }
// }


async function getAllForUser(req, res) {
    try {
        const palettes = await Palette.find({user: req.user._id}).sort('createdAt');
        res.json(palettes);
    } catch (err) {
        res.status(400).json(err);
    }
}



async function generatePalette(req, res) {
    try {
        const url = `http://colormind.io/api/`;
        const data = {
            model: 'default'
        };
        const response = await fetch(url,  {
            method: 'POST',
            body: JSON.stringify(data),
        });
        const colors = await response.json();
        res.json({colors: colors.result, title: 'Generated Palette'});
    } catch (err) {
        res.status(400).json(err);
    }
}
async function savePalette(req, res) {
    try {
        req.body.user = req.user._id;
        // Check for duplicate palette
        if (await Palette.exists({user: req.user._id, colors: req.body.colors})) 
            return res.json({message: 'Duplicate Palette'});
        const palette = await Palette.create(req.body);
        res.json(palette);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
}