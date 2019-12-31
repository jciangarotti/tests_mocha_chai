const assert = require('chai').assert
const calculator = require('../app/calculator')
describe('Calculator tests using ASSERT interface from CHAI module:', function(){
  describe('Check addTested Fucntion: ', function(){
    it('Check the returned value using: assert.equal(value, "value" ): ', function() {
      result = calculator.addTested('text')
      assert.equal(result, "text tested")
    })
    it('Checked returned value using: assert.typeof(value, "value")', function () {
      result = calculator.addTested('test')
      assert.typeOf(result, 'string')
    })
    it('Check the returned value using: assert.lengthOf(value, "value")', function() {
      result = calculator.addTested('test')
      assert.lengthOf(result, 11)
    })
  })
})