var fs = require('fs');

function startRoutes(dir, app) {
    const modules = fs.readdirSync(dir);

    modules.forEach(function (moduleName) {
        const route = "/" + moduleName;
        const routePath = '../components/' + moduleName + "/routes/" + moduleName + ".route"
        const routeFile = require(routePath);

        app.use(route, routeFile);
    })
}

module.exports = {
    startRoutes
};
