#!/usr/bin/env node

var cmd=require('node-cmd');
const program = require('commander');
const { prompt } = require('inquirer');
const { authDetails } = require('./index');
const loading = require('./utils/loader');

const createRepoQuestions = require('./questions/createRepo');
const pushRepoQuestions = require('./questions/pushRepo');
const authQuestions = require('./questions/authQuestions');
const cloneQuestions = require('./questions/cloneQuestions');
const removeRepoQuestions = require('./questions/removeQuestions');
const getEmailQuestions = require('./questions/getEmailQuestions');
const getRepoListQuestion = require('./questions/listUserRepoQuestions');
const getRepoDetailsQuestion = require('./questions/getUserRepoQuestions');
const createIssueQuesstion = require('./questions/createIssueQuestions');
const listIssueQuesstion = require('./questions/listIssueQuestions');
const lockIssueQuestion = require('./questions/lockIssueQuestions');
const unlockIssueQuestion = require('./questions/unlockIssueQuestions');

const createRepo = require('./repo/createRepo');
const pushRepoTOGithub = require('./repo/pushRepo');
const cloneRepoToLocal = require('./repo/cloneRepo');
const removeRepoFromGithub = require('./repo/removeRepo');
const getUserEmail = require('./user/getEmail');
const getUserRepos = require('./repo/getUserRepos');
const getUserRepoDetails = require('./repo/getUserRepoDetails');
const createIssue = require('./issues/createIssue');
const listIssues = require('./issues/getIssueList');
const lockIssue = require('./issues/lockIssue');
const unlockIssue = require('./issues/unlockIssue');

program
    .version('1.6.2')
    .description('Github CLI to create, push, clone, delete repository. Get All public repos of user, repo details. Get Public email by username. Create/Open an Issue to repo. List all issues of repo. Lock and unlock issue of repo.')

program
    .command('set-auths')
    .alias('sau')
    .description('First set auths to run any command otherwise you may receive authentications errors')
    .action(async() => {
        console.log("\x1b[36m\x1b[1m")

        const answers = await prompt(authQuestions);

        cmd.get(
            'npm root -g',
            function(err, data, stderr){
                authDetails(answers, data);
            }
        );

        console.log("\x1b[0m")

    })

program
    .command('create-repository')
    .alias('cr')
    .description('Create repository on Github')
    .action(async() => {
        console.log("\x1b[35m\x1b[1m")

        const answers = await prompt(createRepoQuestions);
        createRepo(answers);

        loading('creating');
        console.log("\x1b[0m")
    })

program
    .command('push-repo')
    .alias('pr')
    .description('Push your local repository to your github repository')
    .action(async() => {
        console.log("\x1b[34m\x1b[1m")

        const answers = await prompt(pushRepoQuestions);
        pushRepoTOGithub(answers);

        loading('pushing');

        console.log("\x1b[0m")
    })

program
    .command('clone-repo')
    .alias('cr')
    .description('Clone repository from github')
    .action(async() => {
        console.log("\x1b[34m\x1b[1m")

        const answers = await prompt(cloneQuestions);
        cloneRepoToLocal(answers)

        loading('cloning');

        console.log("\x1b[0m")
    })

program
    .command('remove-repo')
    .alias('rr')
    .description('Delete github repository')
    .action(async() => {
        console.log("\x1b[34m\x1b[1m")

        const answers = await prompt(removeRepoQuestions);
        removeRepoFromGithub(answers);

        loading('deleting');

        console.log("\x1b[0m")
    })

program
    .command('find-email')
    .alias('fe')
    .description('Find the public email Address of user')
    .action(async() => {
        console.log("\x1b[34m\x1b[1m")

        const answers = await prompt(getEmailQuestions);
        getUserEmail(answers);

        loading('getting email');

        console.log("\x1b[0m")
    })

program
    .command('list-repos')
    .alias('lpr')
    .description('Get all public repositories of github user')
    .action(async() => {
        console.log("\x1b[34m\x1b[1m")

        const answers = await prompt(getRepoListQuestion);
        getUserRepos(answers);

        loading('getting');

        console.log("\x1b[0m")
    })

program
    .command('repo-details')
    .alias('rd')
    .description('Get repositories details of github user')
    .action(async() => {
        console.log("\x1b[34m\x1b[1m")

        const answers = await prompt(getRepoDetailsQuestion);
        getUserRepoDetails(answers);

        loading('getting');

        console.log("\x1b[0m")
    })

program
    .command('create-issue')
    .alias('cris')
    .description('Create/Open an issue to a repository')
    .action(async() => {
        console.log("\x1b[35m\x1b[1m")

        const answers = await prompt(createIssueQuesstion);
        createIssue(answers);

        loading('creating');

        console.log("\x1b[0m")
    })

program
    .command('list-issues')
    .alias('lis')
    .description('list all issues of a repository')
    .action(async() => {
        console.log("\x1b[35m\x1b[1m")

        const answers = await prompt(listIssueQuesstion);
        listIssues(answers);

        loading('getting');

        console.log("\x1b[0m")
    })

program
    .command('lock-issue')
    .alias('lois')
    .description('lock an issue of a repository')
    .action(async() => {
        console.log("\x1b[35m\x1b[1m")

        const answers = await prompt(lockIssueQuestion);
        lockIssue(answers);

        loading('locking');

        console.log("\x1b[0m")
    })

program
    .command('unlock-issue')
    .alias('ulois')
    .description('unlock an issue of a repository')
    .action(async() => {
        console.log("\x1b[35m\x1b[1m")

        const answers = await prompt(unlockIssueQuestion);
        unlockIssue(answers);

        loading('unlocking');

        console.log("\x1b[0m")
    })


program.parse(process.argv);