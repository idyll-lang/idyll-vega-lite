# idyll-vega-lite
Idyll wrapper component for vega lite

## Usage

```
$ npm install --save idyll-vega-lite vega vega-lite
```

In your Idyll markup,

```
[IdyllVegaLite data:myDataset spec:`{
  mark: "line",
  encoding: {
    x: {
      field: ...,
      type: ...
    },
    y: {
      field: ...,
      type: ...
    }
  }
}` /]

```

See https://idyll-lang.github.io/examples/csv/ for example usage.
