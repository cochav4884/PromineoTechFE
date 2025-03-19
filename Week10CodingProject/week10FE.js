// Set background image
document.body.style.backgroundImage =
  "url('https://images.unsplash.com/photo-1610632380989-680fe40816c6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
document.body.style.backgroundSize = 'cover'; // Cover the entire screen
document.body.style.backgroundPosition = 'center'; // Center the background image
document.body.style.backgroundAttachment = 'fixed'; // Make the background fixed while scrolling

// Add row functionality
document
  .getElementById('addRowForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const drinksCoffee = document.getElementById('drinksCoffee').value;
    const cupsOfCoffee = document.getElementById('cupsOfCoffee').value;

    // Get the table body
    const tbody = document.querySelector('#dataTable tbody');

    // Create a new row
    const newRow = document.createElement('tr');

    // Check the number of existing rows and set color based on even/odd index
    const rowCount = tbody.children.length; // Count existing rows

    if (rowCount % 2 === 0) {
      newRow.style.backgroundColor = '#f6b62a'; // Light red
    } else {
      newRow.style.backgroundColor = '#705211'; // Light green
    }

    // Add cells to the row
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${age}</td>
      <td>${drinksCoffee}</td>
      <td>${cupsOfCoffee}</td>
      <td><button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button></td>
    `;

    // Append the new row to the table
    tbody.appendChild(newRow);

    // Add the row to the table (to the tbody)
    document.querySelector('#dataTable tbody').appendChild(newRow);

    // Clear the form inputs
    document.getElementById('addRowForm').reset();
  });

// Function to delete a row
function deleteRow(button) {
  const row = button.closest('tr');
  row.remove();
}
