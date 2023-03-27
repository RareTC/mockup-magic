const Palette = require('../../models/palette');

module.exports = {
    fetchColors,
    savePalette, 
    getAllForUser
}

// async function getAllForUser(req, res) {
//     try {
//         const palettes = await Palette.find({user: req.user._id}).sort('createdAt');
//         res.json(palettes);
//         console.log(palettes)
//     } catch (err){
//         res.status(400).json(err)
//     }
// }

async function getAllForUser(req, res) {
    try {
        const palettes = await Palette.find({user: req.user._id}).sort('createdAt');
        const paletteData = palettes.map((palette) => {
            return { 
                id: palette._id,
                colors: palette.colors,
                createdAt: palette.createdAt
            };
        });
        res.json(paletteData);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function fetchColors(req, res) {
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
        res.json(colors)
        //using above colors variable colors.result, result is being passed from the JSON body. 
        console.log(colors, "from the api");
    } catch (err) {
        res.status(400).json(err);
    }
}

async function savePalette(req, res) {
    try {
        console.log(req.body, "testing save")
        const colors = req.body.colors;
        const user = req.user._id;
        const palette = new Palette({
            colors: colors,
            user: user,
        });
        console.log(req.body)
        await palette.save();
        res.json(palette);
    } catch(err) {
        res.status(400).json(err);
    }
}
