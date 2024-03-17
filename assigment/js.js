//Object (person)

var person = {
    firstName: "Lovasz",
    lastName: "Szilard"
};

console.log()

//array (list of people)

let people = [
    { firstName: "Kate", lastName: "Bush" },
    { firstName: "Taylor", lastName: "Swift" },
    { firstName: "Ethel", lastName: "Cain" }
    ];



//The array has 3 persons, find the 2nd person in the array and add for that person a new property 
//age with value 25. Display the array to verify the 2nd person's age. 


let peoples = [
    { firstName: "Kate", lastName: "Bush" },
    { firstName: "Taylor", lastName: "Swift" },
    { firstName: "Ethel", lastName: "Cain" }
    ];

let secondPerson = peoples[1];
    
secondPerson.age = 25;
    
console.log(peoples);