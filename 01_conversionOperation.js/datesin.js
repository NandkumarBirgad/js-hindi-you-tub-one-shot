// Creating a new Date object for the current date and time
let myDate = new Date()

// Displaying the current date in different formats
console.log("Current date as string:", myDate.toString())
console.log("Current date (date only):", myDate.toDateString())
console.log("Current date in ISO format:", myDate.toISOString())

// Creating a Date object from a string (note: format should be YYYY-MM-DD for consistency)
let createDate = new Date("2023-01-04");  // Changed to ISO format for better reliability

// Displaying the created date in different formats
console.log("Created date object:", createDate)
console.log("Created date (date only):", createDate.toDateString())
console.log("Created date in JSON format:", createDate.toJSON())
console.log("Created date time (locale):", createDate.toLocaleTimeString())

// Getting the current timestamp in milliseconds
let timeStamp = Date.now()
console.log("Current timestamp (milliseconds):", timeStamp)

// Getting the timestamp for the created date
console.log("Created date timestamp:", createDate.getTime())

// Converting current timestamp to seconds (floor division)
console.log("Current timestamp in seconds:", Math.floor(Date.now() / 1000))

