// PRE-INITIALIZATION
const boyInputEl = document.getElementById("boy")
const girlInputEl = document.getElementById("girl")
const outputEl = document.getElementById("output")
//const loggerEl = document.getElementById("logg")
let flamesArray = ["F", "L", "A", "M", "E", "S"]


console.log("You might want to reload");

function execute() {

    //INITIALIZATION
    let flamesArray = ["F", "L", "A", "M", "E", "S"]
    let difference=''
    let boyName = boyInputEl.value.toLowerCase()  // Making all chars lowercase
    let girlName = girlInputEl.value.toLowerCase()// ^
    boyName = boyName.replace(/\s/g, "")   // Replacing whitespaces in the strings
    girlName = girlName.replace(/\s/g, "") // ^
    boyNameArray = boyName.split("")   // splitting the chars of the name into an array
    girlNameArray = girlName.split("") // ^
    console.log(boyNameArray,girlNameArray);

    // CHARACTER SPLITTING
    const x = boyNameArray.filter(x => !girlNameArray.includes(x))  // makes a new array from girlnamearray which has elements from boynamearray
    const y = girlNameArray.filter(x => !boyNameArray.includes(x))  // ^                      ^boynamearray                         ^girlnamearray
    difference = x.concat(y) // concatinates the elements from both array to delete duplicates

    

    //CUTTING FLAMES
    console.log("difference ", difference.length);
    let lastIndex = 0;
    for (let i = 0; i < 5; i++) {
        console.log(flamesArray)

        const i = difference.length - 1 //index you wanna access (-1 cz its index)
        const n = flamesArray.length //length of the array

        let x = ((i + lastIndex ) % n + n) % n // Adds the index of prev deleted element to the current index value
                                               // And performs a modulo operation for looping through the array in a circular way
        flamesArray.splice(x, 1)
        lastIndex = x

    }

    //RESULT CARRYING AND OUTPUT
    console.log(flamesArray)
    resultChar = flamesArray[0]
    switch (resultChar) {
        case "F":
            outputEl.innerHTML = "Friends"
            console.log("Friends")
            break;
        case "L":
            outputEl.innerHTML = "Love"
            console.log("Love")
            break;
        case "A":
            outputEl.innerHTML = "Affection"
            console.log("Affection")
            break;
        case "M":
            outputEl.innerHTML = "Marriage"
            console.log("Marriage")
            break;
        case "E":
            outputEl.innerHTML = "Enemies"
            console.log("Enemies")
            break;
        case "S":
            outputEl.innerHTML = "Sister"
            console.log("Sister")
            break;

        default:
            break;
    }

}