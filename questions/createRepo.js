module.exports = [
    {
        type: 'input',
        name: 'name',
        message: '\x1b[0m\x1b[1mName of Repository\x1b[35m\x1b[1m'
    },
    {
        type: 'input',
        name: 'description',
        message: '\x1b[0m\x1b[1mDescription\x1b[35m\x1b[1m'
    },
    {
        type: 'confirm',
        name: 'private',
        message: '\x1b[0m\x1b[1mPrivate?\x1b[35m\x1b[1m',
        default: false
    },
    {
        type: 'confirm',
        name: 'has_issues',
        message: '\x1b[0m\x1b[1mHas issues?\x1b[35m\x1b[1m',
        default: false
    }
];

