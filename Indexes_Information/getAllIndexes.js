//Create vars
const dbs = db.adminCommand('listDatabases').databases;
let db;
let colls;
let coll;
let idx;
let idxSt;

//Print head
print("Base de datos;Colección;índice;Uso;Tamaño Bytes");

//Loop for databases
for (let a = 0; a < dbs.length; a++) {
    //Set database
    db = db.getSiblingDB(dbs[a].name);

    //Get collections
    colls = db.getCollectionNames();

    //Loop for collections
    for (let b = 0; b < colls.length; b++) {
        //Exception control
        try {
            //Set collection
            coll = db.getCollection(colls[b]);

            //Get indexes
            idx = coll.getIndexes();

            //Get Indexes Status
            idxSt = coll.stats({indexDetails: true});

            //Loop for indexes
            for (let c = 0; c < idx.length; c++) {
                //Print
                print(dbs[a].name + ";" + colls[b] + ";" + idx[c].name + ";" + idxSt.indexDetails[idx[c].name].cursor["search calls"] + ";" + coll.stats().indexSizes[idx[c].name]);
            }
        }
        catch {
            //Print
            print(dbs[a].name + ";" + colls[b] + ";null;0;0");
        }
    }
}