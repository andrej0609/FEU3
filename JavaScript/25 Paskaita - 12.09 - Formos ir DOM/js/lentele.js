
const form = document.querySelector('form');
const table = document.createElement('table');
const tbody = document.createElement('tbody');
table.appendChild(tbody);
document.body.appendChild(table);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const rows = form.elements.rows.value;
  const columns = form.elements.columns.value;
  tbody.innerHTML = '';
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < columns; j++) {
      const td = document.createElement('td');
      td.textContent = `${i + 1} - ${j + 1}`;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
});




