# Change Log
All notable changes to this project will be documented in this file.

## [0.2.0] - 2018-01-14 ##
## BREAKING CHANGE
- [#31](https://github.com/gonebusy/gonebusy-nodejs-client/pull/31)
    - Updated SDK to pass string ids in UUID format for all API endpoints that refer to user, resource, service, schedule, time_window, and pricing_model ids.
    - Date parameters to BookingsController.cancelBookingById and ServicesController.getServiceAvailableSlotsById should now be constructed with moment, rather than simply a String in 'YYYY-MM-DD' form.

### Updated
    - All tests to reflect use of UUID params as well as moment datetime objects.

## [0.1.3] - 2017-06-18 ##
### Added
- [#30](https://github.com/gonebusy/gonebusy-nodejs-client/pull/30) - Booking creation/update now accept optional :name and :description
- [#30](https://github.com/gonebusy/gonebusy-nodejs-client/pull/30) - Booking item response now contains :name, :description, :external_link, :collaborative_link

### Changed
- [#30](https://github.com/gonebusy/gonebusy-nodejs-client/pull/30) - Booking :user_message has been replaced by separate :name and :description

## [0.1.2] - 2017-06-14 ##
### Added
- [#28](https://github.com/gonebusy/gonebusy-nodejs-client/pull/28) - Booking item response now includes :resource_id and :service_id corresponding to Resource providing the Booking and the Service being performed.

## [0.1.1] - 2017-05-25 ##
### Changed
- [#27](https://github.com/gonebusy/gonebusy-nodejs-client/pull/27) - POST /bookings/new :user_id is now a required parameter.

### Added
- [#27](https://github.com/gonebusy/gonebusy-nodejs-client/pull/27) - GET /bookings now supports optional :booker_id parameter to filter retrieved bookings to those made on behalf of :booker_id.

## [0.1.0] - 2017-05-08 ##
### NOTE - This version introduces breaking changes and additions listed below.

### Changed
- [#26](https://github.com/gonebusy/gonebusy-nodejs-client/pull/26) - All SDK methods now return Promises.  No need for a proxy async wrapper library such as Bluebird. - [@alexagranov](https://github.com/alexagranov)
- [#26](https://github.com/gonebusy/gonebusy-nodejs-client/pull/26) - CreateBookingBody `:date` attribute is now a DateTime rather than a String. - [@alexagranov](https://github.com/alexagranov)
- [#26](https://github.com/gonebusy/gonebusy-nodejs-client/pull/26) - TimeWindow attribute `:negation` has been renamed to `:unavailable`. - [@alexagranov](https://github.com/alexagranov)

### Added
- [#26](https://github.com/gonebusy/gonebusy-nodejs-client/pull/26) - POST /bookings/new now takes parameters supporting the creation of a recurring Booking. - [@alexagranov](https://github.com/alexagranov)
- [#26](https://github.com/gonebusy/gonebusy-nodejs-client/pull/26) - PUT /bookings/:id now takes parameters supporting the modification of a recurring Booking or instance of such. - [@alexagranov](https://github.com/alexagranov)
- [#26](https://github.com/gonebusy/gonebusy-nodejs-client/pull/26) - DELETE /bookings/:id now takes parameters supporting the cancellation of a recurring Booking or instance of such. - [@alexagranov](https://github.com/alexagranov)

## [0.0.9] - 2017-03-21 ##
### Added
- [#24](https://github.com/gonebusy/gonebusy-nodejs-client/pull/24) - Add schedules array to ServiceResponse - [@alexagranov](https://github.com/alexagranov)

## [0.0.8] - 2017-03-18 ##
### Fixed
- [#23](https://github.com/gonebusy/gonebusy-nodejs-client/pull/23) - Fix type of :gender to String; Add :primary_cal to ResourceResponse - [@alexagranov](https://github.com/alexagranov)

## [0.0.7] - 2017-03-06 ##
### Added
- update GET /schedules for query by resource_id, service_id

## [0.0.6] - 2017-02-13 ##
### Added
- update for HTTPS

## [0.0.5] - 2017-01-19 ##
### Removed
- Unnecessary /user/pros endpoint

## [0.0.4] - 2017-01-19 ##
### Fixed
- Issue #17 - Correct 'pricing_model' (instead of plural) response root for GET/PUT /pricing_models/:id and POST /pricing_models/new

## [0.0.3] - 2017-01-15 ##
### Added
- Pull #14 - adding Service :max_duration support
- CHANGELOG.md

## [0.0.2] - 2016-10-14 ##
- Initial public version

