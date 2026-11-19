function showNotification(message, type) {
    var box = document.getElementById("notification-box");
    if (!box) return;

    // 1. Set the message
    box.textContent = message;

    // 2. Control background color from JS (success or danger only)
    if (type === "success") {
        box.style.backgroundColor = "#10B981";
    } else {
        box.style.backgroundColor = "#E54646";
    }

    // 3. Show the box
    box.style.display = "block";

    // 4. Hide after 3 seconds
    setTimeout(function () {
        box.style.display = "none";
    }, 3000);
}


     function addCategory() {
        // 1. Get the category name from the input field
        var categoryName = document.getElementById("category-name").value.trim();
        var categoryStatus = document.getElementById("category-status").value;

        // 2. Validate the category name
        if (categoryName === "") {
           showNotification("Please enter a category name.", "danger");
            return;
        }

        // 3. Validate the category status
        if (categoryStatus === "") {
            showNotification("Please select a status.", "danger");
            return;
        }

        showNotification("Category added successfully!", "success");
        document.getElementById("category-form").reset();
        return;
    }