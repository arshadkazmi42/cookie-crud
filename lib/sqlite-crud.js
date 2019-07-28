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
      
      console.log(JSON.stringify(row));
      return resolve(row);
    });
  });
}


SQLiteCrud.prototype.write = function(query, values=[]) {
  // const { fields, values, placeholders } = parse(row[0])
  // const query = `INSERT INTO cookies ( ${fields.join(', ')} ) values ( ${placeholders.join(', ')} )`
  const db = this.db;
  const stmt = db.prepare(query);
  stmt.run(values);
  return stmt.finalize();
}


SQLiteCrud.prototype.remove = function(query, values=[]) {
  const stmt = this.db.prepare(query);
  stmt.run();
  return stmt.finalize();
}

// const parse = (cookie) => {
//   const fields = [];
//   const values = [];
//   const placeholders = [];
//   for (let key in cookie) {
//     placeholders.push('?');
//     fields.push(key);
//     if (key === 'encrypted_value') {
//       values.push("'" + cookie[key].toString() + "'")
//     } else {
//       if (typeof cookie[key] === 'string') {
//         values.push("'" + cookie[key] + "'");
//       } else {
//         values.push(cookie[key])
//       }
//     }
    
//   }

//   return { fields, values, placeholders };
// } 


module.exports = SQLiteCrud;
