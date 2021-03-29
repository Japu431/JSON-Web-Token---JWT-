const express = require("express");
const router = express.Router();
const auth = require("../controllers/authController");

router.get("/", auth, (req, res) => {
  if (req.user.admin) {
    res.send("Só os admins podem ver esses dados");
  } else {
    res.status(401).send("Not admin : Access Denied");
  }
});

router.get('/free', auth , (req,res) => {
    res.send('Esse dado só deve ser visto por quem está logado')
})

module.exports = router;
