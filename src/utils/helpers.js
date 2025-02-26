/**
 * Subtracts two dates and returns the difference in days.
 * Works with both Date objects and date strings.
 */
export const subtractDates = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffTime = d1.getTime() - d2.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
};

/**
 * Formats a given date as "X days ago" or "In X days" relative to today.
 */
export const formatDistanceFromNow = (dateStr) => {
  const date = new Date(dateStr);
  const today = new Date();
  const diffDays = subtractDates(today, date);

  if (diffDays === 0) return "Today";
  return diffDays > 0 ? `${diffDays} days ago` : `In ${Math.abs(diffDays)} days`;
};

/**
 * Returns today's date as an ISO string.
 * If `end: true` is passed, it sets the time to the last second of the day.
 */
export const getToday = (options = {}) => {
  const today = new Date();

  if (options?.end) {
    today.setHours(23, 59, 59, 999); // Set to end of the day
  } else {
    today.setHours(0, 0, 0, 0); // Set to start of the day
  }

  return today.toISOString();
};

export const formatCurrency = (value, currency = 'USD', locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
};