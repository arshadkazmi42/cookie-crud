const SQLiteCrud = require('./sqlite-crud');


function Chrome(path) {
  this.sqliteCrud = new SQLiteCrud(path);
}

Chrome.prototype.setCookie = async function(cookies, domain) {
  const insertQuery = `INSERT INTO cookies (
    creation_utc, host_key, name, value, path, expires_utc, is_secure, is_httponly, 
    last_access_utc, has_expires, is_persistent, priority, encrypted_value, firstpartyonly
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const queries = []
  for (let cookie of cookies) {
    const values = [];
    for (let key in cookie) {
      console.log(key);
      if (key === 'encrypted_value') {
        values.push(Buffer.from(cookie[key], 'utf8'));
      } else {
        values.push(cookie[key]);
      }
    }

    queries.push(this.sqliteCrud.write(insertQuery, values));
  }

  try {
    return await Promise.all(queries)    
  } catch (err) {
    console.log(err);
  }

}

Chrome.prototype.getCookie = async function(domain) {
  const query = `SELECT * from cookies WHERE host_key like '%${domain}%'`;
  return await this.sqliteCrud.read(query);
}


module.exports = Chrome;
