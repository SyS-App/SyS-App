// All basic utils

// Initialize Date
const date = new Date();
// Get current year
const currentYear: number = date.getFullYear();

// (Personal): Get my year from environment variable
const getDevYear = currentYear - parseInt(process.env.NEXT_PUBLIC_DEVYEAR || "0", 10);


export { date, currentYear, getDevYear };