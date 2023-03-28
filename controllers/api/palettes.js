const Palette = require('../../models/palette');

module.exports = {
    generatePalette,
    savePalette, 
    getAllForUser
}


async function getAllForUser(req, res) {
    try {
        const myPalettes = await Palette.find({user: req.user._id}).sort('createdAt');
        // console.log(myPalettes, 'getAllForUser from backend  ')
        const paletteData = myPalettes.map(palette => ({
            colors: palette.myPalettes.map(palette => palette.colors),
            createdAt: palette.createdAt
        }));
        console.log(paletteData, "this is the console from the getAllForUser")
        res.json(paletteData);
    } catch (err) {
        res.status(400).json(err);
        console.log(err)
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
        res.json(colors.result)
        // console.log(colors.result, "from the api");
    } catch (err) {
        res.status(400).json(err);
    }
}

async function savePalette(req, res) {
    try {
        // const colors = req.body.colors;
        req.body.user = req.user._id
        // console.log(req.body, "testing save")
        const myPalette = await Palette.findOne({user: req.user._id})
        myPalette.myPalettes.push(req.body)
        await myPalette.save()
        // console.log(myPalette)
        res.json(myPalette);
    } catch(err) {
        console.log(err)
        res.status(400).json(err);
    }
}

