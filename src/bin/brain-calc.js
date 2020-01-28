#!/usr/bin/env node
import startGame, { getUserName, sayHello, makeGame } from '..';
import gameCalc from '../games/calc';

startGame();
const userName = getUserName();
sayHello(userName);

makeGame('What is the result of the expression?', gameCalc, userName);
