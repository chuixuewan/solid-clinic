
import { v4 as uuidv4 } from 'uuid';
import { Appointment } from '../.ldo/fhir.typings';


/**
 * Gets the substring of the input string before the keyword "profile".
 * 
 * @param input - The input string to process.
 * @returns The substring before the keyword "profile", or the original string if the keyword is not found.
 */
export function getStringBeforeProfile(input: string): string {
    const keyword = "profile";
    const index = input.indexOf(keyword);
  
    if (index !== -1) {
      return input.substring(0, index);
    }
  
    // If "profile" is not found, return the original string (or handle as needed)
    return input;
  }
  

 

  export function generate2ByteUUID (): string{
  // Generate a UUID v1 (time-based)
  const uuid = uuidv4();

  // Extract the last 2 bytes (4 hex characters) of the UUID
  const lastTwoBytes = uuid.slice(-4);

  return lastTwoBytes;
};

/**
 * Generates a random integer between min (inclusive) and max (inclusive).
 * @param min - The minimum value of the range (inclusive).
 * @param max - The maximum value of the range (inclusive).
 * @returns A random integer between min and max.
 */
const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Generates an array of random integers within the specified range and size.
 * @param min - The minimum value of the range (inclusive).
 * @param max - The maximum value of the range (inclusive).
 * @param size - The size of the array to generate.
 * @returns An array of random integers.
 */
export const generateRandomIntegers = (min: number, max: number, size: number): number[] => {
  const randomIntegers: number[] = [];
  for (let i = 0; i < size; i++) {
    randomIntegers.push(getRandomInt(min, max));
  }
  return randomIntegers;
};

/**
 * Parses a date string in the format "YYYY-MM-DD" and returns a Date object.
 * @param dateString - The date string to parse.
 * @returns A Date object representing the given date string.
 */
const parseDate = (dateString: string): Date => {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day); // month is 0-indexed in JavaScript Date
};

/**
 * Generates a random date between the start and end dates (inclusive).
 * @param startDate - The start date of the range (inclusive).
 * @param endDate - The end date of the range (inclusive).
 * @returns A random Date object between startDate and endDate.
 */
const getRandomDate = (startDate: Date, endDate: Date): Date => {
  const startTimestamp = startDate.getTime();
  const endTimestamp = endDate.getTime();
  const randomTimestamp = Math.floor(Math.random() * (endTimestamp - startTimestamp + 1)) + startTimestamp;
  return new Date(randomTimestamp);
};

/**
 * Generates an array of random dates within the specified date range and size.
 * @param startDateString - The start date of the range (inclusive) in "YYYY-MM-DD" format.
 * @param endDateString - The end date of the range (inclusive) in "YYYY-MM-DD" format.
 * @param size - The size of the array to generate.
 * @returns An array of random Date objects.
 */
export const generateRandomDates = (startDateString: string, endDateString: string, size: number): Date[] => {
  const startDate = parseDate(startDateString);
  const endDate = parseDate(endDateString);
  const randomDates: Date[] = [];
  for (let i = 0; i < size; i++) {
    randomDates.push(getRandomDate(startDate, endDate));
  }
  return randomDates;
};

// Example usage:
const randomDates = generateRandomDates("2022-02-01", "2022-12-31", 10);
console.log(randomDates); // Output: An array of 10 random Date objects between the specified range

export const getSimpleDate = (): string => {
  const date = new Date();

// Extract the year, month, and day
const year = date.getFullYear();
const month = date.getMonth() + 1; // Months are zero-based, so add 1
const day = date.getDate();
const issued = `${year}-${month}-${day}`;
return issued;
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};
