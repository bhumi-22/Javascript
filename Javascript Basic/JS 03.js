const netflix = ["The sound of magic","a","b"]
const prime = ["s", "a", "b", "c"]
prime.push(netflix)
console.log(prime);
console.table(prime);
const series = [...netflix, ...prime]
console.log(series);


