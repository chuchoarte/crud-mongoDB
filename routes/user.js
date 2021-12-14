/*
    host + /api/users
*/
const {Router} = require('express');
const {create, show, update, remove} = require("../controllers/UserController");
const router = Router();

router.post('/create', create);

router.get('/:id', show);

router.put('/:id', update);

router.delete('/:id', remove);

module.exports = router;
