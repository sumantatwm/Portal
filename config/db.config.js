async function getDb(){
    const { MongoClient } = require("mongodb");
    // Connection URI
    const uri = "mongodb://localhost:27017";
    // Create a new MongoClient
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    let dbClient = await client.connect();
    // if(dbClient == null) {
    //     dbClient = await client.connect();
    // }
    return dbClient;
}

module.exports = {
    getPortalColl : async () => {
        const dbClient = await getDb();
        const database = dbClient.db("portaldb");
        const portal = database.collection("portal");
        return portal;
    }
};