const shelljs = require('shelljs');
var defaultJSON = require('../config/default.json');
        

const username = defaultJSON.username;

const currentPath = process.cwd();

shelljs.cd('../');
const changedPath = process.cwd();

shelljs.cd(currentPath);


module.exports = [
    {
        type: 'input',
        name: 'username',
        message: '\x1b[0m\x1b[1mUsername of user whose repo you want to clone or press enter for default\x1b[35m\x1b[1m',
        default: username
    },
    {
        type: 'input',
        name: 'repoName',
        message: '\x1b[0m\x1b[1mRepository name\x1b[35m\x1b[1m'
    },
    {
        type: 'input',
        name: 'localPath',
        message: '\x1b[0m\x1b[1mPath where you want to clone or press enter for default\x1b[35m\x1b[1m',
        default: false,
        default: changedPath
    }
];

