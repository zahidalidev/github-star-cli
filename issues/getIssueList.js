const axios = require('axios');
const star = require('../utils/starThanks');

module.exports = async(answers) => {
    
    const endPoint = `https://api.github.com/repos/${answers.username}/${answers.repoName}/issues`;
    try {
        const { data } = await axios.get(endPoint);
        console.log('\n\n')
        printIssues(data);
        star();
        process.exit();
    } catch (error) {
        console.log('\n\n<- --------------- \x1b[91mNot found any Issue\x1b[0m --------------- ->\n');
        process.exit();   
    }
}

const printIssues = (data) => {
    data.map((repo, i) => {
        console.log('   \x1b[33mNO: \x1b[0m', repo.number)
        console.log('   \x1b[33mID: \x1b[0m', repo.id)
        console.log('   \x1b[33mTITLE: \x1b[0m', repo.title)
        console.log('   \x1b[33mDESCRIPTION: \x1b[0m', repo.body)
        console.log('   \x1b[33mLABELS: \x1b[0m', repo.labels)
        console.log('   \x1b[33mSTATE: \x1b[0m', repo.state)
        console.log('   \x1b[33mLOCKED: \x1b[0m', repo.locked)
        console.log('   \x1b[33mURL: \x1b[0m', repo.html_url)
        console.log('   \x1b[33mCOMMENTS: \x1b[0m', repo.comments)
        console.log('   \x1b[33mCREATED AT: \x1b[0m', repo.created_at)
        console.log('   \x1b[33mUPDATED AT: \x1b[0m', repo.updated_at)
        console.log('   \x1b[33mCLOSED AT: \x1b[0m', repo.closed_at)
        console.log('   \x1b[36m\n<- ----------------------------------------------------------------------------------- ->\n\x1b[0m')
    })
} 