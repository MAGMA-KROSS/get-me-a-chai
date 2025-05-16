const mongoose = require('mongoose');
const { default: Email } = require('next-auth/providers/email');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String },
    username: { type: String, required: true, unique: true },
   
    coverpic: { type: String, default: "https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/18.gif?token-hash=iDr2Rv8l0aDGXCgF93qBpol_GMLbvNI8pScku_CFkmU%3D&token-time=1748995200" },
    profilepic: { type: String, default: "https://img.freepik.com/premium-psd/contact-icon-illustration-isolated_23-2151903357.jpg?ga=GA1.1.1972376819.1747405257&semt=ais_hybrid&w=740" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }

});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;