/**
 * gonebusy
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';


const APIException = require('./APIException');

/**
 * Creates an instance of EntitiesErrorErrorException
 */
class EntitiesErrorErrorException extends APIException {
    /**
     * @constructor
     */
    constructor() {
        super();
        /**
         * description of error
         */
        this.message = null;
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'message', realName: 'message' },
        ]);
    }
}

module.exports = EntitiesErrorErrorException;