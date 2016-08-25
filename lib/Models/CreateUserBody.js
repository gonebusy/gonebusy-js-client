
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC BETA v2.0 on 03/04/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreateUserBody
 *
 * @constructor
 */
function CreateUserBody() {
    this.email = null;     
    this.firstName = null;     
    this.lastName = null;     
    this.businessName = null;     
    this.externalUrl = null;     
    this.permalink = null;     
    this.timezone = null;     
    this.apiKey = null;     
    //Append to variable dictionary
    this._variableDict['firstName'] = 'first_name';
    this._variableDict['lastName'] = 'last_name';
    this._variableDict['businessName'] = 'business_name';
    this._variableDict['externalUrl'] = 'external_url';
    this._variableDict['apiKey'] = 'api_key';
}

CreateUserBody.prototype = new BaseModel();
CreateUserBody.prototype.constructor = BaseModel;

/**
 * User's email address
 *
 * @return {string}
 */
CreateUserBody.prototype.getEmail = function() {
    return this.email;
};

/**
 * Setter for Email
 * 
 * @param {string} value 
 */
CreateUserBody.prototype.setEmail = function(value) {
    this.email = value;
};

/**
 * Optional first name
 *
 * @return {string|null}
 */
CreateUserBody.prototype.getFirstName = function() {
    return this.firstName;
};

/**
 * Setter for FirstName
 * 
 * @param {string|null} value 
 */
CreateUserBody.prototype.setFirstName = function(value) {
    this.firstName = value;
};

/**
 * Optional last name
 *
 * @return {string|null}
 */
CreateUserBody.prototype.getLastName = function() {
    return this.lastName;
};

/**
 * Setter for LastName
 * 
 * @param {string|null} value 
 */
CreateUserBody.prototype.setLastName = function(value) {
    this.lastName = value;
};

/**
 * Optional name for your Business/Organization
 *
 * @return {string|null}
 */
CreateUserBody.prototype.getBusinessName = function() {
    return this.businessName;
};

/**
 * Setter for BusinessName
 * 
 * @param {string|null} value 
 */
CreateUserBody.prototype.setBusinessName = function(value) {
    this.businessName = value;
};

/**
 * Optional website URL
 *
 * @return {string|null}
 */
CreateUserBody.prototype.getExternalUrl = function() {
    return this.externalUrl;
};

/**
 * Setter for ExternalUrl
 * 
 * @param {string|null} value 
 */
CreateUserBody.prototype.setExternalUrl = function(value) {
    this.externalUrl = value;
};

/**
 * Optional vanity url - ex: www.gonebusy.com/[permalink] - must be unique
 *
 * @return {string|null}
 */
CreateUserBody.prototype.getPermalink = function() {
    return this.permalink;
};

/**
 * Setter for Permalink
 * 
 * @param {string|null} value 
 */
CreateUserBody.prototype.setPermalink = function(value) {
    this.permalink = value;
};

/**
 * Optional timezone
 *
 * @return {string|null}
 */
CreateUserBody.prototype.getTimezone = function() {
    return this.timezone;
};

/**
 * Setter for Timezone
 * 
 * @param {string|null} value 
 */
CreateUserBody.prototype.setTimezone = function(value) {
    this.timezone = value;
};

/**
 * Valid API Key for your GoneBusy account
 * (edit in top nav)
 *
 * @return {string}
 */
CreateUserBody.prototype.getApiKey = function() {
    return this.apiKey;
};

/**
 * Setter for ApiKey
 * 
 * @param {string} value 
 */
CreateUserBody.prototype.setApiKey = function(value) {
    this.apiKey = value;
};

module.exports = CreateUserBody;