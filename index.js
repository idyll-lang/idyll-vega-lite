const React = require('react');
const VL = require('react-vega-lite');

class VegaLite extends React.Component {
  render() {
    const data = {
      values: this.props.data
    };
    return (
      <VL {...this.props} data={data} />
    );
  }
}

module.exports = VegaLite;
