import mysql from 'mysql';

export const mysqlconn =  mysql.createConnection({ 
    host: 'svc.sel3.cloudtype.app',
    port: 30344,
    user: 'client1',
    password: 'sunrin32!',
    database: 'universe'
});

// import mysql from "mysql";
// 	const connection = mysql.createConnection({
// 		host: "svc.sel3.cloudtype.app",
// 		port: 30344,
// 		user: "root",
// 		password: "sunrinqwerty32!",

// 	});