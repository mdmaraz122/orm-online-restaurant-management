
let table = document.getElementById("userTable");
let editingRow = null;

function saveUser() {

    let name = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let role = document.getElementById("userrole").value;
    let status = document.getElementById("userstatus").value;
    let msg = document.getElementById("formMessage");

    if (name === "") {
        msg.className = "error";
        msg.innerHTML = "Error: Full Name cannot be empty!";
        return false;
    }


    if (editingRow !== null) {

        editingRow.cells[1].innerHTML = name;
        editingRow.cells[2].innerHTML = email;
        editingRow.cells[3].innerHTML = role;
        editingRow.cells[4].innerHTML = status;

        let userId = editingRow.cells[0].innerHTML;

        resetForm();

        msg.className = "success";
        msg.innerHTML = "Success: User " + userId + " updated successfully!";

        return false;
    }

   
    let nextNumber = 1;

    for (let i = 1; i < table.rows.length; i++) {

        let oldId = table.rows[i].cells[0].innerHTML;

        let checkId;

        if (nextNumber < 10) {
            checkId = "USR-0" + nextNumber;
        } else {
            checkId = "USR-" + nextNumber;
        }

        if (oldId === checkId) {
            nextNumber++;
            i = 0;
        }
    }

    let userId;

    if (nextNumber < 10) {
        userId = "USR-0" + nextNumber;
    } else {
        userId = "USR-" + nextNumber;
    }

  
    let newRow = table.insertRow();

    newRow.insertCell(0).innerHTML = userId;
    newRow.insertCell(1).innerHTML = name;
    newRow.insertCell(2).innerHTML = email;
    newRow.insertCell(3).innerHTML = role;
    newRow.insertCell(4).innerHTML = status;

    newRow.insertCell(5).innerHTML =
        '<button type="button" onclick="editUser(this)">Edit</button> ' +
        '<button type="button" onclick="deleteUser(this)">Delete</button>';

    resetForm();

    msg.className = "success";
    msg.innerHTML = "Success: New user " + userId + " added successfully!";

    return false;
}



function editUser(btn) {

    let row = btn.parentNode.parentNode;
    editingRow = row;

    document.getElementById("username").value = row.cells[1].innerHTML;
    document.getElementById("email").value = row.cells[2].innerHTML;
    document.getElementById("userrole").value = row.cells[3].innerHTML;
    document.getElementById("userstatus").value = row.cells[4].innerHTML;

    document.getElementById("legend").innerHTML = "Update User";
    document.getElementById("submitBtn").innerHTML = "Update";
}



function deleteUser(btn) {

    let row = btn.parentNode.parentNode;
    let userId = row.cells[0].innerHTML;

    if (confirm("Are you sure you want to delete " + userId + "?")) {

        if (editingRow === row) {
            resetForm();
        }

        row.remove();
    }
}

function resetForm() {

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("userrole").value = "Customer";
    document.getElementById("userstatus").value = "Active";

    editingRow = null;

    document.getElementById("legend").innerHTML = "Add User";
    document.getElementById("submitBtn").innerHTML = "Submit";
    document.getElementById("formMessage").innerHTML = "";
}
