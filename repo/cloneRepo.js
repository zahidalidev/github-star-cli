const simpleGitPromise = require('simple-git/promise')();
const dotenv = require('dotenv');
dotenv.config();
const star = require('../utils/starThanks');

module.exports = async(answers) => {
    
    const repoName = answers.repoName;
    const username = answers.username;

    const repoPath = `https://github.com/${username}/${repoName}.git`;
    const localPath = answers.localPath;

    try {
        await simpleGitPromise.clone(repoPath, localPath);
        cloned();        
        star();
        process.exit();
    } catch (error) {
        // strError = error.toString().match(/git pull/i);
        console.log('\n<- ---------- \x1b[91mRepository cloning failed\x1b[0m ---------- ->\n');
        console.log('\n', error, '\n');
        process.exit();
    }
}


const cloned = () => {
    console.log(`           
                     -- - - - - - - - - - - - - - - - - --
                     -                                   -
    \x1b[92m<- ------------  -   \x1b[94mRepository clone Successfully\x1b[92m  -   ------------------ ->\x1b[0m
                     -                                   -
                     -- - - - - - - - - - - - - - - - - --  
        `);

}

