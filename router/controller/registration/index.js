const authModel = require("../../../db/auth")

async function Registration(req, res) {
    try {
        const { username, password } = req.body
        const dataModel = new authModel({ username, password })
        const isSave = await dataModel.save()
        if (!isSave) {
            throw new Error('something wrong')
        }
        res.status(200).json({
            message: 'registration successfully',
            status: true
        })
    } catch (error) {
        let errorMsg;
        if (error?.message.includes('E11000 duplicate key error collection')) {
            errorMsg = "User already exists"
        } else {
            errorMsg = error?.message
        }
        
        res.status(500).json({
            error: errorMsg,
            status: false
        })
    }
}

module.exports = Registration