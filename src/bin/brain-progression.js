#!/usr/bin/env node
import startGame, { getUserName, sayHello, makeGame } from '..';
import gameProgression from '../games/progression';

startGame();
const userName = getUserName();
sayHello(userName);
makeGame('What number is missing in the progression?', gameProgression, userName);
