# MongoDB Scripts
Los scripts de este repositorio, permiten automatizar varias operaciones sobre bases de datos MongoDB.

## Requisitos
1. Se requiere tener instalado mongosh.
2. El usuario de MongoDB, debe contar con permisos de administrador sobre todas las bases de datos.

# Indexes_Information/getAllIndexes.js
Este script permite obtener información detallada sobre todos los índices creados en la base de datos, como:

1. Nombre de base de datos.
2. Nombre de colección.
3. Nombre de índice.
4. Uso del índice.
5. Tamaño del índice en Bytes.

## Exportar a CSV
Para exportar esta información a un CSV, se recomienda usar el siguiente comando desde una terminal Unix o desde cmd en Windows:

>`mongosh mongodb://<username>:<password>@<host>:<port>/test?authSource=admin <path/Indexes_Information/getAllIndexes.js> >> <output_file.csv>`

# Slow_Operations/enableDBProfiling.js
Este script permite activar el `Database Profiling Level` de todas las bases de datos. El script habilita el 

# Slow_Operations/disableDBProfiling.js
Este script desactiva el `Database Profiling Level` de todas las bases de datos.

# Slow_Operations/getDBProfiling.js
Este script permite consultar el `Database Profiling Level` actual de todas las bases de datos. Este script imprime la siguiente información:

1. Nombre de la base de datos.
2. Estado de `Database Profiling Level` (0 = deshabilitado, 1 = habilitado).

## Exportar a CSV
Para exportar la información a un CSV, se recomienda usar el siguiente comando desde una terminal Unix o desde cmd en Windows:

>`mongosh mongodb://<username>:<password>@<host>:<port>/test?authSource=admin <path/Slow_Operations/getDBProfiling.js> >> <output_file.csv>`

# Slow_Operations/createLogOperations.js
Este script crea una nueva base de datos llamada `SlowOperations` y una colección llamada `recolected`, el cual guarda las operaciones más lentas realizadas en todas las bases de datos.

## Recomendaciones
Para optimizar las consultas en la colección `SlowOperations.recolected`, se recomienda crear una índice de ordenamiento descendente, para el campo `millis`.