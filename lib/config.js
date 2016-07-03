var config = {
    database: {
        connectionString: "mongodb://localhost:27017/sillsharee",
        databaseName: "sillsharee"
    },
    debug: {
        database: {
            connectionString: "mongodb://localhost:27017/sillsharee-dev",
            databaseName: "sillsharee-dev"
        }
    }
};

module.exports = config;
