const axios = require('axios');
const star = require('../utils/starThanks');

module.exports = async(answers) => {
    
    const endPoint = `https://api.github.com/users/${answers.username}/repos?page=1&per_page=10000`;
    try {
        const { data } = await axios.get(endPoint);
        console.log('\n\n')
        printRepoDetals(data);
        star();
        process.exit();
    } catch (error) {
        console.log('\n\n<- --------------- \x1b[91mNot found any public repo\x1b[0m --------------- ->\n');
        process.exit();   
    }
}

const printRepoDetals = (data) => {
    data.map((repo, i) => {
        console.log('   \x1b[33mNO: \x1b[0m', i + 1)
        console.log('   \x1b[33mNAME: \x1b[0m', repo.name)
        console.log('   \x1b[33mDESCRIPTION: \x1b[0m', repo.description)
        console.log('   \x1b[33mURL: \x1b[0m', repo.html_url)
        console.log('   \x1b[33mCLONE URL: \x1b[0m', repo.clone_url)
        console.log('   \x1b[33mPRIVATE: \x1b[0m', repo.private)
        console.log('   \x1b[33mCREATED AT: \x1b[0m', repo.created_at)
        console.log('   \x1b[33mSTARGAZERS: \x1b[0m', repo.stargazers_count)
        console.log('   \x1b[33mLANGUAGE: \x1b[0m', repo.language)
        console.log('   \x1b[33mHAS ISSUES: \x1b[0m', repo.has_issues)
        console.log('   \x1b[33mOPEN ISSUES: \x1b[0m', repo.open_issues_count)
        console.log('   \x1b[33mFORK COUNT: \x1b[0m', repo.forks_count)
        console.log('   \x1b[36m\n<- ----------------------------------------------------------------------------------- ->\n\x1b[0m')
    })
} 