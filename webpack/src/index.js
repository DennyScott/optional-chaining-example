const personOne = {
    firstName: "Denny",
    lastName: "Scott",
    contact: {
      phoneNumber: 555-555-5555,
      twitter: "@gitinbit"
    }
  }
  
  function getUserForPhoneDirectory(person) {
    const firstName = person?.firstName;
    const lastName = person?.lastName;
    const phoneNumber = person?.contact?.phoneNumber;
  
    if(firstName && lastName && phoneNumber) {
      return `${firstName} ${lastName} - ${phoneNumber}`
    }
  }
  
  getUserForDirectory(personOne);  //expect: Denny Scott - 555-555-5555