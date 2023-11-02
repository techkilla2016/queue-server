const authModel = require("../../../db/auth");
const jwt = require('jsonwebtoken');
async function userAuth(req, res) {
    try {
        const { username, password } = req.body;

        // Find user
        const user = await authModel.findOne({ username, password });
        if (!user) {
            throw new Error('User not found or incorrect credentials');
        }

        // Generate and update token
        const token = await jwt.sign({ auth: user._id }, process.env.SECRET_KEY);
        // Use updateOne with the proper filter and update
        const updateResult = await authModel.updateOne({ _id: user._id }, { token });

        if (!updateResult.modifiedCount) {
            throw new Error('Token update failed');
        }

        res.status(200).json({
            token,
            status: true
        });
    } catch (error) {
        res.status(409).json({
            error: error.message,
            status: false
        });
    }
}

module.exports = userAuth;
