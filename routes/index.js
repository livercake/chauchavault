var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ChauchaVault - Secure Litecoin Web Wallet' });
});

router.get('/contact', function(req, res) {
  res.render('contact', { title: 'ChauchaVault Contact' });
});


router.get('/about', function(req, res) {
  res.render('about', { title: 'About ChauchaVault' });
});

router.get('/about/hidden-service', function(req, res) {
  res.render('about/hidden-service', { title: 'ChauchaVault - Our Tor Hidden Service and why you need to use it' });
});

router.get('/privacy', function(req, res) {
  res.render('privacy', { title: 'ChauchaVault - Privacy Policy' });
});

module.exports = router;
