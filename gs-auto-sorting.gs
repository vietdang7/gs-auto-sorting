// The numeric index of the column you wish to keep auto-sorted. A = 1, B = 2,
// and so on.
var SORT_COLUMN_INDEX = 4;
// Whether to sort the data in ascending or descending order.
var ASCENDING = false;
// If you have header rows in your sheet, specify how many to exclude them from
// the sort.
var NUMBER_OF_HEADER_ROWS = 1;

// No need to edit anything below this line for general use.
// Make an improvement? Ping me on GitHub and let me know!

// Keep track of the active sheet.
var activeSheet;

/**
 * Automatically sorts on the pre-defined column.
 *
 * @param {Sheet} sheet The sheet to sort.
 */
function autoSort() {
  // Get the entire set of data for this sheet.
  activeSheet = SpreadsheetApp.getActiveSheet();
  var range = activeSheet.getDataRange();

  // Then, if there are any header rows, offset our range to remove them from
  // it; otherwise, they will end up being sorted as well.
  if (NUMBER_OF_HEADER_ROWS > 0) {
    // Setting the second parameter of offset() to 0 to prevents it from
    // shifting any columns. Note that row headers wouldn't make much
    // sense here, but this is where you would modify it if you
    // wanted support for those as well.
    range = range.offset(NUMBER_OF_HEADER_ROWS, 0);
  }

  // Perform the actual sort.
  range.sort( {
    column: SORT_COLUMN_INDEX,
    ascending: ASCENDING
  } );
}

/**
 * Triggers when a sheet is edited, and calls the auto sort function if the
 * edited cell is in the column we're looking to sort.
 *
 * @param {Object} event The triggering event.
 */
function onChange(event) {
  //var editedCell;

  // Update the active sheet in case it changed.
  activeSheet = SpreadsheetApp.getActiveSheet();
  // Get the cell that was just modified.
  //editedCell = activeSheet.getActiveCell();

  // Only trigger a re-sort if the user edited data in the column they're
  // sorting by; otherwise, we perform unnecessary additional sorts if
  // the targeted sort column's data didn't change.
  //if (editedCell.getColumn() == SORT_COLUMN_INDEX) {
    autoSort(activeSheet);
  //}
}

/**
 * Runs when the sheet is opened.
 *
 * @param {Object} event The triggering event.
 */
function onOpen(event) {
  activeSheet = SpreadsheetApp.getActiveSheet();
  autoSort(activeSheet);
}

/**
 * Runs when the add-on is installed; calls onOpen() to ensure any initializion
 * work is done immediately.
 *
 * @param {Object} event The triggering event.
 */
function onInstall(event) {
  onOpen(event);
}
