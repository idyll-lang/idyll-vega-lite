# idyll-vega-lite
Idyll wrapper component for vega lite

## Usage

```
$ npm install --save idyll-vega-lite
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


For more readable code, set an alias for the component name:

```
[Plot 
  data:myDataset 
  spec:`{
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
  }` 
/]

```

by updating the `idyll.alias` property in `package.json`:

```
"idyll": {
  ...,
  "alias": {
    "Plot": "IdyllVegaLite"
  }
}
```

See https://idyll-lang.github.io/examples/csv/ for example usage.
