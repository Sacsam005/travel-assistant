"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWeatherData = exports.getPlacesData = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable consistent-return */
var getPlacesData = function getPlacesData(type, sw, ne) {
  var _ref, data;

  return regeneratorRuntime.async(function getPlacesData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("https://travel-advisor.p.rapidapi.com/".concat(type, "/list-in-boundary"), {
            params: {
              bl_latitude: sw.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              tr_latitude: ne.lat
            },
            headers: {
              'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
          }));

        case 3:
          _ref = _context.sent;
          data = _ref.data.data;
          return _context.abrupt("return", data);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getPlacesData = getPlacesData;

var getWeatherData = function getWeatherData(lat, lng) {
  var _ref2, data;

  return regeneratorRuntime.async(function getWeatherData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get('https://community-open-weather-map.p.rapidapi.com/find', {
            params: {
              lon: lng,
              lat: lat
            },
            headers: {
              'x-rapidapi-key': process.env.REACT_APP_RAPID_API_API_KEY,
              'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
            }
          }));

        case 3:
          _ref2 = _context2.sent;
          data = _ref2.data;
          return _context2.abrupt("return", data);

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getWeatherData = getWeatherData;