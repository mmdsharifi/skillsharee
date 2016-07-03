import http from 'http';
import mongorito from 'mongorito';
const Model = mongorito.Model;

mongorito.connect('localhost/lenus');






http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');


class User extends Model {

}

var user = new User({
  username : 'Mohammad',
  password : '123@qwe',
  name : 'Mohammad Sharifi'
});

user.save();

var loginUser =  user.get('username', 'Mohammad');

if (loginUser != null ) {
  console.log(`You are loged in! , Welcome ... ${ loginUser }`);
}


//console.log(user);
