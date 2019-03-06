module.exports = {
    lesson: {
        dependency: {
            routeName: 'user',
            moduleName: 'user'
        }
    },
    cancellation: {
        dependency: {
            routeName: 'lesson',
            moduleName: 'lesson'
        }
    },
    comment: {
        dependency: {
            routeName: 'lesson',
            moduleName: 'lesson'
        }
    },
    homework: {
        dependency: {
            routeName: 'lesson',
            moduleName: 'lesson'
        }
    },
    location: {
        dependency: {
            routeName: 'lesson',
            moduleName: 'lesson'
        }
    },
};
