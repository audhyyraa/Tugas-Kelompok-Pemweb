const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

// Setup EJS
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Static folder
app.use(express.static('public'));

// Setup session
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// Dummy database for users and agendas
let users = [];
let agendas = [];

// Routes
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const agendaRoutes = require('./routes/agenda');

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/agenda', agendaRoutes);

// Landing Page
app.get('/', (req, res) => {
    res.render('index', { user: req.session.user });
});

// Start Server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
