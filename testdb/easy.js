var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('students.db');

db.serialize(function(){
	db.run('CREATE TABLE students (name TEXT)');
	db.run("INSERT INTO students (name) VALUES ('peter parker')");
	db.run("INSERT INTO students (name) VALUES ('bruce wayne')");

	db.all("SELECT * FROM students", function(err, rows){
		console.log(rows);
	});
});

db.close();