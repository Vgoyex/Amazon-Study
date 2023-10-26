function squareSum(numbers){
    number = new Array();
    number = [...numbers];
    let sqrNumbers = [];
    let result = 0;
    for(let x in number){
      let sqr = number[x] * number[x]; 
      sqrNumbers.push(sqr);
    }
    for(let x = 0; x < sqrNumbers.length; x++){
        if(sqrNumbers[x+1] == "NaN" ||sqrNumbers[x+1] == undefined ){
            {break}
        }
        if(result != 0){
            result +=  sqrNumbers[x+1];
        }
        else if(result == 0){
            let sum = sqrNumbers[x] + sqrNumbers[x+1];
            result += sum;
        }
      }
    return result;
}

function areYouPlayingBanjo(name) {
    let fl = name.substr(0,1);
    if(name.indexOf("n") !== undefined){
    console.log(name)
}
    if(fl == "r" || fl == "R"){
      return `${name} plays banjo`
    }else{
      return `${name} does not play banjo`
    }
}

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
   if(dna.indexOf("T") !== undefined){
     return dna.replace(/t/gi, "U");
   }else{
     return dna;
   }
}


function simpleArraySum(ar) {
  // Write your code here
  for(let i = 0; i<ar.length;i++){
      console.log(ar[i]);
  }
  let result = ar.reduce((a,b) => a + b);
  return result;
}
// simpleArraySum([10,4,3])