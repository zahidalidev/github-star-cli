const axios = require('axios');
const defaultJSON = require('../config/default.json');
const star = require('../utils/starThanks');


module.exports = async(answers) => {
    let email = defaultJSON.email;
    let username = defaultJSON.username;
    let password = defaultJSON.password;

    if((!email) || (!username) || (!password)){
        console.log('\n\x1b[91mFATAL ERROR: email, username or password is not defined use \x1b[92mgithub-star-cli set-auths. ');
        process.exit();
    }

    const headers = {
        "Authorization" : `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
    }

    const payLoad = {
        title: answers.title,
        body: answers.description
    };

    try {
        const res = await axios({
            method: "POST",
            headers: headers,
            data: JSON.stringify(payLoad),
            url: `https://api.github.com/repos/${username}/${answers.repoName}/issues`,
        });
        console.log(`\n\n\x1b[32mIssue Link: \x1b[33m${res.data.html_url}\x1b[0m\n`)
        issue();
        star();
        
        process.exit();  
    } catch (error) {
        console.log('\n<- --------------- \x1b[91mIssue creation failed\x1b[0m --------------- ->');
        process.exit(); 
    }
}


const issue = () => {
    console.log(`           
                     -- - - - - - - - - - - - - - - - - --
                     -                                   -
    \x1b[92m<- ------------  -  \x1b[94mIssue Created Successfully\x1b[92m  -   ------------------ ->\x1b[0m
                     -                                   -
                     -- - - - - - - - - - - - - - - - - --  
        `);

}