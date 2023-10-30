// Date diff
const msPerSeconds = 1000
const msPerMinutes = msPerSeconds * 60
const msPerHour = msPerMinutes * 60
const msPerDay = msPerHour * 24

const date1 = new Date("06/30/2019");
const date2 = new Date("07/30/2019");

const Difference_In_Time = date2.getTime() - date1.getTime();
const Difference_In_Days = Difference_In_Time / msPerDay;
const Difference_In_Hours = Difference_In_Time / msPerHour;

console.log(Difference_In_Time);
console.log(Difference_In_Days);
console.log(Difference_In_Hours);

// Date add/subsctract
const numberOfDaysToAdd = 30;

date1.setDate(date1.getDate() + numberOfDaysToAdd);

console.log(date1.getTime() == date2.getTime());

for (const iterator of object) {
    
}