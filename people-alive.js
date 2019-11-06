// Développer un programme qui permette de répondre à la question suivante : 
// le programme prend en entrée un tableau avec les dates de naissances et éventuellement 
// de décès de plusieurs personnes. En sortie, le programme doit donner l'année (ou une des années) 
// où il y a le plus de personnes en vie.

// Exemples:
// cas 1 : 
// [{naissance: 1991, mort: undefined},
// {naissance: 1991, mort: 1993}, 
// {naissance: 1993, mort: undefined}] -> la réponse est 1991

// Cas 2 : 
// [{naissance: 1920, mort: 1944},
// {naissance: 1933, mort: 1944}] -> la réponse est 1933

// Cas 3 : 
// [{naissance: 1920, mort: 1944},
// {naissance: 1933, mort: 1944},
// {naissance: 1921, mort: 2000}] -> la réponse est 1933
// ]

// Cas 4 : 
// [{naissance: 1920, mort: 1944},
// {naissance: 1933, mort: 1944},
// {naissance: 1921, mort: 2000},
// {naissance: 1965, mort: undefined},
// {naissance: 1955, mort: undefined},
// {naissance: 1965, mort: undefined}] -> la réponse est 1965


  function peopleAlive(arr) {
    let years = {};
    let count = 0;
    let arr2 = [];
  
  //iterate through all element in array
    for (let i = 0; i < arr.length; i++) {
      //change undefined by current year//
      if (arr[i].mort === undefined) {
            arr[i].mort = 2019
          }
      //iterate through all years between naissance to mort and push date and 
      //value into a new arr//
      for (let j = arr[i].naissance; j < arr[i].mort; j++) {
          years.date = j
          years.value = count + 1
          arr2.push({naissance: years.date, total: years.value})
      }
    }
  //sort this new arr to see all same element//
  arr2.sort((a, b) => a.naissance - b.naissance ? 1 : -1)
  let result = new Object();
  //iterate through this array and group together same years and value into new object//
  for(let i = 0; i < arr2.length; i++) {
   if(result[arr2[i].naissance] != null) {
    result[arr2[i].naissance] += 1;
    } else {
    result[arr2[i].naissance] = 1;
    }
}
  //find the keys with maximum values and 
  //take the first element where the maximum value is//
  let year = Object.keys(result).reduce((a, b) => result[b] > result[a] ? b : a);
  return year
  }

  peopleAlive(arr)