//Create Vars
const dbs = db.adminCommand('listDatabases').databases;
let db;

//Loop databases
for (let a = 0; a < dbs.length; a++) {
    //Set database
    db = db.getSiblingDB(dbs[a].name);
    
    //Exception control
    try {
        //Set profiling level
        db.setProfilingLevel(1); //0: Disabled; 1: Only slow operations; 2: All operations;
    }
    catch {
        //Print
        print("No se puede modificar propiedad en base de datos: " + dbs[a].name);
    }
}

//Print
print("Operación finalizada forma correcta");