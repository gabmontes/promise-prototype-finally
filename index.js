(function () {
  if (typeof Promise.prototype.finally === 'function') {
    return
  }
  Promise.prototype.finally = function (fn) {
    return this
      .then(value => this.constructor.resolve(fn()).then(() => value))
      .catch(reason => this.constructor.resolve(fn()).then(() => { throw reason }))
  }
})()
