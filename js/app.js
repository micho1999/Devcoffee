const container = document.querySelector(".container");


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
     .register("./serviceWorker.js",{ scope: "./" })
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}

// displayData.js

document.getElementById('expenseForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Daten aus dem Formular erfassen
  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;
  const category = document.getElementById('category').value;
  const amount = document.getElementById('amount').value;

  // Daten in die Tabelle einfügen
  const tableBody = document.getElementById('expenseTableBody');
  const newRow = tableBody.insertRow(-1); // Neue Zeile am Ende der Tabelle einfügen

  // Zellen für jede Spalte erstellen und Daten einfügen
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);

  cell1.textContent = description;
  cell2.textContent = date;
  cell3.textContent = category;
  cell4.textContent = amount;

  // Formular zurücksetzen
  document.getElementById('expenseForm').reset();
});

