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

To use with a `vega` specification, set the mode to `vega` and do not pass the
data as a separate parameter:

```
[IdyllVegaLite mode:"vega" spec:`{
   ...
   data: { ... },
   ...
}` /]
```

See https://idyll-lang.github.io/examples/csv/ for example usage.


## Troubleshooting & Tips

### Syntax Errors

Depending on your environment, you may see errors when trying to compile an Idyll document
that depends on this library. In this case, you can compile using the `compileLibs` option
to apply all code transformations to the vega dependencies as well, which will make them
compatible with the rest of the build system:

```
$ idyll --compileLibs
```

or specify in `package.json` with:

```
"idyll": {
  "compileLibs": true
}
```

This option will cause the initial compile time to be slower, but after the first run
the results are cached and so it should be quicker on subsequent compilation.

### Aliasing


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

## Contributors

- Matthew Conlen (https://github.com/mathisonian)
- Dan Marshall (https://github.com/danmarshall)
