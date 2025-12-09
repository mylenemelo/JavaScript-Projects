function concat_Method() {
    // Create two strings to combine
    let part1 = "JavaScript ";
    let part2 = "is awesome!";

    // Use concat() to join them
    let result = part1.concat(part2);

    // Display result
    document.getElementById("concat_result").innerHTML = result;
}


// --------------------------
// slice() METHOD
// --------------------------
function slice_Method() {
    // A sample sentence
    let sentence = "I am learning JavaScript string methods.";

    // Slice out the word "JavaScript"
    let section = sentence.slice(14, 24);

    // Display the sliced string
    document.getElementById("slice_result").innerHTML = section;
}


// --------------------------
// toString() METHOD
// --------------------------
function string_Method() {
    // A number value
    let number = 2025;

    // Convert number to string
    let str = number.toString();

    // Display the result
    document.getElementById("string_result").innerHTML =
        "Number as a string: " + str;
}


// --------------------------
// toPrecision() METHOD
// --------------------------
function precision_Method() {
    // A floating number
    let num = 3.14159265359;

    // Format number to a set precision
    let precise = num.toPrecision(5);

    // Display result
    document.getElementById("precision_result").innerHTML =
        "Number to precision 5: " + precise;
}