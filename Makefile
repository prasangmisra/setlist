.PHONY: dev deploy preview

dev:
	npm install
	npm run dev

deploy:
	npm run build
	npm run deploy

preview:
	npm install
	npm run preview
