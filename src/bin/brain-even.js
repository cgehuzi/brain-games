#!/usr/bin/env node
import sayWelcome, { getUserName, sayHello } from '..';
import gameEven from '../calc';

sayWelcome('Answer "yes" if the number is even, otherwise answer "no".\n');
const userName = getUserName('May I have your name? ');
sayHello(userName);

gameEven(userName, 3);
