const elements = {
  showOrHideBtn: document.querySelector('.js-click'),
  hiddenDiv: document.querySelector('.js-hidden'),
  inputRows: document.querySelector('#js-rows'),
  inputColumns: document.querySelector('#js-columns'),
  generateBtn: document.querySelector('.js-generate'),
  deleteBtn: document.querySelector('.js-delete'),
  tableContainer: document.querySelector('.main-container'),
  inputPercentage: document.querySelector('#js-percentage'),
  inputPixel: document.querySelector('#js-pixel'),
  alignLeft: document.querySelector('.align-left'),
  alignCenter: document.querySelector('.align-center'),
  alignRight: document.querySelector('.align-right'),
  fontSize: document.querySelector('#font-size')
};

// Initialize variables for input fields
let columnsInputValue;
let rowsInputValue;
let tableWidthInputValue;
let borderWidthInputValue;

/**
 * Generate table
 **/

const generateCells = numOfColumns => {
  let html = '';

  for (let colIndex = 0; colIndex < numOfColumns; colIndex++) {
    html += `<td class="border-style">Cell ${colIndex + 1}</td>`;
  }

  return html;
};

const generateRows = numOfRows => {
  const cell = generateCells(columnsInputValue);
  let html = '';

  for (let rowIndex = 0; rowIndex < numOfRows; rowIndex++) {
    html += `<tr>${cell}</tr>`;
  }

  return html;
};

const generateTable = () => {
  const markup = `
    <table class="js-table generated-table">
      <thead class="js-thead table-head">
        ${generateRows(1)}
      </thead>
      <tbody class="js-tbody table-body">
        ${generateRows(rowsInputValue - 1)}
      </tbody>
    </table>
  `;
  elements.tableContainer.insertAdjacentHTML('afterbegin', markup);
};

/**
 * Set style for table and cell
 **/

const setStyleForTable = table => {
  table.style.width = `${tableWidthInputValue}%`;
  table.style.border = `${borderWidthInputValue}px solid #4d5256`;
  table.style.borderCollapse = 'collapse';
  table.style.tableLayout = 'fixed';
  //table.fontSize = `${setFontSize()}px`;
}

const setStyleForTableCells = cells => {
  cells.forEach(cell => cell.style.border = `${borderWidthInputValue}px solid #4d5256`);
}

/**
 * Delete table, clear input value
 **/

const deleteTable = () => {
  elements.tableContainer.innerHTML = '';
};

const clearInputValue = () => {
  elements.inputColumns.value = '';
  elements.inputRows.value = '';
  elements.inputPercentage.value = '';
  elements.inputPixel.value = '';
};

/**
 * Request json data
 **/

const requestData = async () => {
  const requestURL =
    'https://raw.githubusercontent.com/jonathantneal/google-fonts-complete/master/google-fonts.json';

  const response = await fetch(requestURL);
  const jsonResponse = await response.json();
};

const generateFontSizeOptions = () => {
  const optionsContainer = elements.fontSize;
  let size = 1;

  for (let optionIndex = 0; optionIndex < 99; optionIndex++) {
    optionsContainer.insertAdjacentHTML(
      'afterbegin',
      `<option value="${size}">${size}</option>`
    );
    size++;
  }

  return elements.fontSize.options;
};

const setFontSize = () => {
  
};

/**
 * Add Event Listener
 */

// Add table
elements.generateBtn.addEventListener('click', () => {
  // Receive input in number format
  columnsInputValue = parseInt(elements.inputColumns.value);
  rowsInputValue = parseInt(elements.inputRows.value);
  tableWidthInputValue = parseInt(elements.inputPercentage.value);
  borderWidthInputValue = parseInt(elements.inputPixel.value);
  
  // Generate table
  generateTable();

  // Set styles
  const table = document.querySelector('.js-table');
  const tableCells = document.querySelectorAll('.border-style');
  setStyleForTable(table);
  setStyleForTableCells(tableCells);

  // Clear all input fields
  clearInputValue();
});

// Delete table
elements.deleteBtn.addEventListener('click', deleteTable);

// Align text
elements.alignLeft.addEventListener('click', () => {
  document.querySelector('.generated-table').style.textAlign = 'left';
});
elements.alignCenter.addEventListener('click', () => {
  document.querySelector('.generated-table').style.textAlign = 'center';
});
elements.alignRight.addEventListener('click', () => {
  document.querySelector('.generated-table').style.textAlign = 'right';
});


const init = () => {
  generateFontSizeOptions();
};

init();
