const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const CLIENT_ID = '10224061212-141q3j3j1jbjn6vmsshl9gl36qk4r9l6.apps.googleusercontent.com';
const JWT_KEY = 'CLAVE_PARA_FIRMAR_TOKEN';


const userModel = require('../models/userModel');

googleAuth = (req, res) => {
  console.log(req.headers, req.body, req.params);
  const { token } = req.body;

  const client = new OAuth2Client(CLIENT_ID);
  client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID
  }).then(resp => {
    console.log(resp);
    const { name, email } = resp.payload;
    console.log(name, email);
    // actualizar base de datos
    return userModel.findOneAndUpdate({ email: email }, { firstName: name }, { new: true, upsert: true });
  }).then(user => {
    console.log(user);
    // crear token de la aplicacion y retornar
    var appToken = jwt.sign({ user: user }, JWT_KEY, { expiresIn: '1h' });
    res.json(appToken);
  }).catch(err => {
    console.log(err);
    res.status(500).send(err);
  });
}

module.exports = { googleAuth };