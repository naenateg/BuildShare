const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

//Configuration
//Tell express to use EJS to render templates, and where to find them
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middleware
//Serve anything in /public directly. A request for /css/style.css
app.use(express.static(path.join(__dirname, 'public')));

//Temp fake data (for simulation)
const builds = [
    {
        id: 1,
        title: 'IsThatASupra',
        owner: 'Placeholder Name 1',
        car: '1998 Toyota Supra Mk4',
        description: 'Bone stock mk4',
        mods: ['coilovers', 'cold air intake', '1st stage tune', 'lightweight forged rims'],
    },
    {
        id: 2,
        title: 'Daily Driver WRX',
        owner: 'boostedbrian',
        car: '2015 Subaru WRX',
        description: 'A practical daily with some tasteful power upgrades.',
        mods: ['Cold air intake', 'Turbo-back exhaust', 'ECU tune'],
    },
    {
        id: 2,
        title: 'Daily Driver Camry',
        owner: 'boostedbrian',
        car: '2015 Subaru WRX',
        description: 'A practical daily with some tasteful power upgrades.',
        mods: ['Cold air intake', 'Turbo-back exhaust', 'ECU tune'],
    }
];


//Routes
app.get('/home', (req, res) => {
    res.render('home', {title: 'Home'});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Car Builds!</h1>');

});

app.listen(PORT, () => {
console.log('Server running at https://localhost:${PORT}');
});