// PRE-INITIALIZATION
const boyInputEl = document.getElementById("boy")
const girlInputEl = document.getElementById("girl")
const outputEl = document.getElementById("output")
const loggerEl = document.getElementById("logg")
let flamesArray = ["F", "L", "A", "M", "E", "S"]

function execute() {

    //INITIALIZATION
    let flamesArray = ["F", "L", "A", "M", "E", "S"]
    let difference=''
    let boyName = boyInputEl.value.toLowerCase()
    let girlName = girlInputEl.value.toLowerCase()
    if(boyName == "" || girlName == ""){
        
    }
    boyName = boyName.replace(/\s/g, "")
    girlName = girlName.replace(/\s/g, "")
    boyNameArray = boyName.split("")
    girlNameArray = girlName.split("")
    console.log(boyNameArray,girlNameArray);

    // CHARACTER SPLITTING
    const x = boyNameArray.filter(x => !girlNameArray.includes(x));
    const y = girlNameArray.filter(x => !boyNameArray.includes(x));
    difference = x.concat(y);

    //CUTTING FLAMES
    console.log("difference ", difference.length);
    //loggerEl.innerHTML = `Difference ${difference.length} <br>`
    let lastIndex = 0;
    for (let i = 0; i < 5; i++) {
        console.log(flamesArray)
        //loggerEl.innerHTML += `${flamesArray} <br>`
        const i = difference.length - 1 //index you wanna access
        const n = flamesArray.length
        //console.log();
        let x = ((i + lastIndex ) % n + n) % n
        flamesArray.splice(x, 1)
        lastIndex = x
        //console.log(lastIndex)
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