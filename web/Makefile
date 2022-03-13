.PHONY: setup clean format lint test build ci dato-export docs

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(HOME)/bin:$(PATH)
MAKE := make
DATO_API_TOKEN := ${DATO_API_TOKEN}

ci:
	$(MAKE) setup
	$(MAKE) format
	$(MAKE) lint
	$(MAKE) test
	$(MAKE) build

clean:
	rm -rf yarn.lock coverage/ dist/ public/ node_modules/ **/__snapshots__/ apps/**/.cache/
	yarn cache clean

analyze:
	ANALYZE=true nx build home --verbose

setup:
	yarn install

format:
	nx format

lint:
	nx run-many --all --target lint

test:
	nx run-many --all --target test

build: dato-export
	nx run-many --all --target build

docs:
	depcruise . \
		--config .dependency-cruiser.js  \
		--output-type dot \
		--output-to ../docs/web/depgraph.dot --prefix "https://github.com/drkstr101/wa/blob/main/web/"
	cat ../docs/web/depgraph.dot | dot -T svg > ../docs/web/depgraph.svg.tmp
	mv ../docs/web/depgraph.svg.tmp ../docs/web/depgraph.svg


