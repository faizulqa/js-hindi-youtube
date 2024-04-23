






const myArr = [0, 1, 2, 3, 4, 5]

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //slice me 1st index ko include kar aur 3 ko exclude kar show kardega.

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) //Splice me original array ko hi jaa kar change kar deta hai.
                                    1st index se le kar 3 index ko remove kar ke update kar dega.
console.log("C ", myArr);
console.log(myn2);