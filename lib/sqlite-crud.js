const sqlite3 = require('sqlite3');


function SQLiteCrud(path) {

  this.db = this.connect(path);
}

SQLiteCrud.prototype.connect = function(path) {
  return new sqlite3.Database(path, (err) => {
    if (err) {
      console.error(err);
      throw new Error('Failed to connect to database');
    }

    console.info(`Connected to db ${path}`);
  });
}


SQLiteCrud.prototype.serialize = function() {
  const that = this;
  return new Promise(() => {
    that.db.serialize(function() {
      console.log('DB Serialized');
    })
  })
}


SQLiteCrud.prototype.read = function(query, values=[]) {
  const that = this;
  return new Promise(function(resolve, reject) {
    that.db.all(query, values, function(err, row) {
      if (err) {
        return reject('Failed to execute query');
      }
      
      return resolve(row);
    });
  });
}


SQLiteCrud.prototype.write = function(query, values=[]) {
  // TODO Promisify this
  this.db.run(query, values, function(err) {
    if (err) {
      console.log(err);
    }

    console.log('inserted');
  });
}


SQLiteCrud.prototype.remove = function(query, values=[]) {
  const stmt = this.db.prepare(query);
  stmt.run();
  return stmt.finalize();
}

SQLiteCrud.prototype.close = function() {
  this.db.close();
}


module.exports = SQLiteCrud;
