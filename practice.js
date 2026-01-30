// const url = require('url')
// const myUrl ='http://localhost:3000/profile?name="John"&age=30'; // ? IS CALLED QUERY PARAMETER
// const parseUrl = url.parse(myUrl,true);
// console.log(parseUrl);

// console.log(parseUrl.host) // host name batatta he 
// console.log(parseUrl.query) // query aur parameter batata he 



// // CREATING A SERVER  mera wala galat he ye  
// const http =require('http')
// const url =require('url')

// const server =http.createServer((req, res) => {
//     const parseUrl =url.parse(req.url,true);
//     const pathName = parseUrl.pathname;
//     if(pathName ==='/'){
//         res.writeHead(200,{ 'Content-Type':text/html'});



//       res.end('<h1>Welcome to the Home Page</h1>');
// }
// });

// server.listen( 3000, () => {
//      console.log("Server is runnig");
//  });

                                // craeting a server is corrrct way   ye sahi he 
// const http = require('http');
// const url = require('url');  

// const server = http.createServer((req, res) => {
//     const parseUrl = url.parse(req.url, true);
//     const pathName = parseUrl.pathname;

//     if (pathName === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<h1>Welcome to the Home Page</h1>');
//     }
// });

// //  start the server
// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000');
// });


                                //  now upar wala with anather route alson  SIR wala

const http = require('http');
const url = require('url');  

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    const pathName = parseUrl.pathname;
    const query = parseUrl.query;
  res.writeHead(200,  "Content-Type", "text/html" );
    if (pathName == '/') {
       
        res.write(`<h1>Welcome to the  Home Page</h1>`);
        res.end();
        
    } else if(pathName === '/addName') {
        const { name } = query;
        res.write(`<h1> Hello ${name}`)
    }
});

//  start the server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});