// PRE-INITIALIZATION
const boyInputEl = document.getElementById("boy")
const girlInputEl = document.getElementById("girl")
const outputEl = document.getElementById("output")


function execute() {

    //INITIALIZATION
    let flamesArray = ["F", "L", "A", "M", "E", "S"]
    let difference=''
    let boyName = boyInputEl.value
    let girlName = girlInputEl.value
    boyNameArray = boyName.split("")
    girlNameArray = girlName.split("")

    // CHARACTER SPLITTING
    const x = boyNameArray.filter(x => !girlNameArray.includes(x));
    const y = girlNameArray.filter(x => !boyNameArray.includes(x));
    difference = x.concat(y);

    //CUTTING FLAMES
    console.log("difference ", difference.length);
    for (let i = 0; i < 5; i++) {
        console.log(flamesArray)
        const i = difference.length //index you wanna access
        const n = flamesArray.length
        flamesArray.splice((i % n + n) % n, 1)
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