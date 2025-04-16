const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    name: String,
    description: String,
    photosId: [String],
});

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true  },
    password: { type: String, required: true },
    collections: [collectionSchema],
});

const UserModel = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = { UserModel };
