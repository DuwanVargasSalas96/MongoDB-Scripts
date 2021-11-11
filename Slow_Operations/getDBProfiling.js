//Create vars
const dbs = db.adminCommand('listDatabases').databases;
let db;

//Loop databases
for (let a = 0; a < dbs.length; a++) {
    //Set database
    db = db.getSiblingDB(dbs[a].name);
    
    //Get profile level for the database
    print(dbs[a].name + "; " + db.getProfilingStatus().was);
}