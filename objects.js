// Object is a collection of properties. each property have a value.


var person = {
    firstName: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 0, 28).toJSON,

    address: {

      city: "London",
      postCode: "SW9",
    }
};
 console.log (person.firstName);
 console.log (person.age);
 console.log (person.balance);
 console.log (person.address.city);
 console.log (Object.values(person));
 console.log (Object.keys(person));
 console.log (JSON.stringify(person));

 // object is storer of data. Keys and values