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
        name: answers.name,
        description: answers.description,
        homepage: "https://github.com",
        private: answers.private,
        has_issues: answers.has_issues,
        has_projects: true,
        has_wiki: true
    };

    try {
        await axios({
            method: "POST",
            headers: headers,
            data: payLoad,
            url: `https://api.github.com/user/repos`,
        });

        repo();
        star();
        
        process.exit();    
    } catch (error) {
        console.log('\n<- --------------- \x1b[91mRepository creation failed\x1b[0m --------------- ->');
        process.exit();    
    }

}

const repo = () => {
    console.log(`           
                     -- - - - - - - - - - - - - - - - - --
                     -                                   -
    \x1b[92m<- ------------  -  \x1b[94mRepository Created Successfully\x1b[92m  -   ------------------ ->\x1b[0m
                     -                                   -
                     -- - - - - - - - - - - - - - - - - --  
        `);

}
