const mongoose = require('mongoose');
// Bm52OAN14D5qNAJl
const mongodbURL="mongodb+srv://saurabhmaurya1309:Bm52OAN14D5qNAJl@cluster0.swyinhl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async () => {
    try {
        await mongoose.connect(mongodbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
