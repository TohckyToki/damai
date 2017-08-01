const express = require('express');
const router=express.Router();

router.get('/', (req, res) => {
	console.log("sjdfkjsdk");
	res.end();
});

module.exports = router;