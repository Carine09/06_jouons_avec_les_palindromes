// let dDay = "15/12/2024"

function maxDaysinMonth(month) {
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        return 31
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11) {
        return 30
    }
    else if (month == 2) {
        return 28
    }
};
console.log(maxDaysinMonth(11));

function isValidDate(date) {
    let dateSplit = date.split("/");
    const maxDays = maxDaysinMonth(dateSplit[1]);

    if (dateSplit.length !== 3) {
        return false
    }
    else if (dateSplit[2] < 999 || dateSplit[2] > 9999) {
        return false
    }
    else if (dateSplit[1] > 12 || dateSplit[1] <= 0) {
        return false
    }
    else if (dateSplit[0] > maxDays || dateSplit[0] < 0) {
        return false
    }
    else {
        return true
    }
;
}

console.log(isValidDate("31/11/2024"));

function isPalindrome() {
    
}

// function formatDate() {
//     let dateSplit = dDayValid.split('-');
//     return dateSplit[0] + '/' + dateSplit[1] + '/' + dateSplit[2];
// }
// console.log(formatDate(dDayValid));

// let dDaySplit = formatDate(dDayValid);
