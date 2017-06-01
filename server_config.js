var sql = require('mssql');
//2.
function ServerConfig() {
	this.config = {
	    server: '3fcdc860-f0d1-4783-8164-a78500e69264.sqlserver.sequelizer.com',
	    database: 'db3fcdc860f0d147838164a78500e69264',
	    user: 'pnjodlddfktjdhps',
	    password: 'XkdnWgTqep4gJdTpZKTqAo8ioj2MP6L5jSPQELxDTgEZFcGhMEDDFspHk37LnfJg',
	    port: 1433
	};
	this.amqpURL = 'amqp://imtqjgzz:LQWyhmVxKBMgV6ROObew36G07DUs6ZYZ@white-mynah-bird.rmq.cloudamqp.com/imtqjgzz';
}

module.exports = new ServerConfig();