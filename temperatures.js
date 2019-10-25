// Dans cet exercice, on vous demande de développer un programme capable 
// d'analyser un relevé de températures pour trouver quelle température se rapproche le plus de zéro.


// Exemple de températures. Ici, -1.7 est le plus proche de 0.

// Implémentez la fonction closestToZero pour retourner la température la plus proche de zéro qui appartient au tableau ts.
//     • Si ts est vide, retournez 0 (zéro).
//     • Si deux nombres sont tout aussi proches de zéro, considérez le nombre positif comme étant le plus proche de zéro (par exemple si ts contient -5 et 5, retournez 5).

// Données :
//     • Les températures sont toujours exprimées avec des nombres flottants allant de -273 à 5526.
//     • Le tableau ts est toujours valide et n’est jamais null.


function closestToZero(ts){
  let maxTemp = Infinity;
  //deal with the case where array is empty
  if (ts.length === 0){
    return 0;
  } else {
    //iterating over the content of the array
    for (let i = 0; i < ts.length; i++) {
      //condition to return the index closest number to 0
        if (Math.abs(ts[i]) < Math.abs(maxTemp)) {
        maxTemp = ts[i];
        //if two numbers are at equal distance to zero, get the positive number
        } else if (Math.abs(ts[i]) === Math.abs(maxTemp)) {
        maxTemp = (maxTemp > ts[i]) ? maxTemp : ts[i];
        }
    }
  }
  return maxTemp;
}

closestToZero(ts)