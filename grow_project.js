const inputBox=document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    
    if(inputBox.value ===''){
        alert("You don't enter any task ! ");
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        const cross = document.createElement("span");
        
        
        cross.innerHTML ="\u00d7";
        cross.className = "cross"; 
        li.appendChild(cross);
        listContainer.appendChild(li);
    }
    inputBox.value ="";
}
// // Get the parent element that the li elements are being appended to
const parentElement = document.querySelector('#list-container');

// // Add a click event listener to the parent element
parentElement.addEventListener('click', function(event) {
//   // Check if the target element clicked is an li element
  if (event.target.nodeName === 'LI') {
    if (event.target.style.textDecoration.includes("line-through")) {
      event.target.style.textDecoration = "";
    } else {
      event.target.style.textDecoration = "line-through";
    }
  }
});



let removeButton = document.getElementById('removeButton');
listContainer.addEventListener('click', function(event) {
  // Check if the target element clicked has the "cross" class
  if (event.target.classList.contains('cross')) {
    const li = event.target.parentNode; // Get the parent li element
    listContainer.removeChild(li); // Remove the li element from the list container
  }
});