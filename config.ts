/* eslint-disable prettier/prettier */
const dBType:any=process.env[`DB_TYPE`] || 'mysql';
export const config = {
    port: parseInt(process.env[`SERVER_PORT`]) || 3333,
    database: {
        type: dBType,
        host: process.env[`DB_HOST`] || 'localhost', 
        port: parseInt(process.env[`DB_PORT`]) || 3306,
        username: process.env[`DB_USER`] || 'root',
        password: process.env[`DB_PASS`] || '',
        dbName: process.env[`DB_DBNAME`] || 'bmi',
    },
    loggingMode: process.env[`LOGGING_MODE`] || 'error',
    sync: process.env[`DB_SYNC`] == 'true' ? true : false,
}
export default config;
