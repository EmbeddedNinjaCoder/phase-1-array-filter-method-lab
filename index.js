// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


const findMatching = (driverDB, searchName) => {
  const anyMatches = driverDB.filter(element => element.toLowerCase() === searchName.toLowerCase())
  return anyMatches
}


const fuzzyMatch = (driverDB, searchName) => {
    const anyFuzzyMatches = driverDB.filter(element => {
        if ( 
            (element[0].toLowerCase() === searchName[0].toLowerCase())
             && 
            (element[1].toLowerCase() === searchName[1].toLowerCase()) 
        ) {return true}
        
        else 
        
          {return false}
    } )
    return anyFuzzyMatches
}

// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];

  const matchName = (driverDB, searchName) => {
    const anyMatches = driverDB.filter(element => element.name.toLowerCase()  === searchName.toLowerCase())
    return anyMatches
  }
  
