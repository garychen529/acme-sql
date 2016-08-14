var pg = require('pg');
var pgUrl = 'postgres://localhost/acme';
var Promise = require('bluebird');
var _db;

function connect(cb) {
		if(_db) {
      return cb(_db);
		}

		var client = new pg.Client(pgUrl);

		client.connect(function(err, conn) {
			if(err) {
        throw err;
			}
			_db = conn;
			cb(_db);
		});
}

function getCategories(cb){
  connect(function(conn){
    conn.query('select * from categories', [], function(err, result){
      if(err)
        throw err;
      cb(result.rows);
    });
  });
}

function addCategory() {

}

function getCategory(categoryId) {
	return client.query('select * from categories where id = $1', [categoryId])
	.then(function(results) {
		if(results.rows.length > 0) {
			return results.rows[0];
		}
		return null;
	});
}

function deleteCategory(categoryId) {
	return client.query('delete from categories where id = $1', [categoryId]);
}

function addProduct() {

}

function getProduct() {

}

function deleteProduct(productId) {
	return client.query('delete from products where id = $1', [productId]);
}

module.exports = {
	connect: connect,
	addCategory: addCategory,
	getCategory: getCategory,
  getCategories: getCategories,
	deleteCategory: deleteCategory,
	addProduct: addProduct,
	getProduct: getProduct,
	deleteProduct: deleteProduct
};
