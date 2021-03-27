const React = require('react');

import { VegaLite, Vega } from 'react-vega';



class IdyllVegaLite extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      handler: null
    }
  }

  isVegaSpec() {
    return this.props.mode === 'vega' || (this.props.spec.$schema && this.props.spec.$schema.startsWith("https://vega.github.io/schema/vega/"))
  }

  componentDidMount() {
    const { Handler } = require('vega-tooltip')
    this.setState({
      handler: new Handler().call
    })
  }
  render() {
    const { spec, data, mode, ...props } = this.props;
    let adjustedSpec = spec;

    let Runtime = VegaLite;
    if (this.isVegaSpec()) {
      Runtime = Vega;
      if (!adjustedSpec.data) {
        console.warn('If passing a vega spec you must provide a data object in the spec.');
      }
    } else {
      //vega-lite spec. Modify the spec if data was passed.
      if (data) {
        adjustedSpec = { data: { values: data }, ...spec };
      }
    }

    const { handler } = this.state;
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
