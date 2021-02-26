const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: true}));
app.use(session({ secret: 'notagoodsecret'}))

const requireLogin = (req, res, next) => {
  if(!req.session.user_id) {
    return res.redirect('/login')
  }
  next();
}

app.get('/', (req, res) => {
  res.send('Welcome!!!')
})

app.get('/https://competent-pasteur-415dae.netlify.app/#', (req, res) => {
  res.render('register')
})

app.post('/register', async (req, res) => {
  const { password, username }
  await user.save();
  req.session.user_id = user._id;
  res.redirect('/')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = User.findAndValidate(username, password)
    if (foundUser) {
      req.session.user_id = user._id;
      res.redirect('/secret')
    } else {
      res.redirect('/login');
    }
  })

  app.post('/logout', (req, res) => {
    req.session.user_id = null;
    req.session.destroy()
    res.redirect('/login');
  })

app.get('/secret', requireLogin, (req, res) => {
  res.render('secret')
})
app.get('/topsecret', requireLogin, (req, res) => {
  res.send("TOP SECRET!!")
})

app.listen(5500, () => {
  console.log("SERVER HAS STARTED")
})
