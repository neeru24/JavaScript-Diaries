let currentDate = new Date();
console.log("Current Date:", currentDate);

let specificDate = new Date(2024, 8, 14, 10, 30, 0);
console.log("Specific Date:", specificDate);

let timeStamp = Date.parse("September 14, 2024 10:30:00");
console.log("Timestamp:", timeStamp);

let year = currentDate.getFullYear();
console.log("Year:", year);

let month = currentDate.getMonth();
console.log("Month:", month);

let day = currentDate.getDate();
console.log("Day of the month:", day);

let weekDay = currentDate.getDay();
console.log("Day of the week:", weekDay);

let hours = currentDate.getHours();
console.log("Hours:", hours);

let minutes = currentDate.getMinutes();
console.log("Minutes:", minutes);

let seconds = currentDate.getSeconds();
console.log("Seconds:", seconds);

let milliseconds = currentDate.getMilliseconds();
console.log("Milliseconds:", milliseconds);

let time = currentDate.getTime();
console.log("Time (Timestamp):", time);

let utcHours = currentDate.getUTCHours();
console.log("UTC Hours:", utcHours);

let newDate = new Date();
newDate.setFullYear(2025);
console.log("Set Year to 2025:", newDate);

newDate.setMonth(0);
console.log("Set Month to January:", newDate);

newDate.setDate(1);
console.log("Set Day of the month to 1:", newDate);

newDate.setHours(8);
console.log("Set Hours to 8:", newDate);

newDate.setMinutes(45);
console.log("Set Minutes to 45:", newDate);

newDate.setSeconds(15);
console.log("Set Seconds to 15:", newDate);

newDate.setMilliseconds(300);
console.log("Set Milliseconds to 300:", newDate);

newDate.setTime(1726350600000);
console.log("Set Time using timestamp:", newDate);

console.log("toString():", newDate.toString());
console.log("toDateString():", newDate.toDateString());
console.log("toTimeString():", newDate.toTimeString());
console.log("toLocaleDateString():", newDate.toLocaleDateString());
console.log("toLocaleTimeString():", newDate.toLocaleTimeString());
console.log("toISOString():", newDate.toISOString());
console.log("toUTCString():", newDate.toUTCString());

let nowTimestamp = Date.now();
console.log("Current Timestamp (Date.now()):", nowTimestamp);

console.log("valueOf():", newDate.valueOf());
