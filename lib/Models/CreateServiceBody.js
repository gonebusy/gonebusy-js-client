
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC BETA v2.0 on 03/04/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreateServiceBody
 *
 * @constructor
 */
function CreateServiceBody() {
    this.name = null;     
    this.description = null;     
    this.duration = null;     
    this.userId = null;     
    this.shortName = null;     
    this.priceModelId = null;     
    this.resources = null;     
    this.categories = null;     
    this.apiKey = null;     
    //Append to variable dictionary
    this._variableDict['userId'] = 'user_id';
    this._variableDict['shortName'] = 'short_name';
    this._variableDict['priceModelId'] = 'price_model_id';
    this._variableDict['apiKey'] = 'api_key';
}

CreateServiceBody.prototype = new BaseModel();
CreateServiceBody.prototype.constructor = BaseModel;

/**
 * Service Name
 *
 * @return {string}
 */
CreateServiceBody.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string} value 
 */
CreateServiceBody.prototype.setName = function(value) {
    this.name = value;
};

/**
 * Service Description
 *
 * @return {string}
 */
CreateServiceBody.prototype.getDescription = function() {
    return this.description;
};

/**
 * Setter for Description
 * 
 * @param {string} value 
 */
CreateServiceBody.prototype.setDescription = function(value) {
    this.description = value;
};

/**
 * Duration in minutes of the Service
 *
 * @return {int}
 */
CreateServiceBody.prototype.getDuration = function() {
    return this.duration;
};

/**
 * Setter for Duration
 * 
 * @param {int} value 
 */
CreateServiceBody.prototype.setDuration = function(value) {
    this.duration = value;
};

/**
 * ID of User to create Service for.  You must be authorized to manage this User Id.
 *
 * @return {int|null}
 */
CreateServiceBody.prototype.getUserId = function() {
    return this.userId;
};

/**
 * Setter for UserId
 * 
 * @param {int|null} value 
 */
CreateServiceBody.prototype.setUserId = function(value) {
    this.userId = value;
};

/**
 * Optional abbreviated Service name
 *
 * @return {string|null}
 */
CreateServiceBody.prototype.getShortName = function() {
    return this.shortName;
};

/**
 * Setter for ShortName
 * 
 * @param {string|null} value 
 */
CreateServiceBody.prototype.setShortName = function(value) {
    this.shortName = value;
};

/**
 * Optional Price Model Id
 *
 * @return {int|null}
 */
CreateServiceBody.prototype.getPriceModelId = function() {
    return this.priceModelId;
};

/**
 * Setter for PriceModelId
 * 
 * @param {int|null} value 
 */
CreateServiceBody.prototype.setPriceModelId = function(value) {
    this.priceModelId = value;
};

/**
 * Optional List of comma-separated Resource IDs that will provide this Service, default: API user's resource id
 *
 * @return {string|null}
 */
CreateServiceBody.prototype.getResources = function() {
    return this.resources;
};

/**
 * Setter for Resources
 * 
 * @param {string|null} value 
 */
CreateServiceBody.prototype.setResources = function(value) {
    this.resources = value;
};

/**
 * Optional List of comma-separated Category IDs to associate with Service
 *
 * @return {string|null}
 */
CreateServiceBody.prototype.getCategories = function() {
    return this.categories;
};

/**
 * Setter for Categories
 * 
 * @param {string|null} value 
 */
CreateServiceBody.prototype.setCategories = function(value) {
    this.categories = value;
};

/**
 * Valid API Key for your GoneBusy account
 * (edit in top nav)
 *
 * @return {string}
 */
CreateServiceBody.prototype.getApiKey = function() {
    return this.apiKey;
};

/**
 * Setter for ApiKey
 * 
 * @param {string} value 
 */
CreateServiceBody.prototype.setApiKey = function(value) {
    this.apiKey = value;
};

module.exports = CreateServiceBody;