# Polyfill for Promise.prototype.finally

Minimal polyfill for the yet-non-standard `Promise.prototype.finally` function, based on [@domenic comment](https://github.com/domenic/promises-unwrapping/issues/18) on promises specification.

The objective of this `finally` implementation is to provide syntactic sugar over raw promises for executing an action after a promise resolves or rejects while not altering the original result.

## Install

```
npm install promise-prototype-finally
```

## License

WTFPL
