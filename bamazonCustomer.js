var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'bamazonDB'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId + '\n');
  showProducts();
});

function showProducts() {
  connection.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;
    console.log('Our Products\n');
    console.log('========================' + '\n');
    for (i = 0; i < res.length; i++) {
      console.log('Product ID: ' + JSON.stringify(res[i].item_id));
      console.log('Product Name: ' + JSON.stringify(res[i].product_name));
      console.log('Price: $' + JSON.stringify(res[i].price) + '\n');
      console.log('----------------------' + '\n');
    }
  });
  connection.end();
}
