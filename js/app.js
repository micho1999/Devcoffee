// Funktion zum Speichern der Daten im LocalStorage
function saveDataToLocalStorage(description, date, category, number) {
  const expenseData = {
    description: description,
    date: date,
    category: category,
    number: parseFloat(number) // Konvertierung des Betrags in eine Zahl
  };

  let expenses = localStorage.getItem('expenses');
  if (expenses === null) {
    expenses = [];
  } else {
    expenses = JSON.parse(expenses);
  }

  expenses.push(expenseData);
  localStorage.setItem('expenses', JSON.stringify(expenses));

  // Direktes Einfügen der neuen Zeile in die Tabelle mit Balance
  const tableBody = document.getElementById('expenseTableBody');
  const newRow = tableBody.insertRow(-1);

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);

  cell1.textContent = description;
  cell2.textContent = date;
  cell3.textContent = category;
  cell4.textContent = number;
  cell5.textContent = calculateBalance(expenses.length - 1); // Berechne die Balance für die neue Zeile
}

// Rest des Codes bleibt unverändert
// ...

// Formular-Ereignis zum Speichern und Anzeigen von Daten
document.getElementById('expenseForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;
  const category = document.getElementById('category').value;
  const number = document.getElementById('number').value;

  saveDataToLocalStorage(description, date, category, number);
  document.getElementById('expenseForm').reset();
});

// Laden der gespeicherten Daten beim Seitenladen
window.onload = loadSavedData;

// Funktion zum Berechnen des Balance-Betrags
function calculateBalance(index) {
  const expenses = JSON.parse(localStorage.getItem('expenses'));
  let balance = 10000; // Standardbetrag

  for (let i = 0; i <= index; i++) {
    balance -= expenses[i].number;
  }

  return balance.toFixed(2);
}
