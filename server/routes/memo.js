import express from 'express';
import Memo from '../models/memo';
import mongoose from 'mongoose';
 
const router = express.Router();
 
// WRITE MEMO
router.post('/', (req, res) => {
 
});
 
// MODIFY MEMO
router.put('/:id', (req, res) => {
 
});
 
// DELETE MEMO
router.delete('/:id', (req, res) => {
 
});
 
// GET MEMO LIST
router.get('/', (req, res) => {
    Memo.find()
    .sort({"_id": -1})
    .limit(6)
    .exec((err, memos) => {
        if(err) throw err;
        res.json(memos);
    });
});
 
export default router;