const React = require('react');

import { VegaLite, Vega } from 'react-vega';



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
    const { spec, data, mode, ...props } = this.props;

    let Runtime = VegaLite;
    if (this.props.mode === 'vega') {
      Runtime = Vega;
    }

    const { handler } = this.state;
    const adjustedSpec = { data: { values: data }, ...this.props.spec };
    return (
      <Runtime
        {...props}
        spec={adjustedSpec}
        tooltip={handler} />
    );
  }
}


VegaLite._idyll = {
  name: 'IdyllVegaLite',
  tagType: 'closed',
  props: [
    {
      name: 'data',
      type: 'expression',
      example: `\`[{x: 0, y: 0}, {x: 1, y: 1}]\``
    },
    {
      name: 'spec',
      type: 'expression',
      example: `\`{
  mark: "line",
  encoding: {
    x: {
      field: "x",
      type: "quantitative"
    },
    y: {
      field: "y",
      type: "quantitative"
    }
  }
}\``
    },
    {
      name: 'mode',
      type: 'string',
      default: `"vega-lite"`,
      example: `"vega-lite"`
    },
    {
      name: 'width',
      type: 'value',
      example: `"container"`
    },
    {
      name: 'height',
      type: 'number',
      example: `300`
    }
  ]
};



module.exports = IdyllVegaLite;
