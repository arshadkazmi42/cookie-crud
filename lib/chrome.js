const SQLiteCrud = require('./sqlite-crud');


function Chrome() {
  this.sqliteCrud = null;
}

Chrome.prototype.setCookie = function(cookie) {
  
}

Chrome.prototype.getCookie = function(domain) {
  const query = `SELECT * from cookies WHERE host_key like '%${domain}%'`;
}


module.exports = Chrome;
