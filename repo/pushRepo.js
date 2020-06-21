var cmd = require('node-cmd');
const simpleGit = require('simple-git')();
const shellJs = require('shelljs');
const simpleGitPromise = require('simple-git/promise')();
var defaultJSON = require('../config/default.json');
const dotenv = require('dotenv');
dotenv.config();
const star = require('../utils/starThanks');

module.exports = async(answers) => {
    
    let email = defaultJSON.email;
    let username = defaultJSON.username;

    if((!email) || (!username)){
        console.log('\n\x1b[91mFATAL ERROR: email, username or password is not defined use \x1b[92mgithub-star-cli set-auths. ');
        process.exit();
    }

    shellJs.exec('git init');

    cmd.run('git remote remove origin');

    const repoName = answers.repoName;
    const commit = answers.commit;
    const localRepoPath = process.cwd();

    shellJs.cd(localRepoPath);

    const gitHubUrl = `https://github.com/${username}/${repoName}.git`;
    // add local git config like username and email
    simpleGit.addConfig('user.email', email);
    simpleGit.addConfig('user.name', username);
    // Add remore repo url as origin to repo

    try {
        simpleGitPromise.addRemote('origin',gitHubUrl);
    } catch (error) {
        console.log('\n\n\x1b[94mrun git remote remove origin and try again\n\n\x1b[0m')
        // console.log(error)
        process.exit();
    }
    // Add all files for commit
    try {
        const addSuccess = await simpleGitPromise.add('.');
        console.log('\n\x1b[36m', addSuccess, '\x1b[0m');
    } catch (error) {
        console.log('\n<- ---------- \x1b[91mAdding files failed\x1b[0m ---------- ->');

    }
    
    // Commit files as Initial Commit
    try {
        const successCommit = await simpleGitPromise.commit(commit);
        console.log('\n\x1b[36mcommited: ', successCommit, '\x1b[0m');
    } catch (error) {
        console.log('\n<- ---------- \x1b[91mFailed commmit\x1b[0m ---------- ->');

    }
    let strError;
    // Finally push to online repository
    try {
        await simpleGitPromise.push('origin',`+${answers.branch}`);
        pushed();        
        star();
        process.exit();
    } catch (error) {
        // strError = error.toString().match(/git pull/i);
        console.log('\n<- ---------- \x1b[91mRepository push failed\x1b[0m ---------- ->\n');
        console.log('\n', error, '\n');
        process.exit();
    }
}


const pushed = () => {
    console.log(`           
                     -- - - - - - - - - - - - - - - - - --
                     -                                   -
    \x1b[92m<- ------------  -   \x1b[94mRepository pushed Successfully\x1b[92m  -   ------------------ ->\x1b[0m
                     -                                   -
                     -- - - - - - - - - - - - - - - - - --  
        `);

}
