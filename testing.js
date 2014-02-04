

/**
* Created by stenb061 on 1/28/14.
*/


var assert = require("assert");
var countCharacters = require('./Function').countCharacters;
var saveText = require('./Function').saveText;
var findText = require('./Function').findText;
var allFunctions = require('./Function').allFunctions;
var magicMan = allFunctions();



describe('Count characters', function(){
    describe('test 1', function(){
      it('should count characters within given text', function() {
        assert.equal(countCharacters("happy"), "5");
      })
    })
});


describe('Save',function(){
  it('should save', function(){
      assert.equal(magicMan.save("happy"),"happy");
  })
})


    describe('find text', function(){
        it('should find given text in text area',function(){
            assert.equal(findText("happy","happy"),"happy")
        })
});




