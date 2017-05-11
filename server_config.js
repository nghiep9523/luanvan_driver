var sql = require('mssql');
//2.
function ServerConfig() {
	this.config = {
	    server: '4e3d17d9-417e-475a-87bb-a76e004f3a56.sqlserver.sequelizer.com',
	    database: 'db4e3d17d9417e475a87bba76e004f3a56',
	    user: 'qbffdjcgezowtvyj',
	    password: '8EwdtuyaHNheUBfKmSSBdnVq8xpzvLu65xNHdWUtMmMBoaBPX6PchDrUSfd5e8M5',
	    port: 1433
	};
	this.amqpURL = 'amqp://imtqjgzz:LQWyhmVxKBMgV6ROObew36G07DUs6ZYZ@white-mynah-bird.rmq.cloudamqp.com/imtqjgzz';
}

module.exports = new ServerConfig();