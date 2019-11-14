require('dotenv').config()
// MY_MEM is an env variable we are making up just for sake of testing env vars out
// this can be tested using MY_MEM=Arrays node environment_variables.js 
// this will result in the console logging out 'I remember Arrays'
// if the value has spaces we need quotes like: MY_MEM="Arrays in JS" node environment_variables.js 
console.log('I remember ' + process.env.MY_MEM)

// I won't specificy MY_FAV intentionally so I can see the default being used
const my_favorite = process.env.MY_FAV || 'filter function';
console.log('I really like the ' + my_favorite)

// this can be called so that the default is used and also with a specific DB_HOST
// MY_MEM=Arrays node environment_variables.js 
// MY_MEM=Arrays DB_HOST=myprodawshost node environment_variables.js 
const db_host = process.env.DB_HOST || 'localhost';
console.log('Using database host: ' + db_host)
