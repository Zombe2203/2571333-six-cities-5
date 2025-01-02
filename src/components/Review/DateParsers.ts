export const parseDateWord = (date: Date) =>
  new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: 'long',
  }).format(date);

export const parseDateNumber = (date: Date) =>
  new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
