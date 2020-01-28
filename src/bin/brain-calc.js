#!/usr/bin/env node
import startGame, {
  showGameRules, getUserName, sayHello, makeGame,
} from '..';
import gameCalc from '../games/calc';

startGame();
const userName = getUserName();
sayHello(userName);

showGameRules('What is the result of the expression?');
makeGame(gameCalc, userName);
