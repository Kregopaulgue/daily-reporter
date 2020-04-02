const { RequestMaker } = require('./RequestMaker.js');
/**
 * Class representing Project api
 */
class ProjectApi {
    static async  getAllProjects() {
        //building url for paginating projects
        const requestUrl = 'https://czechpol.atlassian.net/rest/api/3/project/search';
        const requestMakerObject = new RequestMaker({ endpointUrl: requestUrl, method: 'GET'});

        try {
            const projects = await requestMakerObject.makeRequest();
            console.log(projects);
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = {
    ProjectApi
}