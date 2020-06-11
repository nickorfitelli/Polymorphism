class CountryMinimumAgeChecker{

  //set the default age for driving,drinking,and voting to be 21
  constructor(age) {
      this.age = age;
      this.country = "most countries";
      
  }

  //takes in an integer for age and returns true or false if that age is allowed to drive in that country
  isOfDrivingAge(value){
    if(value >= 21) return true
    else return false
  }

   //takes in an integer for age and returns true or false if that age is allowed to drive in that country
  isOfVotingAge(value){
    if(value >= 21) return true
    else return false
    
  }

   //takes in an integer for age and returns true or false if that age is allowed to drive in that country
  isOfDrinkingAge(value){
    if(value >= 21) return true
      else return false
  }
}

class UsaMinimumAgeChecker extends CountryMinimumAgeChecker{

  constructor(age) {
    super(age);
    this.country = "USA";

    }


isOfDrivingAge(value){
  if(value >= 16) return true
  else return false
}

isOfVotingAge(value){
  if(value >= 18) return true
  else return false
  
}

isOfDrinkingAge(value){
  if(value >= 21) return true
    else return false
}

}

class CanadaMinimumAgeChecker extends CountryMinimumAgeChecker{
    
  constructor(age) {
    super(age);
    this.country = "Canada";

    }


isOfDrivingAge(value){
  if(value >= 16) return true
  else return false
}

isOfVotingAge(value){
  if(value >= 18) return true
  else return false
  
}

isOfDrinkingAge(value){
  if(value >= 19) return true
    else return false
}

}

class FranceMinimumAgeChecker extends CountryMinimumAgeChecker{
    constructor(age) {
        super(age);
        this.country = "France";

        }
    
    
    isOfDrivingAge(value){
      if(value >= 15) return true
      else return false
    }
    
    isOfVotingAge(value){
      if(value >= 18) return true
      else return false
      
    }
    
    isOfDrinkingAge(value){
      if(value >= 18) return true
        else return false
    }

}

function minimumAgeChecker(age,array) {
    array.forEach(element => {

    const person = new element(age);

    console.log("If you are " + age + " years old:")

    console.log("\tYou can Drink in " + person.country + ": " + person.isOfDrinkingAge(age));
    console.log("\tYou can Drive in " + person.country + ": "  + person.isOfDrivingAge(age));
    console.log("\tYou can Vote in " + person.country + ": "  + person.isOfVotingAge(age));

    console.log("...................................................");

    });
}


const array = [CountryMinimumAgeChecker,UsaMinimumAgeChecker,CanadaMinimumAgeChecker,FranceMinimumAgeChecker];
var age = 17;
minimumAgeChecker(age,array);

//UsaMinimumAgeChecker,CanadaMinimumAgeChecker,FranceMinimumAgeChecker
//are classes that inherit from CountryMinimumAgeChecker

//wikipedia page to check ages...if multiple ages, go with the minimum, if no ages, assume 21 is the correct age.

//driving - https://en.wikipedia.org/wiki/List_of_minimum_driving_ages
//voting - https://en.wikipedia.org/wiki/Voting_age
//drinking - https://en.wikipedia.org/wiki/Legal_drinking_age

//for extra credit create another function that takes an array of person objects like the one below and prints to the screen their status for an array of country checkers
//person = {name: "John Doe", age:17}



//minimumAgeChecker(age,array)

//for extra credit add additional countries other than Usa,Canada, and France to the array and create minimum age checker classes for them


//post link learn

