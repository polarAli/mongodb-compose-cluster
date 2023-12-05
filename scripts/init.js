rs.status();
use admin;
const username = process.env['MONGO_INITDB_ROOT_USERNAME'];
const password = process.env['MONGO_INITDB_ROOT_PASSWORD'];
db.createUser({ user: username, pwd: password, roles: [{ role: 'root', db: 'admin' }] });