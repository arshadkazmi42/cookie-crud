const sqlite3 = require('sqlite3');


function CookieCrud() {

  this.db = null
}

CookieCrud.prototype.connect = function(path) {
  console.log(path);
  this.db = new sqlite3.Database(path, (err) => {
    if (err) {
      console.error(err);
      throw new Error('Failed to connect to database');
    }

    console.info(`Connected to db ${path}`);
  });

  console.log(this.db);
}


// TODO Promisify this
CookieCrud.prototype.readCookie = function(domain) {
  const db = this.db;
  db.serialize(function() {
    db.all(`SELECT * from cookies WHERE host_key like '%${domain}%'`, function(err, row) {
      if (err) {
        console.error(err);
        throw new Error('Failed to execute query');
      }
      
      const { fields, values, placeholders } = parse(row[0])
      const query = `INSERT INTO cookies ( ${fields.join(', ')} ) values ( ${placeholders.join(', ')} )`
      const stmt = db.prepare(query, values);
      stmt.run();
      stmt.finalize();
      return row
    });
  })
}


CookieCrud.prototype.writeCookie = function(cookies) {
  const db = this.db;
  db.serialize(function () {
    console.log(cookies);
    for (cookie of cookies) {
      const { fields, values } = parse(cookie)
      const query = `INSERT INTO cookies ( ${fields.join(', ')} ) values ( ${values.join(', ')} )`
      console.log(query);
    }
    // db.run()
  })
}

const parse = (cookie) => {
  const fields = [];
  const values = [];
  const placeholders = [];
  for (let key in cookie) {
    placeholders.push('?');
    fields.push(key);
    if (key === 'encrypted_value') {
      values.push("'" + cookie[key].toString() + "'")
    } else {
      if (typeof cookie[key] === 'string') {
        values.push("'" + cookie[key] + "'");
      } else {
        values.push(cookie[key])
      }
    }
    
  }

  return { fields, values, placeholders };
} 


CookieCrud.prototype.read


module.exports = CookieCrud;
