/**
 * Gets the current date
 * @returns {Date} The current date and time
 */
function getActualDate() {
    return new Date();
}

/**
 * Gets the current date as a formatted string
 * @param {string} format - Optional format string (default: 'YYYY-MM-DD')
 * @returns {string} Formatted date string
 */
function getActualDateString(format) {
    const date = new Date();
    
    if (!format || format === 'YYYY-MM-DD') {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    
    // Return ISO string as fallback
    return date.toISOString();
}

/**
 * Checks if the current date is a holiday
 * @param {Date} date - Optional date to check (defaults to today)
 * @returns {Object|null} Holiday object with name and date info, or null if not a holiday
 */
function checkHoliday(date) {
    const checkDate = date || new Date();
    const month = checkDate.getMonth() + 1; // getMonth() returns 0-11
    const day = checkDate.getDate();
    const year = checkDate.getFullYear();
    
    // Check if date is between 15/12 and 25/12
    if (month === 12 && day >= 15 && day <= 25) {
        const christmasWordart = `
    ╔═══════════════════════════════════════╗
    ║                                       ║
    ║      🎄 MERRY CHRISTMAS 🎄           ║
    ║                                       ║
    ║         *     *     *                 ║
    ║        ***   ***   ***                ║
    ║       ***** ***** *****               ║
    ║      *******************              ║
    ║     *********************             ║
    ║            |||||||                    ║
    ║            |||||||                    ║
    ║                                       ║
    ║    🎅 Ho Ho Ho! 🎅                   ║
    ║                                       ║
    ╚═══════════════════════════════════════╝
        `;
        document.writeln(christmasWordart);
    }
}

checkHoliday(new Date());
