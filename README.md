# Google Sheets script - Auto sorting column

@author Mike Branski (@mikebranski)
@link https://gist.github.com/mikebranski/285b60aa5ec3da8638e5

I did a small modification for the triggering.

/**
 * This Google Sheets script keeps data in the specified column sorted any time
 * the data changes.
 *
 * After much research, there wasn't an easy way to automatically keep a column
 * sorted in Google Sheets, and creating a second sheet to act as a "view" to
 * my primary one in order to achieve that was not an option. Instead, I
 * created a script that watches for when a cell is edited and triggers
 * an auto sort.
 *
 * To Install:
 *   1. Open your Google Sheet.
 *   2. Navigate to Tools > Script editor…
 *   3. Copy and paste this script in the editor.
 *   4. Change the three constants at the start of the code below to reflect
 *      your preferences.
 *      - Note: My goal is to move these settings to a GUI and have this script
 *              be installable as an add-on.
 *   5. Give the script a name (e.g. "Keep Data Sorted") and hit save.
 *
 * To Use:
 *   Simply edit your Google Sheet like normal. Any time you edit data in your
 *   sort column (specified in `SORT_COLUMN_INDEX`), the script will re-sort
 *   your rows.
 *
 *   If you are having trouble getting it to work, try the following in order:
 *     1. Reload your spreadsheet.
 *     2. Open the script editor (Tools > Script editor…), click the "Select
 *        function" dropdown, choose `onInstall`, and hit Debug (the bug icon
 *        that precedes the dropdown).
 *     3. If that doesn't work, reach out via GitHub (link below) and ask for
 *        help. You may also find that others have run into the same issue
 *        and have already posted a solution.
*/
