.PHONY: setup clean format lint test build ci dato-export docs

SHELL := /bin/bash
PATH := $(HOME)/bin:$(PATH)
MAKE := make

install:
	npm install --global @teambit/bvm
	bvm install
