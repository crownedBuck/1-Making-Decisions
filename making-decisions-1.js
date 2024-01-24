let johnSnowAttack = 25
let jamieLanisterAttack = 35

let johnSnowHealth = 100
let johnSnowDefense = 0

// if (johnSnowAttack > jamieLanisterAttack) {
//     console.log("John Snow has the greater attack.")
// } else if (johnSnowAttack < jamieLanisterAttack) {
//     console.log("Jamie Lanister has the greater attack.")
// } else {
//     console.log("Jamie and John have equivalent attacks.")
// }

/* 

if else block to determine if John can survive an attack from Jamie.
if john doesn't have enough health to live through the attack, console.log his death
otherwise, update his health to reflect the damage from the attack

*/

// johnSnowDefense += 10

// if (johnSnowHealth <= jamieLanisterAttack - johnSnowDefense) {
//     console.log("John is perished")
// } else {

//     johnSnowHealth = johnSnowHealth - (jamieLanisterAttack - johnSnowDefense)
//     console.log(johnSnowHealth)
// }

/*
Health potion
*/

/*

for (let attack = 0; attack < 5; attack++) {
    johnSnowHealth = johnSnowHealth - (jamieLanisterAttack - johnSnowDefense)

//     if (johnSnowHealth < 100 && johnSnowHealth > 50) {
//         johnSnowHealth = 100
//         console.log(johnSnowHealth)
//     } else if (johnSnowHealth <= 50 && johnSnowHealth > 0) {
//         johnSnowHealth += 50
//         console.log(johnSnowHealth)
//     } else if (johnSnowHealth <= 0) {
//         console.log("John is dead")
//         break
//     } else {
//         console.log("John is fine")
//     }

    if (johnSnowHealth > 0) {
        console.log(johnSnowHealth)
    } else {
        console.log("John is dead. Poor John. No throne for you.")
        break
    }
   
}
*/


while (johnSnowHealth > 0) {
    johnSnowHealth = johnSnowHealth - (jamieLanisterAttack - johnSnowDefense)

    if (johnSnowHealth > 0) {
        console.log(johnSnowHealth)
    } else {
        console.log("John is dead. Poor John. No throne for you.")
    }

}