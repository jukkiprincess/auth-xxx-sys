const AutoGitUpdate = require('auto-git-update');

const config = {
    repository: 'https://github.com/jukkiprincess/auth-xxx-sys',
    fromReleases: true,
    tempLocation: 'D:\auth-xxx-sys\',
    ignoreFiles: ['package.json', 'package-lock.json'],
    executeOnComplete: 'D:\auth-xxx-sys\runprogram.bat',
    exitOnComplete: true
}

const updater = new AutoGitUpdate(config);

updater.autoUpdate();