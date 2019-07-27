const SQLiteCrud = require('./sqlite-crud');


function Chrome() {
  console.log("DONE");
  this.sqliteCrud = new SQLiteCrud('./Cookies');
}

Chrome.prototype.setCookie = function(cookie) {
  
}

Chrome.prototype.getCookie = async function(domain) {
  const query = `SELECT * from cookies WHERE host_key like '%${domain}%'`;
  const data = await this.sqliteCrud.read(query);
  console.log(data);
}


module.exports = Chrome;
