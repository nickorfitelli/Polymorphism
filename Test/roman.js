var translateRomanNumeral = function (romanNumeral) {
    // TODO: Implement me!

    var parse = [];
    var value = 0;

    var DIGIT_VALUES = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
      };

    //return null if not string
    if(!(typeof romanNumeral === "string")){
        return null;
    }
    
    //return 0 if empty
    if(romanNumeral.length === 0){
        return 0;
    }
    
    //string to array
    parse = romanNumeral.split('');
    

    //convert each letter to number value
  for (let index = 0; index < parse.length; index++) {
      let current = DIGIT_VALUES[parse[index]];
      let next = DIGIT_VALUES[parse[index +1]];

        //When a smaller numeral appears before a larger one, it becomes a subtractive operation.
        if( current < next){
            value -= current;
        } else value += current;

      
      
  }
    
  return value;
  };

  var out = translateRomanNumeral("XIV")