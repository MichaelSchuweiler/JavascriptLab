/**Dillon Stenberg and Michael Schuweiler*/
/**
 * Created by stenb061 on 1/28/14.
 */

function countCharacters(content) {
    var count = 0;
    for(var i = 0; i < content.length; ++i) {
        count++;
    }
    return count;
}

function allFunctions(){
    var array = new Array(4);
    var index = 0;
    return {
        save: function(content){
            if(array[index] == null){
                array[index] = content;
                index++;
            }
           // return array[index - 1];

        },
        undo: function(){
            if(index == 0 || array[index] == null){
                index = 5;
                if(array[index]==null){
                    index = 4;
                    if(array[index] == null){
                        index = 3;
                        if(array[index] == null){
                            index = 2;
                            if(array[index] == null){
                                index = 1;
                                if(array[index] == null){

                                }
                            }
                        }
                    }

                }
            }

            index--;
            return array[index];

        },
        redo: function(){
            if(index == 5 || array[index] == null){
                index = 0;
                return array[index];
            } else {
                index++;
                return array[index];
            }
        }
    }
}

//Our findText function does not work
function findText(input, content){
    var input2 = parseInt(input);
    var content2 = parseInt(content);
    if(input == content) {
        return input;
    } else if(input != content) {
        //return null;
    }
}

module.exports.countCharacters = countCharacters;
module.exports.findText = findText;
module.exports.allFunctions = allFunctions;
