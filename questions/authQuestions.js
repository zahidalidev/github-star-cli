module.exports = [
    {
        type: 'input',
        name: 'email',
        // message: 'menter your github email address'
        message: '\x1b[0m\x1b[1menter your github email address\x1b[36m\x1b[1m'
    },
    {
        type: 'input',
        name: 'username',
        message: '\x1b[0m\x1b[1menter your github username\x1b[36m\x1b[1m'
    },
    {
        type: 'password',
        name: 'password',
        mask: '*',
        message: '\x1b[0m\x1b[1menter your github password\x1b[36m\x1b[1m'
    }
]