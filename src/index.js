import readlineSync from 'readline-sync';

export const getUserName = (question) => {
  const userName = readlineSync.question(question);
  return userName;
};

export const sayHello = (userName) => {
  console.log(`Hello, ${userName}!\n`);
};

export default (gameDesc) => {
  console.log('Welcome to the Brain Games!');
  if (gameDesc !== undefined) {
    console.log(gameDesc);
  }
};
