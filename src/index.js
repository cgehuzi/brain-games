import readlineSync from 'readline-sync';

export const getUserName = () => {
	const username = readlineSync.question('May I have your name? ');
	return `Hello, ${username}!`;
};
