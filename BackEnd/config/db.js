const mongoose = require("mongoose");
const User = require("../models/User"); // Import the User model

const MONGO_URI =
  "mongodb+srv://pandeynityanand4840:8oqp96TPu15y1zjI@cluster0.yhrftzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 ";

const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Connection error:', err));
    // Create the empty User collection
    await User.createCollection();
    console.log("User collection created successfully");
  } catch (err) {
    console.error("MongoDB Connection Failed:", err.message);
    process.exit(1); // Exit the process with failure
  }
};

connectDB();

module.exports = connectDB;

// pandeynityanand4840;
//8oqp96TPu15y1zjI

// APP PSWRD = eqbl hjvb rmhk bhre
