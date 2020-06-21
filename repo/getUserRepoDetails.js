const axios = require('axios');
const star = require('../utils/starThanks');

module.exports = async(answers) => {
    
    const endPoint = `https://api.github.com/repos/${answers.username}/${answers.repoName}`;
    try {
        const { data } = await axios.get(endPoint);
        console.log('\n\n')
        printRepoDetals(data);
        star();
        process.exit();
    } catch (error) {
        console.log('\n\n<- --------------- \x1b[91mNot found any repo\x1b[0m --------------- ->\n', error);
        process.exit();   
    }
}

const printRepoDetals = (repo) => {
    console.log('   \x1b[33mID: \x1b[0m', repo.id)
    console.log('   \x1b[33mNAME: \x1b[0m', repo.name)
    console.log('   \x1b[33mDESCRIPTION: \x1b[0m', repo.description)
    console.log('   \x1b[33mURL: \x1b[0m', repo.html_url)
    console.log('   \x1b[33mCLONE URL: \x1b[0m', repo.clone_url)
    console.log('   \x1b[33mPRIVATE: \x1b[0m', repo.private)
    console.log('   \x1b[33mDISABLED: \x1b[0m', repo.disabled)
    console.log('   \x1b[33mFORK: \x1b[0m', repo.fork)
    console.log('   \x1b[33mCREATED AT: \x1b[0m', repo.created_at)
    console.log('   \x1b[33mUPDATED AT: \x1b[0m', repo.updated_at)
    console.log('   \x1b[33mPUSHED AT: \x1b[0m', repo.pushed_at)
    console.log('   \x1b[33mSTARGAZERS: \x1b[0m', repo.stargazers_count)
    console.log('   \x1b[33mLANGUAGE: \x1b[0m', repo.language)
    console.log('   \x1b[33mHAS ISSUES: \x1b[0m', repo.has_issues)
    console.log('   \x1b[33mOPEN ISSUES: \x1b[0m', repo.open_issues_count)
    console.log('   \x1b[33mFORK COUNT: \x1b[0m', repo.forks_count)
    console.log('   \x1b[33mSUBSCRIBERS: \x1b[0m', repo.subscribers_count)
    if(repo.license){
        console.log('   \x1b[33mLICENSE: \x1b[0m', repo.license.name)
    }else{
        console.log('   \x1b[33mLICENSE: \x1b[0m', repo.license)
    }

} 