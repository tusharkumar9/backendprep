// const path = require('path');
//  const filePath = path.join(__dirname,'data.txt')
// console.log(filePath);


// const http = require('http');
// const server =http.createServer((req, res) => {
//     res.write("hELLO ceo");
//     res.end();
// });

// server.listen( 3000, () => {
//     console.log("Server is runnig");
// })


 // 30/01/2026
 
const url = require('url')
const myUrl ='http://localhost:3000/profile?name="John"&age=30'; // ? IS CALLED QUERY PARAMETER
const parseUrl = url.parse(myUrl,true);
console.log(parseUrl);

console.log(parseUrl.host) // host name batatta he 
console.log(parseUrl.query) // query aur parameter batata he 
