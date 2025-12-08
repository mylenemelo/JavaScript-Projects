
let myDictionary = {
    "apple": "A sweet, crunchy fruit",
    "banana": "A long yellow fruit",
    "carrot": "An orange vegetable, good for eyesight",
    "dog": "A loyal animal and popular pet"
};


function showDictionary() {
    
    delete myDictionary["banana"];  

    
    let selectedKey = "carrot";

    
    document.getElementById("Dictionary").innerHTML =
        "The value for '" + selectedKey + "' is: " + myDictionary[selectedKey];

    
    console.log("Current dictionary after deletion:", myDictionary);
}