function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email && password) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboard").classList.remove("hidden");
  } else {
    alert("Enter email & password");
  }
}

// Fake features

function showPrediction() {
  alert("📈 Demand Prediction:\nNext Month: 340 Units\nGrowth: High");
}

function optimizeRoute() {
  alert("🛣 Optimized Route:\nDistance: 162 km\nETA: 2h 15m");
}

function showReports() {
  alert("📊 Reports:\nOrders: 320\nCompleted: 280\nCancelled: 10");
}