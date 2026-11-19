const orders = [
  { id: "#1042", customer: "Rahim Uddin", items: "Beef Tehari x2", total: 640, status: "Pending" },
  { id: "#1041", customer: "Nadia Islam", items: "Chicken Biryani, Borhani", total: 420, status: "Delivered" },
  { id: "#1040", customer: "Karim Hossain", items: "Kacchi Biryani x3", total: 1350, status: "Preparing" },
  { id: "#1039", customer: "Sadia Rahman", items: "Fish Curry, Rice", total: 380, status: "Cancelled" }
];

function showGreeting() {
  let hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  document.getElementById("greeting").innerHTML = greeting + ", Admin";
  document.getElementById("today").innerHTML = new Date().toDateString();
}

function showCards() {
  let pending = 0;
  let delivered = 0;
  let sales = 0;

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].status == "Pending" || orders[i].status == "Preparing") {
      pending++;
    }
    if (orders[i].status == "Delivered") {
      delivered++;
    }
    if (orders[i].status != "Cancelled") {
      sales += orders[i].total;
    }
  }

  const stats = [
    { label: "Total Orders", value: orders.length },
    { label: "Open Orders", value: pending },
    { label: "Delivered", value: delivered },
    { label: "Sales (Tk)", value: sales }
  ];

  let box = document.getElementById("cards");
  for (let i = 0; i < stats.length; i++) {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = "<span>" + stats[i].label + "</span><strong>" + stats[i].value + "</strong>";
    box.appendChild(card);
  }
}

function showOrders() {
  let body = document.getElementById("orders-body");

  for (let i = 0; i < orders.length; i++) {
    let row = document.createElement("tr");
    row.innerHTML = "<td>" + orders[i].id + "</td>" +
                    "<td>" + orders[i].customer + "</td>" +
                    "<td>" + orders[i].items + "</td>" +
                    "<td>" + orders[i].total + "</td>";

    let statusCell = document.createElement("td");
    statusCell.innerHTML = orders[i].status;
    statusCell.style.fontWeight = "bold";

    if (orders[i].status == "Delivered") {
      statusCell.style.color = "green";
    } else if (orders[i].status == "Cancelled") {
      statusCell.style.color = "red";
    } else {
      statusCell.style.color = "orange";
    }

    row.appendChild(statusCell);
    body.appendChild(row);
  }
}

document.getElementById("toggle-btn").addEventListener("click", function () {
  let sidebar = document.getElementById("sidebar");
  let button = document.getElementById("toggle-btn");

  if (sidebar.style.display == "none") {
    sidebar.style.display = "block";
    button.innerHTML = "Hide Menu";
  } else {
    sidebar.style.display = "none";
    button.innerHTML = "Show Menu";
  }
});

document.getElementById("logout-btn").addEventListener("click", function () {
  if (confirm("Log out of the admin panel?")) {
    window.location.href = "login.html";
  }
});

showGreeting();
showCards();
showOrders();