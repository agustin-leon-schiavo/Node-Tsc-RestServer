import { Sequelize } from 'sequelize';


const db = new Sequelize('node', 'root', COLOCAR_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});


export default db;