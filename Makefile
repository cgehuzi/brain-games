install:
	npm install

start:
	npx node bin/brain-games.js

even:
	npx node bin/brain-even.js

calc:
	npx node bin/brain-calc.js

gcd:
	npx node bin/brain-gcd.js

progression:
	npx node bin/brain-progression.js

prime:
	npx node bin/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .