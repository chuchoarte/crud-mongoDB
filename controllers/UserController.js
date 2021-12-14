const User = require('../models/User');
const {response} = require("express");

const create = async (req, res = response) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({
            ok: true,
            msg: 'The record was added successfully.',
        });
    } catch (e) {
        console.log(e)
        res.status(500).json({
            ok: false,
            msg: e
        });
    }
};

const show = (req, res) => {
    res.json({
        ok: true,
        msg: 'show'
    });
};

const update = (req, res) => {
    res.json({
        ok: true,
        msg: 'edit'
    });
};

const remove = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete'
    });
};

module.exports = {
    create,
    show,
    update,
    remove
}
