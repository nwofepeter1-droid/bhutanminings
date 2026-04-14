let balance = localStorage.getItem("balance");

if (balance === null) {
  balance = 0;
} else {
  balance = parseInt(balance);
}

function updateUI() {
  document.getElementById("output").innerText =
    "Balance: " + balance + " BTC";
}

function mine() {
  let reward = Math.floor(Math.random() * 10) + 1;
  balance += reward;

  localStorage.setItem("balance", balance);
  updateUI();
}

function login() {
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("dashboard").classList.remove("hidden");
  updateUI();
}

updateUI();