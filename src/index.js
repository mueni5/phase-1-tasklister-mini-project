document.addEventListener("DOMContentLoaded", () => {
  // your code here

});
const checkbox = document.querySelector("#id-checkbox");

checkbox.addEventListener("click", checkboxClick, false);

function checkboxClick(event) {
  let warn = "preventDefault() won't let you check this!<br>";
  document.getElementById("output-box").innerHTML += warn;
  event.preventDefault();
}

// Get the select element and list element
const select = document.getElementById('priority-select');
const list = document.getElementById('priority-list');
// Add event listener for select element
select.addEventListener('change', () => {
  // Get the selected value
  const selectedValue = select.value;
  // Remove existing priority classes from list
  list.classList.remove('high-priority', 'medium-priority', 'low-priority');
  // Add the selected priority class to the list
  list.classList.add(`${selectedValue}-priority`);
});


function sortTasks() {
  // Get the list and all its list items
  const list = document.getElementById('task-list');
  const items = list.querySelectorAll('li');
  // Convert the list items to an array
  const itemsArray = Array.from(items);
  // Sort the array of items based on priority
  itemsArray.sort((a, b) => {
    const aPriority = a.querySelector('.priority').textContent;
    const bPriority = b.querySelector('.priority').textContent;
    if (aPriority < bPriority) {
      return -1;
    } else if (aPriority > bPriority) {
      return 1;
    } else {
      return 0;
    }
  });
  // Reverse the array if the "Sort" button has been clicked twice
  if (list.dataset.sorted === 'true') {
    itemsArray.reverse();
  }
  // Remove the existing list items from the list
  items.forEach(item => item.remove());
  // Add the sorted list items to the list
  itemsArray.forEach(item => list.appendChild(item));
  // Toggle the sorted attribute of the list
  list.dataset.sorted = (list.dataset.sorted !== 'true').toString();
}


function deleteAllTasks() {
  const list = document.getElementById('task-list');
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}