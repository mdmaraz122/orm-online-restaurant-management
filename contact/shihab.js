
function validateAndReply() {

  
    let msgId = document.getElementById("msgid").value.trim();
    let replyText = document.getElementById("replymsg").value.trim();
    let newStatus = document.getElementById("statusselect").value;
    let statusMsg = document.getElementById("statusMessage");

    
    if (msgId === "") {
        statusMsg.className="error";
        statusMsg.innerHTML = "Error: Message ID cannot be empty!";
        return false;
    }

    if (replyText === "") {
        statusMsg.className="error";
        statusMsg.innerHTML = "Error: Please write an Admin Reply before sending!";
        return false;
    }

   
    let table = document.getElementById("msgtable");
    let isFound = false;

    for (let i = 1; i < table.rows.length; i++) {

        let rowId = table.rows[i].cells[0].innerHTML.trim();

        if (rowId === msgId) {

           
            table.rows[i].cells[5].innerHTML = newStatus;

            isFound = true;
            break;
        }
    }

    if (isFound === false) {
        statusMsg.className= "error";
        statusMsg.innerHTML = "Error: Message ID '" + msgId + "' not found in the table!";
        return false;
    }

    statusMsg.className = "success";
    statusMsg.innerHTML = "Success: Reply sent for " + msgId +
        " (Status updated to " + newStatus + ").";

    document.getElementById("replymsg").value = "";

    return false;
}


function deleteMessage(event) {

    let confirmDelete = confirm("Are you sure you want to delete this customer message?");

    if (confirmDelete) {

        let button = event.target;

        let row = button.closest("tr");

        row.remove();

    }
}

function clearMessage() {

    document.getElementById("statusMessage").innerHTML = "";

}
