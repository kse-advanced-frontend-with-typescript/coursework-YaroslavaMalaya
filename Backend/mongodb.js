const mongoose = require('mongoose');

const mongoConnection = 'mongodb+srv://malayayasya:0IXaiOaDOlHAPds2@cluster0.1aaogck.mongodb.net/snaporia?retryWrites=true&w=majority&appName=Cluster0&authSource=admin';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(mongoConnection);
        const db = mongoose.connection;

        db.on('error', console.error.bind(console, ' MongoDB connection error:'));
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

module.exports = { connectToDatabase };
