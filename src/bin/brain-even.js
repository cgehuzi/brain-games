#!/usr/bin/env node
import startGame, { getUserName, sayHello, makeGame } from '..';
import gameEven from '../games/even';

startGame();
const userName = getUserName();
sayHello(userName);

makeGame('Answer "yes" if the number is even, otherwise answer "no".', gameEven, userName);
