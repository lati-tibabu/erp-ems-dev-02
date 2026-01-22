const app = require('../app');
const sequelize = require('../config/database');

let dbConnected = false;

module.exports = async (req, res) => {
    if (!dbConnected) {
        try {
            await sequelize.authenticate();
            console.log('Database connected successfully.');
            dbConnected = true;
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            res.status(500).json({ error: 'Database connection failed' });
            return;
        }
    }
    return app(req, res);
};
