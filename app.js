const url = require('url')
const myUrl ='http://localhost:3000/profile?name="John"&age=30'; // ? IS CALLED QUERY PARAMETER
const parseUrl = url.parse(myUrl,true);
console.log(parseUrl);

console.log(parseUrl.host) // host name batatta he 
console.log(parseUrl.query) // query aur parameter batata he 