"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _reactVega = require("react-vega");

var _excluded = ["spec", "data", "mode"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var React = require('react');

var IdyllVegaLite = /*#__PURE__*/function (_React$Component) {
  _inherits(IdyllVegaLite, _React$Component);

  var _super = _createSuper(IdyllVegaLite);

  function IdyllVegaLite(props) {
    var _this;

    _classCallCheck(this, IdyllVegaLite);

    _this = _super.call(this, props);
    _this.state = {
      handler: null
    };
    return _this;
  }

  _createClass(IdyllVegaLite, [{
    key: "isVegaSpec",
    value: function isVegaSpec() {
      return this.props.mode === 'vega' || this.props.spec.$schema && this.props.spec.$schema.startsWith("https://vega.github.io/schema/vega/");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _require = require('vega-tooltip'),
          Handler = _require.Handler;

      this.setState({
        handler: new Handler().call
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          spec = _this$props.spec,
          data = _this$props.data,
          mode = _this$props.mode,
          props = _objectWithoutProperties(_this$props, _excluded);

      var adjustedSpec = spec;
      var Runtime = _reactVega.VegaLite;

      if (this.isVegaSpec()) {
        Runtime = _reactVega.Vega;

        if (!adjustedSpec.data) {
          console.warn('If passing a vega spec you must provide a data object in the spec.');
        }
      } else {
        //vega-lite spec. Modify the spec if data was passed.
        if (data) {
          adjustedSpec = _objectSpread({
            data: {
              values: data
            }
          }, spec);
        }
      }

      var handler = this.state.handler;
      return /*#__PURE__*/React.createElement(Runtime, _extends({}, props, {
        spec: adjustedSpec,
        tooltip: handler
      }));
    }
  }]);

  return IdyllVegaLite;
}(React.Component);

_reactVega.VegaLite._idyll = {
  name: 'IdyllVegaLite',
  tagType: 'closed',
  props: [{
    name: 'data',
    type: 'expression',
    example: "`[{x: 0, y: 0}, {x: 1, y: 1}]`"
  }, {
    name: 'spec',
    type: 'expression',
    example: "`{\n  mark: \"line\",\n  encoding: {\n    x: {\n      field: \"x\",\n      type: \"quantitative\"\n    },\n    y: {\n      field: \"y\",\n      type: \"quantitative\"\n    }\n  }\n}`"
  }, {
    name: 'mode',
    type: 'string',
    "default": "\"vega-lite\"",
    example: "\"vega-lite\""
  }, {
    name: 'width',
    type: 'value',
    example: "\"container\""
  }, {
    name: 'height',
    type: 'number',
    example: "300"
  }]
};
module.exports = IdyllVegaLite;
