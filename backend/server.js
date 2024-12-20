const app = require("./app");
const port = 3060;
const sequelize = require("./config/database");

async function startServer() {
    // try {
    //     await sequelize.authenticate();
    //     console.log("Database connection established successfully.");
    // } catch (error) {
    //     console.error("Unable to connect to the database. Proceeding without database:", error);
    // }

    // Start the server regardless of database connection status
    app.listen(port, () => {
        console.log(`Server is running on port ${port}.`);
    });
}

startServer();
