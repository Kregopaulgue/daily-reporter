const POST_METHOD = 'POST',
    GET_METHOD = 'GET',
    PUT_METHOD = 'PUT';
/**
 * Class for requests building
 * @class
 */
class RequestMaker {
    /**
     * Builds object for making requests to a specified endpoint
     * @constructor
     * @param {object} requestParameters
     * @param {string} requestParameters.endpointUrl 
     * @param {string} requestParameters.method request method post, put, etc.
     * @param {object} requestParameters.getParams params to be put in url
     * @param {object} requestParameters.postParams body of the request
     */
    constructor({ endpointUrl, method, getParams, postParams }) {
        this._method = method;
        this._endpointUrl = endpointUrl;

        this._getParams = getParams;
        this._postParams = postParams;

        this._requestUrl = this._buildUrl();
    }

    /**
     * Sets request method
     * @param {string} method 
     */
    setMethod(method) {
        this._method = method;
        this._requestUrl = this._buildUrl(); 
    }

    /**
     * Sets get params
     * @param {object} params 
     */
    setGetParams(params) {
        this._getParams = params;
        this._requestUrl = this._buildUrl();
    }
    /**
     * Sets post params
     * @param {object} postParams 
     */
    setGetParams(postParams) {
        this._postParams = postParams;
        this._requestUrl = this._buildUrl();
    }


    /**
     * Builds appropriate url for request based on object state
     * Takes base url from this
     */ 
    _buildUrl() {
        let resultUrl = this._endpointUrl;

        if(this._method === GET_METHOD) {
            resultUrl += '/';
        }

        if(this._getParams && this.method === GET_METHOD) {
            const formattedParams = [];
            for(let [key, value] of Object.entries(this._getParams)) {
                formattedParams.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
            }
            const resultQuery = formattedParams.join('&');
            resultUrl += '?' + resultQuery;
        }

        return resultUrl;
    }

    /**
     * Making requests based on this data 
     */
    async makeRequest() {
        const username = process.env.JIRA_USERNAME;
        const token = process.env.JIRA_TOKEN;
        
        const fetchOptions = {
            headers: {
                'Authorization': 'Basic ' + btoa(username + ':' + token),
                'Content-Type': 'application/json'
            },
            body: this.method === POST_METHOD ? JSON.stringify(this._postParams) : undefined 
        }
 
        const response = await fetch(this._requestUrl, fetchOptions);
        
        if(response.ok) {
            const json = response.status !== 204 ?
                await response.json() :
                { status: 'deleted' };
            return json;    
        } else {
            throw response;
        }
    }
}

module.exports = {
    RequestMaker
}