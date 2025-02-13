// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


// This function will calculate 1 employee's bonus!
//
  function calculateIndividualEmployeeBonus( employee ) {  
    let percentage = 0
    switch(employee.reviewRating){
      case 3: percentage = .04;
      break;
      case 4: percentage = .06;
      break;
      case 5: percentage = .1;
      break;
    };
    
    if(employee.employeeNumber.length>=4){
      percentage += .05;
    };

    
    if(employee.annualSalary>65000){
      percentage -= .01;
    }

    if(percentage<0){percentage=0}
    if(percentage>.13){percentage=.13}

    let totalCompensation = parseInt(employee.annualSalary) + parseInt(employee.annualSalary * percentage)
    let totalBonus = Math.round(employee.annualSalary * percentage)
    
    const newObj = {
      "name": employee.name,
      "bonusPercentage": percentage,
      "totalCompensation" : totalCompensation,
      "totalBonus" : totalBonus,
    }
   
   return newObj
  // your logic here
  
  
  // return new object with bonus results
  }

  
function bonusCalc(arr) {
  for (let i=0; i<arr.length; i++){
  console.log(arr[i]);
  console.log(calculateIndividualEmployeeBonus(arr[i]))
  }
}


bonusCalc(employees)
