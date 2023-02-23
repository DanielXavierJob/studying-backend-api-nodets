import {
  setYear,
  parseISO
} from 'date-fns'

/**
 * Receives "2023-08-10" and returns "2024-08-10"
 * @param date 
 */
export function getFutureDate(date: string) {
  return setYear(parseISO(date), new Date().getFullYear() + 1);
}