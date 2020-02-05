# Brain Games for command line

[![Maintainability](https://api.codeclimate.com/v1/badges/4ad737a24d79d747d5a9/maintainability)](https://codeclimate.com/github/cgehuzi/brain-games/maintainability) ![ESLint : airbnb-base](https://github.com/cgehuzi/hexlet-frontend-1/workflows/ESLint%20:%20airbnb-base/badge.svg)

Набор математических мини-игр, запускаемых из консоли:

- [brain-even](#чётное-ли-число) – чётное ли число
- [brain-calc](#калькулятор) – калькулятор
- [brain-gcd](#наибольший-общий-делитель) – наибольший общий делитель
- [brain-progression](#арифметическая-прогрессия) – арифметическая прогрессия
- [brain-prime](#простое-ли-число) – простое ли число

Чтобы победить, игроку необходимо правильно ответить на три вопроса. При неверном ответе игра завершается.

## Установка

```bash
npm install cgehuzi-brain-games --global
```

## Запуск игр

### Чётное ли число

Будет предложено число. Нужно определить, чётное ли оно.

```bash
$ brain-even

# Answer "yes" if the number is even, otherwise answer "no".
# Question: 42
# Your answer: yes
# Correct!
```

### Калькулятор

Будет предложено математическое выражение (сложение, вычитание или умножение). Нужно определить его результат.

```bash
$ brain-calc

# What is the result of the expression?
# Question: 86 + 22
# Your answer: 108
# Correct!
```

### Наибольший общий делитель

Будет предложено два числа. Нужно определить их наибольший общий делитель.

```bash
$ brain-gcd

# Find the greatest common divisor of given numbers.
# Question: 25 70
# Your answer: 5
# Correct!
```

### Арифметическая прогрессия

Будет предложена арифметическая прогрессия, но один из её членов будет неизвестен. Нужно определить недостающее число.

```bash
$ brain-progression

# What number is missing in the progression?
# Question: 6 14 22 30 38 46 54 62 .. 78
# Your answer: 70
# Correct!
```

### Простое ли число

Будет предложено число. Нужно определить, [простое](https://ru.wikipedia.org/wiki/Простое_число) ли оно.

```bash
$ brain-prime

# Answer "yes" if given number is prime. Otherwise answer "no".
# Question: 83
# Your answer: yes
# Correct!
```
