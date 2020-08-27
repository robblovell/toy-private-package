module.exports = {
    'roots': [
        '<rootDir>/src'
    ],
    'testMatch': [
        '**/?(*.)+(unit).+(ts)'
    ],
    'transform': {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    'reporters': [
        'default',
        ['jest-html-reporters', {
            'publicPath': './html-report',
            'filename': 'report.html',
            'expand': true
        }]
    ],
}