#!/usr/bin/env node
import startGame, { getUserName, sayHello, makeGame } from '..';
import gameGCD from '../games/gcd';

startGame();
const userName = getUserName();
sayHello(userName);
makeGame('Find the greatest common divisor of given numbers.', gameGCD, userName);
