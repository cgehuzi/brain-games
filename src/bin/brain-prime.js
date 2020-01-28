#!/usr/bin/env node
import startGame, { getUserName, sayHello, makeGame } from '..';
import gamePrime from '../games/prime';

startGame();
const userName = getUserName();
sayHello(userName);
makeGame('Answer "yes" if given number is prime. Otherwise answer "no".', gamePrime, userName);
