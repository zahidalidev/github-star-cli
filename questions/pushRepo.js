module.exports = [
    {
        type: 'input',
        name: 'repoName',
        message: '\x1b[0m\x1b[1mEnter github repository name\x1b[34m\x1b[1m'
    },
    {
        type: 'input',
        name: 'commit',
        message: '\x1b[0m\x1b[1mEnter your Commit\x1b[34m\x1b[1m'
    },
    {
        type: 'input',
        name: 'branch',
        message: '\x1b[0m\x1b[1mEnter your Branch Name or Press enter for master\x1b[34m\x1b[1m',
        default: 'master'
    },
]