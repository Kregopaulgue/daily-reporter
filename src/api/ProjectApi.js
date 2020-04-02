const { RequestMaker } = require('./RequestMaker.js');
/**
 * Class representing Project api
 */
class ProjectApi {
    endpointUrl = '/rest/api/3/project/'

    static getAllProjects() {
        //building url for paginating projects
        const requestUrl = endpointUrl += 'search';
        const requestMakerObject = new RequestMaker(requestUrl, 'GET');

        try {
            const projects = await requestMakerObject.makeRequest();
            console.log(projects);
        } catch(error) {
            console.log(error);
        }
    }
}