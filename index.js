const React = require('react');

import { VegaLite } from 'react-vega';



class IdyllVegaLite extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      handler: null
    }
  }

  componentDidMount() {
    const { Handler } = require('vega-tooltip')
    this.setState({
      handler: new Handler().call
    })
  }
  render() {
    const { spec, data, ...props } = this.props;
    const { handler } = this.state;
    const adjustedSpec = { ...this.props.spec, data: { values: data } };
    return (
      <VegaLite
        {...props}
        spec={adjustedSpec}
        tooltip={handler} />
    );
  }
}

module.exports = IdyllVegaLite;
