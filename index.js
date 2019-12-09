const React = require('react');

import { VegaLite } from 'react-vega';
import { Handler } from 'vega-tooltip';


class IdyllVegaLite extends React.Component {
  render() {
    const { spec, data, ...props } = this.props;
    const adjustedSpec = { ...this.props.spec, data: { values: data } };
    return (
      <VegaLite
        {...props}
        spec={adjustedSpec}
        tooltip={new Handler().call} />
    );
  }
}

module.exports = IdyllVegaLite;
