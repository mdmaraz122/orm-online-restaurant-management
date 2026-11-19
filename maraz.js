function showNotification(message, type) {
    var box = document.getElementById("notification-box");


    // 1. Set the message
    box.innerHTML = message;

    // 2. Control background color from JS (success or danger only)
    if (type === "success") {
        box.style.backgroundColor = "#10B981";
    } else {
        box.style.backgroundColor = "#E54646";
    }
    // make sound
    document.getElementById('audio').play();
    // 3. Show the box
    box.style.display = "block";

    // 4. Hide after 3 seconds
    setTimeout(function() {
        box.style.display = "none";
    }, 3000);
}

// Add category function
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

function updateCategory() {
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

    showNotification("Category updated successfully!", "success");
    document.getElementById("category-update-form").reset();
    return;
}

function deleteCategory() {
    // Show a confirmation dialog
    var confirmation = confirm("Are you sure you want to delete this category?");

    if (confirmation) {
        showNotification("Category deleted successfully!", "success");
    } else {
        showNotification("Category deletion canceled.", "danger");
    }
}

function addProduct() {
    // 1. Get the product name from the input field
    var productName = document.getElementById("product-name").value.trim();
    var productCategory = document.getElementById("product-category").value.trim();
    var productPurchasePrice = document.getElementById("product-purchase-price").value.trim();
    var productSellingPrice = document.getElementById("product-selling-price").value.trim();
    var productStatus = document.getElementById("product-status").value;

    // 2. Validate the product name
    if (productName === "") {
        showNotification("Please enter a product name.", "danger");
        return;
    }

    // 2. Validate the product category
    if (productCategory === "") {
        showNotification("Please select a category.", "danger");
        return;
    }

    // 2. Validate the product purchase price
    if (productPurchasePrice === "") {
        showNotification("Please enter a purchase price.", "danger");
        return;
    }
    // validate the purchase must be a number
    if (isNaN(productPurchasePrice) || Number(productPurchasePrice) < 0) {
        showNotification("Please enter a valid purchase price.", "danger");
        return;
    }

    // 2. Validate the product selling price
    if (productSellingPrice === "") {
        showNotification("Please enter a selling price.", "danger");
        return;
    }
    // validate the selling price must be a number
    if (isNaN(productSellingPrice) || Number(productSellingPrice) < 0) {
        showNotification("Please enter a valid selling price.", "danger");
        return;
    }

    // 3. Validate the product status
    if (productStatus === "") {
        showNotification("Please select a status.", "danger");
        return;
    }

    showNotification("Product added successfully!", "success");
    document.getElementById("product-form").reset();
    return;
}

function updateProduct() {
    // 1. Get the product name from the input field
    var productName = document.getElementById("product-name").value.trim();
    var productCategory = document.getElementById("product-category").value.trim();
    var productPurchasePrice = document.getElementById("product-purchase-price").value.trim();
    var productSellingPrice = document.getElementById("product-selling-price").value.trim();
    var productStatus = document.getElementById("product-status").value;
    // 2. Validate the product name
    if (productName === "") {
        showNotification("Please enter a product name.", "danger");
        return;
    }
    // 2. Validate the product category
    if (productCategory === "") {
        showNotification("Please select a category.", "danger");
        return;
    }
    // 2. Validate the product purchase price
    if (productPurchasePrice === "") {
        showNotification("Please enter a purchase price.", "danger");
        return;

    }
    // validate the purchase must be a number
    if (isNaN(productPurchasePrice) || Number(productPurchasePrice) < 0) {
        showNotification("Please enter a valid purchase price.", "danger");
        return;
    }
    // 2. Validate the product selling price
    if (productSellingPrice === "") {
        showNotification("Please enter a selling price.", "danger");
        return;
    }
    // validate the selling price must be a number
    if (isNaN(productSellingPrice) || Number(productSellingPrice) < 0) {
        showNotification("Please enter a valid selling price.", "danger");
        return;
    }
    // 3. Validate the product status
    if (productStatus === "") {
        showNotification("Please select a status.", "danger");
        return;
    }
    // If all validations pass, show success notification
    showNotification("Product updated successfully!", "success");
    return;
}
// Delete product function
function deleteProduct() {
    // Show a confirmation dialog
    var confirmation = confirm("Are you sure you want to delete this product?");

    if (confirmation) {
        showNotification("Product deleted successfully!", "success");
    } else {
        showNotification("Product deletion canceled.", "danger");
    }

}

function loadMoreProducts() {
    showNotification("Loading more products...", "success");
}