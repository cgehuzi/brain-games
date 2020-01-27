import readlineSync from 'readline-sync';

export default () => {
  const username = readlineSync.question('May I have your name? ');
  return `Hello, ${username}!`;
};
