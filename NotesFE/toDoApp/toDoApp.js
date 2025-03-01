// let id = 0;
// document.getElementById("add").addEventListener("click", () => {
//     let createdDate = new Date();
//     let table = document.getElementById("list");
//     let row = table.insertRow(1);
//     row.setAttribute("id", `item-${id}`)
//     row.insertCell(0).innerHTML = document.getElementById("new-task").value;
//     row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
//     row.insertCell(2).innerHTML = document.getElementById("new-start-date").value;
//     row.insertCell(3).innerHTML = document.getElementById("new-end-date").value;
//     let actions = row.insertCell(4);
//     actions.appendChild(createDeleteButton(id++));
//     document.getElementById("new-task").value = "";
// });

// function createDeleteButton(id) {
//     let deleteBtn = document.createElement("button");
//     btn.className = "btn btn-primary";
//     btn.id = id;
//     btn.innerHTML = "Delete";
//     btn.onclick = function () {
//       console.log(`Deleting item with id: test-${id}`);
//       let elementToDelete = document.getElementById(`item-${id}`);
//       elementToDelete.parentNode.removeChild(elementToDelete);
//     };
//     return btn;  
// }



let id = 0;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add").addEventListener("click", () => {
        let taskValue = document.getElementById("new-task").value.trim();
        let startDate = document.getElementById("new-start-date").value;
        let endDate = document.getElementById("new-end-date").value;

        if (!taskValue) {
            alert("Task cannot be empty!");
            return;
        }

        let createdDate = new Date();
        let formattedDate = `${createdDate.getFullYear()}-${(createdDate.getMonth() + 1)
            .toString().padStart(2, "0")}-${createdDate.getDate().toString().padStart(2, "0")}`;

        let table = document.getElementById("list").getElementsByTagName("tbody")[0];
        let row = table.insertRow(0); // Insert at the top
        
        const rowId = id; // Store current ID before incrementing
        row.setAttribute("id", `item-${rowId}`);

        row.insertCell(0).textContent = taskValue;
        row.insertCell(1).textContent = formattedDate;
        row.insertCell(2).textContent = startDate || "N/A";
        row.insertCell(3).textContent = endDate || "N/A";

        // Create delete button
        let actions = row.insertCell(4);
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger btn-sm";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => {
            console.log(`Deleting item with id: ${rowId}`);
            // Remove the row from the table
            document.getElementById(`item-${rowId}`).remove();
        };

        actions.appendChild(deleteBtn);
        id++; // Increment ID after setting rowId

        // Clear input fields
        document.getElementById("new-task").value = "";
        document.getElementById("new-start-date").value = "";
        document.getElementById("new-end-date").value = "";
    });
});


