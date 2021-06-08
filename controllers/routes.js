const router = require('express').Router();

router.get('/', async (req, res) => {
res.render('posts');

});

module.exports = router;