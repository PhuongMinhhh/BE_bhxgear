const express = require('express');
const router = express.Router();
const addressBH = require('../models/addressBH');
// get all information address

router.get('/', async (req, res) => {
    try {
        const address = await addressBH.find();
        res.json(address);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// add a new address

router.post('/add', async (req, res) => {
        const address = new addressBH({
            hang: req.body.hang,
            diachi: req.body.diachi,
            sanphamgui: req.body.sanphamgui,

        });

        try{
            const newAddress = await address.save();
            res.status(201).json(newAddress);
        }catch(error){
            res.status(400).json({ message: error.message });
        }
});

module.exports = router;