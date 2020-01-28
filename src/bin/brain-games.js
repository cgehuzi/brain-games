#!/usr/bin/env node
import startGame, { getUserName, sayHello } from '..';

startGame();
const userName = getUserName();
sayHello(userName);
