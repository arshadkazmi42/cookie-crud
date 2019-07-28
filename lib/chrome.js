const SQLiteCrud = require('./sqlite-crud');


function Chrome() {
  this.sqliteCrud = new SQLiteCrud('/home/arshad/.config/google-chrome/Default/Cookies');
}

Chrome.prototype.setCookie = async function(cookies, domain) {
  // await this.sqliteCrud.serialize();
  const deleteQuery = `DELETE FROM cookies WHERE host_key like '%${domain}%'`;
  console.log(deleteQuery);
  try {
    console.log(await this.sqliteCrud.remove(deleteQuery));
    console.log(await this.getCookie('primevideo'));
  } catch(err) {
    console.log("here1");
    console.log(err);
  }

  const insertQuery = `INSERT INTO cookies (
    creation_utc, host_key, name, value, path, expires_utc, is_secure, is_httponly, 
    last_access_utc, has_expires, is_persistent, priority, encrypted_value
  ) VALUES ($creation_utc, $host_key, $name, $value, $path, $expires_utc, $is_secure, $is_httponly, 
    $last_access_utc, $has_expires, $is_persistent, $priority, $encrypted_value)`;

  const queries = []
  for (let cookie of cookies) {
    const values = {};
    for (let key in cookie) {
      if (key === 'encrypted_value') {
        values[`$${key}`] = Buffer.from(cookie[key], 'utf8');
      } else {
        values[`$${key}`] = cookie[key];
      }
    }

    queries.push(this.sqliteCrud.write(insertQuery, values));
    console.log(insertQuery);
    console.log(values)
  }

  // console.log(queries.length);
  console.log(await Promise.all(queries));
  return true;
}

Chrome.prototype.getCookie = async function(domain) {
  const query = `SELECT * from cookies WHERE host_key like '%${domain}%'`;
  return await this.sqliteCrud.read(query);
}


module.exports = Chrome;
