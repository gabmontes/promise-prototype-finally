const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.should()
chai.use(chaiAsPromised)

require('.')

describe('Promise#finally', function () {
  it('should resolve to the settled value', function () {
    return Promise
      .resolve('ok')
      .finally(() => 'finally')
      .then(value => value.should.equal('ok'))
  })

  it('should resolve to the thrown error', function () {
    return Promise
      .reject(new Error('error'))
      .finally(() => 'finally').should.be.rejectedWith('error')
  })

  it('should overwrite thrown error if finally fails', function () {
    return Promise
      .reject(new Error('error'))
      .finally(() => {
        throw new Error('finally')
      }).should.be.rejectedWith('finally')
  })
})
