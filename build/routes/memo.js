'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _memo = require('../models/memo');

var _memo2 = _interopRequireDefault(_memo);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// WRITE MEMO
router.post('/', function (req, res) {});

// MODIFY MEMO
router.put('/:id', function (req, res) {});

// DELETE MEMO
router.delete('/:id', function (req, res) {});

// GET MEMO LIST
router.get('/', function (req, res) {
  _memo2.default.find().sort({ "_id": -1 }).limit(6).exec(function (err, memos) {
    if (err) throw err;
    res.json(memos);
  });
});

exports.default = router;