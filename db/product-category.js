var pg = require('pg');
var pgUrl = 'postgres://localhost/acme';
var Promise = require('bluebird');
var _db;

function connect() {
	var promise = new Promise(function(resolve, reject) {
		if(_db) {
			resolve(_db);
		}
		var client = new pg.Client(pgUrl);

		client.connect(function(err) {
			if(err) {
				reject(err);
			}
			_db = client;
			return resolve(_db);
		});
	});

	return promise;
}

function addCategory() {

}

function getCategory(id) {
	return client.query('select * from categories where id = $1', [id])
}

function deleteCategory(id) {
	return client.query('delete from categories where id = $1', [id]);
}

function addProduct() {

}

function getProduct() {

}

function deleteProduct(id) {
	return client.query('delete from products where id = $1', [id]);
}

module.exports = {
	connect: connect,
	addCategory: addCategory,
	getCategory: getCategory,
	deleteCategory: deleteCategory,
	addProduct: addProduct,
	getProduct: getProduct,
	deleteProduct: deleteProduct
};