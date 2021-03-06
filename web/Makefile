.PHONY: setup clean format lint test build start ci dato-export docs

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(HOME)/bin:$(PATH)
MAKE := make
DATO_API_TOKEN := ${DATO_API_TOKEN}
WA_HOME_URL := ${WA_HOME_URL}
WA_EXPO_URL := ${WA_EXPO_URL}

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

# Install a few libs into node modules so the can be found
# using standard nodejs require
setup: install

setup-utils:
	nx run-many --projects=api-stackbit,next-utils --target build
	rm -rf node_modules/@watheia
	mkdir node_modules/@watheia
	cp -r dist/libs/next/utils node_modules/@watheia/next.utils
	cp -r dist/libs/api/stackbit node_modules/@watheia/api.stackbit

install:
	yarn install

format:
	nx format

lint:
	nx run-many --all --target lint

test:
	nx run-many --all --target test

build: build-home build-expo

build-home: setup-utils
	WA_HOME_URL=$(WA_HOME_URL) \
		WA_EXPO_URL=$(WA_EXPO_URL) \
		nx build home --prod --verbose

build-expo: setup-utils
	@echo "noop"
#	WA_HOME_URL=$(WA_HOME_URL) \
		WA_EXPO_URL=$(WA_EXPO_URL) \
		nx build expo --prod --verbose

# Run all in parallel
start: setup-utils
	WA_HOME_URL=$(WA_HOME_URL) \
		WA_EXPO_URL=$(WA_EXPO_URL) \
		nx run-many --all --target serve --parallel

docs:
	depcruise . \
		--config .dependency-cruiser.js  \
		--output-type dot \
		--output-to ../docs/web/depgraph.dot --prefix "https://github.com/drkstr101/wa/blob/main/web/"
	cat ../docs/web/depgraph.dot | dot -T svg > ../docs/web/depgraph.svg.tmp
	mv ../docs/web/depgraph.svg.tmp ../docs/web/depgraph.svg

dato-media:
	nx workspace-generator dato-media $(DATO_API_TOKEN)


