const bcrypt = require('bcryptjs')
const User = require("../models/User");
const jwt = require("jsonwebtoken");


const userController = {
  register: async function (req, res) {

    const selectedUser = await User.findOne({ email: req.body.email})

    if (selectedUser) {
      return res.status(400).send('Email já existente')
    }


    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  login: async function (req, res) {
  
    const selectedUser = await User.findOne({ email: req.body.email})

    if (!selectedUser) {
      return res.status(400).send('Email ou Senha Incorretas')
    }

    const passwordAndUserMatch = bcrypt.compareSync(req.body.password);
    
    if (!passwordAndUserMatch) {
      return res.status(400).send('Email ou Senha Incorretas')
    }

    const token = jwt.sign({ _id: selectedUser._id }, process.env.TOKEN_SECRET);

    res.header('authoriztion-token', token);
    res.send('Usuario logado')

  },
};

module.exports = userController;
