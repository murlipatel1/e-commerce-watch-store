const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: '1d' }, // Token expires after 1 day
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
