var fs = require('fs');
var path = require('path');
var meals = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/meals.json'), 'utf8'));

const meals_view = (req, res) => {
    res.render('meals', {title: "Travlr Getaways", meals});
};

module.exports = {
    meals: meals_view
    
};