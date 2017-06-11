'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IdyllComponent = require('idyll-component');
var VL = require('react-vega-lite').default;

var VegaLite = function (_IdyllComponent) {
  _inherits(VegaLite, _IdyllComponent);

  function VegaLite() {
    _classCallCheck(this, VegaLite);

    return _possibleConstructorReturn(this, (VegaLite.__proto__ || Object.getPrototypeOf(VegaLite)).apply(this, arguments));
  }

  _createClass(VegaLite, [{
    key: 'render',
    value: function render() {
      var data = {
        values: this.props.data
      };
      return React.createElement(VL, _extends({}, this.props, { data: data }));
    }
  }]);

  return VegaLite;
}(IdyllComponent);

module.exports = VegaLite;
