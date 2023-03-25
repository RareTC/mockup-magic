const Palette = require('../../models/palette');

module.exports = {
    fetchColors,
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
        console.log(colors);
    } catch (err) {
        res.status(400).json(err);
    }
}
