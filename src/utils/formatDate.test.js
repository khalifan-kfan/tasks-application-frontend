import formatDate from './formatDate';

describe('formatDate utility function', () => {
  it('formats date correctly', () => {
    const inputDate = '2024-04-08T10:45:00';
    const formattedDate = formatDate(inputDate);
    expect(formattedDate).toBe('Apr 08, 2024, 10:45 AM');
  });
});
