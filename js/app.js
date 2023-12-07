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

  // Aktualisiere den Betrag in der Tabelle
  if (expenses.length > 1) {
    const lastAmount = expenses[expenses.length - 2].number;
    updateAmountInTable(lastAmount, expenseData.number);
  }
}

// Funktion zum Laden der gespeicherten Daten in die Tabelle
function loadSavedData() {
  const expenses = localStorage.getItem('expenses');
  if (expenses !== null) {
    const tableBody = document.getElementById('expenseTableBody');
    const expensesArray = JSON.parse(expenses);

    expensesArray.forEach(expense => {
      const newRow = tableBody.insertRow(-1);

      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
      const cell4 = newRow.insertCell(3);

      cell1.textContent = expense.description;
      cell2.textContent = expense.date;
      cell3.textContent = expense.category;
      cell4.textContent = expense.number.toFixed(2);
    });
  }
}

// Funktion zum Aktualisieren des Betrags in der Tabelle
function updateAmountInTable(lastAmount, newAmount) {
  const table = document.getElementById('expenseTable');
  const rows = table.getElementsByTagName('tr');
  const lastRow = rows[rows.length - 1];
  const cells = lastRow.getElementsByTagName('td');

  const currentAmount = parseFloat(cells[3].textContent);
  const updatedAmount = currentAmount - lastAmount;
  cells[3].textContent = updatedAmount.toFixed(2);

  // Aktualisiere den Betrag der letzten Zeile mit dem neuen Betrag
  const newCells = rows[rows.length - 1].getElementsByTagName('td');
  const updatedNewAmount = parseFloat(newCells[3].textContent) - newAmount;
  newCells[3].textContent = updatedNewAmount.toFixed(2);
}

// Restlicher Code bleibt unverändert
// ...

// Formular-Ereignis zum Speichern und Anzeigen von Daten
document.getElementById('expenseForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;
  const category = document.getElementById('category').value;
  const number = document.getElementById('amount').value;

  saveDataToLocalStorage(description, date, category, number);

  const tableBody = document.getElementById('expenseTableBody');
  const newRow = tableBody.insertRow(-1);

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);

  cell1.textContent = description;
  cell2.textContent = date;
  cell3.textContent = category;
  cell4.textContent = number;

  document.getElementById('expenseForm').reset();
});

// Laden der gespeicherten Daten beim Seitenladen
window.onload = loadSavedData;
