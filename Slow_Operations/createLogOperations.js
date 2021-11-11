//Create vars
const dbs = db.adminCommand('listDatabases').databases;
const logDB = db.getSiblingDB('SlowOperations');
let db;
let slowOp = [];

//Catch slow operations
for (let a = 0; a < dbs.length; a++) {
    //Set database
    db = db.getSiblingDB(dbs[a].name);

    //Get top 10 slow operations of each database
    let docs = db.getCollection('system.profile').find().sort({ millis: -1 }).limit(10).toArray();

    //Add to slowOp
    for (let b = 0; b < docs.length; b++) {
        //Push
        slowOp.push(docs[b]);
    }
}

//Insert documents
logDB.getCollection('recolected').insertMany(slowOp);