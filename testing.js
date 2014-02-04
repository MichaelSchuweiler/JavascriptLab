//Created by Dillon Stenberg and Michael Schuweiler


var assert = require("assert");
var countCharacters = require('./Function').countCharacters;
var findText = require('./Function').findText;
var allFunctions = require('./Function').allFunctions;
var magicMan = allFunctions();


//counts characters in the text field
describe('Count characters', function(){
    describe('test 1', function(){
        it('should count characters within given text', function() {
            assert.equal(countCharacters("happy"), "5");
        })
    })
});

//Tests if it saves twice into an array, then checks if it can run
//undo and then redo, both resulting successful
describe('Save',function(){
    it('should save', function(){
        assert.equal(magicMan.save("happy"),"happy");
    })
    it('should save second time', function(){
        assert.equal(magicMan.save("goodie"), "goodie");
    })
    it('should undo text', function(){
        assert.equal(magicMan.undo(), "happy");
    })
    it('should redo text', function(){
        assert.equal(magicMan.redo(), "goodie");
    })
})

//finds text in the search bar and compares it to text in
//the textarea
describe('find text', function(){
    it('should find given text in text area',function(){
        assert.equal(findText("happy","happy"),"happy")
    })
});




