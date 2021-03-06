/**
 * gonebusy
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _customAuthUtility = require('../CustomAuthUtility');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

class ResourcesController {
    /**
     * Delete a Resource by id
     *
     * @param {string} authorization A valid API key, in the format 'Token API_KEY'
     * @param {string} id TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteResourceById(authorization, id, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/resources/{id}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            id,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            Authorization: authorization,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'DELETE',
            headers: _headers,
        };
        // append custom auth authorization
        _customAuthUtility.appendCustomAuthParams(_options);


        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'DeleteResourceByIdResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Bad Request';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Bad Request', errorCode: 400, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 401) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Unauthorized/Missing Token';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Unauthorized/Missing Token',
                        errorCode: 401,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Forbidden';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Forbidden', errorCode: 403, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Not Found';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Not Found', errorCode: 404, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * Update a Resource by id, with params
     *
     * @param {string} authorization A valid API key, in the format 'Token API_KEY'
     * @param {string} id TODO: type description here
     * @param {UpdateResourceByIdBody} updateResourceByIdBody (optional) the content of the
     * request
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateResourceById(authorization, id, updateResourceByIdBody, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/resources/{id}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            id,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            Authorization: authorization,
        };

        // remove null values
        _apiHelper.cleanObject(updateResourceByIdBody);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'PUT',
            headers: _headers,
            body: _apiHelper.jsonSerialize(updateResourceByIdBody),
        };
        // append custom auth authorization
        _customAuthUtility.appendCustomAuthParams(_options);


        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'UpdateResourceByIdResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Bad Request';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Bad Request', errorCode: 400, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 401) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Unauthorized/Missing Token';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Unauthorized/Missing Token',
                        errorCode: 401,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Forbidden';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Forbidden', errorCode: 403, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Not Found';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Not Found', errorCode: 404, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 422) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Unprocessable Entity';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Unprocessable Entity',
                        errorCode: 422,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * Return a Resource by id.
     *
     * @param {string} authorization A valid API key, in the format 'Token API_KEY'
     * @param {string} id TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getResourceById(authorization, id, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/resources/{id}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            id,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            Authorization: authorization,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };
        // append custom auth authorization
        _customAuthUtility.appendCustomAuthParams(_options);


        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'GetResourceByIdResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Bad Request';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Bad Request', errorCode: 400, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 401) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Unauthorized/Missing Token';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Unauthorized/Missing Token',
                        errorCode: 401,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Forbidden';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Forbidden', errorCode: 403, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Not Found';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Not Found', errorCode: 404, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * Return all Resource Things.
     *
     * @param {string} authorization A valid API key, in the format 'Token API_KEY'
     * @param {int} page (optional) Page offset to fetch.
     * @param {int} perPage (optional) Number of results to return per page.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getResourceThings(authorization, page, perPage, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/resources/things'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            page: (page !== null) ? page : 1,
            per_page: (perPage !== null) ? perPage : 10,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            Authorization: authorization,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };
        // append custom auth authorization
        _customAuthUtility.appendCustomAuthParams(_options);


        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'GetResourceThingsResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Bad Request';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Bad Request', errorCode: 400, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 401) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Unauthorized/Missing Token';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Unauthorized/Missing Token',
                        errorCode: 401,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Forbidden';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Forbidden', errorCode: 403, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * Create a Resource with params
     *
     * @param {string} authorization A valid API key, in the format 'Token API_KEY'
     * @param {CreateResourceBody} createResourceBody (optional) the content of the request
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createResource(authorization, createResourceBody, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/resources/new'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            Authorization: authorization,
        };

        // remove null values
        _apiHelper.cleanObject(createResourceBody);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(createResourceBody),
        };
        // append custom auth authorization
        _customAuthUtility.appendCustomAuthParams(_options);


        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'CreateResourceResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Bad Request';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Bad Request', errorCode: 400, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 401) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Unauthorized/Missing Token';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Unauthorized/Missing Token',
                        errorCode: 401,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Forbidden';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Forbidden', errorCode: 403, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 422) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Unprocessable Entity';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Unprocessable Entity',
                        errorCode: 422,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * Return list of Resources.
     *
     * @param {string} authorization A valid API key, in the format 'Token API_KEY'
     * @param {uuid|string} userId (optional) Retrieve Resources owned only by this User Id.  You
     * must be authorized to manage this User Id.
     * @param {int} page (optional) Page offset to fetch.
     * @param {int} perPage (optional) Number of results to return per page.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getResources(authorization, userId, page, perPage, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/resources'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            user_id: userId,
            page: (page !== null) ? page : 1,
            per_page: (perPage !== null) ? perPage : 10,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            Authorization: authorization,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };
        // append custom auth authorization
        _customAuthUtility.appendCustomAuthParams(_options);


        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'GetResourcesResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 401) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Unauthorized/Missing Token';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Unauthorized/Missing Token',
                        errorCode: 401,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Forbidden';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Forbidden', errorCode: 403, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'EntitiesErrorException');
                    mappedObject.reason = 'Not Found';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Not Found', errorCode: 404, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

}

module.exports = ResourcesController;
