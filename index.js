const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

let completePathEnv;

const authDetails = async(answers, path) => {   

    let pathModified = path.split('\n');
    pathModified = pathModified[0];

    completePathEnv = pathModified + '\\github-star-cli\\config\\default.json';


    var jsonData = `{"email":"${answers.email}","username":"${answers.username}","password":"${answers.password}"}`;
 
    // parse json
    var jsonObj = JSON.parse(jsonData);
    // console.log(jsonObj);
    
    // stringify JSON Object
    var jsonContent = JSON.stringify(jsonObj);
    
    fs.writeFile(completePathEnv, jsonContent, function(err) {
        if(err) {
            return console.log('Failed!');
        }
        authDone();
    });

}

const authDone = () => {
    console.log(`           
                     -- - - - - - 
                     -          -
    \x1b[92m<- ------------  -   \x1b[94mDone!\x1b[92m  -   ------------------ ->\x1b[0m
                     -          -
                     -- - - - - -
        `);
 
}

module.exports = {
    authDetails
}