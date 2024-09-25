const express = require('express');
const router = express.Router();
const Info = require('../models/Info');

// GET all infos

router.get('/', async (req, res) => {
    try {
        const info = await Info.find();
        res.json(info);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post('/add', async (req, res) => {
    const info = new Info({
        sophieu: req.body.sophieu,
        ngaynhan: req.body.ngaynhan,
        loai: req.body.loai,
        model: req.body.model,
        tinhtrang: req.body.tinhtrang,
        sncu: req.body.sncu,
        snmoi: req.body.snmoi,
        trungtambaohanh: req.body.trungtambaohanh,
        ngaydi: req.body.ngaydi,
        ngayve: req.body.ngayve,

    });
    try{
        const newInfo = await info.save();
        res.status(201).json(newInfo);
    }catch(error){
        res.status(400).json({ message: error.message });
    }
    
})

module.exports = router;