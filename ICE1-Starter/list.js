// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
let list = document.getElementById("thelist");



// ADD NEW ITEM TO END OF LIST
// Create element
let element = document.createElement("li");
// Create text node
let text = document.createTextNode("cream");
// Add text node to element
element.appendChild(text);
// Add element end of list
list.appendChild(element);


// ADD NEW ITEM START OF LIST
// Create element
element = document.createElement("li");
// Create text node
text = document.createTextNode("spinach");
// Add text node to element
element.appendChild(text);
// Add element to list
list.insertBefore(element,list.firstChild);



// All <li> elements
let items = document.querySelectorAll("li");    



// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Loop through elements
// add a counter
let counter = 0;
for (let i = 0; i < items.length; i++) {
    // Change class to cool
    items[i].className = "cool";
    counter++;
}
alert(counter);
// So for the above block of code, we needed a add a class to all list item as well as a loop count. So instead of using two seperate loops for the same outcome, we used a single loop and added counter to it itself.




// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
let h2 = document.querySelector("h2");
// h2 text
let h2Text = h2.firstChild.nodeValue;
// No. of <li> elements
let noOfItems = items.length;
// Content
let content = h2Text + "<span>" + noOfItems + "</span>";
// Update h2 using innerHTML (not textContent) because it contains markup
h2.innerHTML = content;
