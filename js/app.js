const container = document.querySelector(".container");


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
     .register("./serviceWorker.js",{ scope: "./" })
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}

// Funktion zum Speichern der Daten im LocalStorage
function saveDataToLocalStorage(description, date, category, amount) {
  const expenseData = {
    description: description,
    date: date,
    category: category,
    amount: amount
  };

  let expenses = localStorage.getItem('expenses');
  if (expenses === null) {
    expenses = [];
  } else {
    expenses = JSON.parse(expenses);
  }

  expenses.push(expenseData);
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Funktion zum Laden der gespeicherten Daten in die Tabelle
function loadSavedData() {
  const expenses = localStorage.getItem('expenses');
  if (expenses !== null) {
    const tableBody = document.getElementById('expenseTableBody');

    JSON.parse(expenses).forEach(expense => {
      const newRow = tableBody.insertRow(-1);

      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
      const cell4 = newRow.insertCell(3);

      cell1.textContent = expense.description;
      cell2.textContent = expense.date;
      cell3.textContent = expense.category;
      cell4.textContent = expense.amount;
    });
  }
}

// Formular-Ereignis zum Speichern und Anzeigen von Daten
document.getElementById('expenseForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;
  const category = document.getElementById('category').value;
  const amount = document.getElementById('amount').value;

  saveDataToLocalStorage(description, date, category, amount);

  const tableBody = document.getElementById('expenseTableBody');
  const newRow = tableBody.insertRow(-1);

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);

  cell1.textContent = description;
  cell2.textContent = date;
  cell3.textContent = category;
  cell4.textContent = amount;

  document.getElementById('expenseForm').reset();
});

// Laden der gespeicherten Daten beim Seitenladen
window.onload = loadSavedData;
