const elements = {
  showOrHideBtn: document.querySelector('.js-click'),
  hiddenDiv: document.querySelector('.js-hidden'),
  inputRows: document.querySelector('#js-rows'),
  inputColumns: document.querySelector('#js-columns'),
  generateBtn: document.querySelector('.js-generate'),
  deleteBtn: document.querySelector('.js-delete'),
  tableHead: document.querySelector('.js-thead'),
  tableBody: document.querySelector('.js-tbody'),
  table: document.querySelector('.js-table')
};

/** Hide or show input fields, generate btn and hidden btn */
elements.showOrHideBtn.addEventListener('click', () => {
  elements.hiddenDiv.classList.toggle('hidden');
});

/**
 * Generate table rows
 **/
const generateTable = () => {
  const rowsInputValue = parseInt(elements.inputRows.value);
  const columnsInputValue = parseInt(elements.inputColumns.value);

  for (let rowIndex = 0; rowIndex < rowsInputValue; rowIndex++) {
    let row = elements.tableBody.insertRow(rowIndex);

    for (let columnIndex = 0; columnIndex < columnsInputValue; columnIndex++) {
      if (rowIndex === 0) {
        let cellHead = row.insertCell(columnIndex);
        cellHead.innerHTML = `RowHed ${rowIndex +
          1} -  ColumnHead ${columnIndex + 1}`;
      } else if (rowIndex >= 1) {
        let cell = row.insertCell(columnIndex);
        cell.innerHTML = `Row ${rowIndex + 1} -  Column ${columnIndex + 1}`;
      }
    }
  }
};

const deleteTable = () => {
  elements.tableBody.innerHTML = ' ';
};

const clearInputValue = () => {
  elements.inputColumns.value = ' ';
  elements.inputRows.value = ' ';
};

/** 
 * Add Event Listener
*/

// Add table 
elements.generateBtn.addEventListener('click', () => {
  generateTable();
  clearInputValue();
});

// Delete table
elements.deleteBtn.addEventListener('click', deleteTable);
