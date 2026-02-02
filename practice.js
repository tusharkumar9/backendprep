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

// const http = require('http');
// const url = require('url');  

// const server = http.createServer((req, res) => {
//     const parseUrl = url.parse(req.url, true);
//     const pathName = parseUrl.pathname;
//     const query = parseUrl.query;
//   res.writeHead(200,  "Content-Type", "text/html" );
//     if (pathName == '/') {
       
//         res.write(`<h1>Welcome to the  Home Page</h1>`);
//         res.end();
        
//     } else if(pathName === '/addName') {
//         const { name } = query;
//         res.write(`<h1> Hello ${name}`)
//     }
// });

// //  start the server
// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000');
// });



                        // making 4  routes  2/2/2026

// const fs = require('fs')

// const path = require('path')

// const filepath = path.join(__dirname + '/data.txt');

// const data = {
//     name : "Tushar",
//     aka : "CEO",
//     age : 69,
//     college : "Invertis University",
//     favjob : "Born to be the CEO"
// }

// fs.writeFile(filepath, JSON.stringify(data), (err)=>{
//     if (err){
//         console.log(err);
//     }
//     else {
//         console.log("Done");
//     }
// });




                            /// making routes
const http = require('http');
const url = require('url');  

const fs = require('fs')

const path = require('path')

const filepath=path.join(__dirname + '/data.txt');

const data = {
    name : "Tushar Kumar",
    aka : "The CEO",
    age : 79,
    college : "Invertis University,UP"
}


if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, JSON.stringify([], null, 2));
}

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    const pathName = parseUrl.pathname;
    const query = parseUrl.query;


    if (pathName === '/') {
        res.write('<h1>Welcome to the Home Page</h1>');
        res.end();
    }
    else if (pathName === '/addName') {
        const { name } = query;

        res.write(`<H1>Hello ${name}</H1>`);
        res.end();
    }
    else if (pathName === '/data') {
        const fileData = fs.readFileSync(filepath, 'utf-8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(fileData);
        res.end();
    }else {
        res.write('<h1>404 Page Not Found</h1>');
        res.end();
    }
});

// start the server
server.listen(3000, () => {
    console.log('http://localhost:3000');
});