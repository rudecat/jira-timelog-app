#################################################################################
# GLOBALS                                                                       #
#################################################################################

include .env
export $(shell sed 's/=.*//' .env)


#################################################################################
# COMMANDS                                                                      #
#################################################################################

## Clean past artefacts and build the timelog app
build: clean build_timelog_app

## Package all artefacts into docker image, and push to docker hub
package: package_docker_image publish_docker_image

## Clean up past build artefacts
clean:
	echo "Clean up past build artefacts"
	rm -rf build

## Building timelog app
build_timelog_app:
	echo "Building timelog app"
	yarn build

## Package docker image
package_docker_image:
	echo "Package docker image"
	rm -rf ./docker/html/*
	cp -r ./build ./docker/html
	cd docker && docker build . -t rudecat/timelog:${version}

## Tag and push docker image to docker hub
publish_docker_image:
	echo "Tag and push docker image to docker hub"
	docker tag rudecat/timelog:${version} rudecat/timelog:latest
	docker push rudecat/timelog:${version}
	docker push rudecat/timelog:latest

#################################################################################
# Self Documenting Commands                                                     #
#################################################################################

.DEFAULT_GOAL := help

# Inspired by <http://marmelab.com/blog/2016/02/29/auto-documented-makefile.html>
# sed script explained:
# /^##/:
# 	* save line in hold space
# 	* purge line
# 	* Loop:
# 		* append newline + line to hold space
# 		* go to next line
# 		* if line starts with doc comment, strip comment character off and loop
# 	* remove target prerequisites
# 	* append hold space (+ newline) to line
# 	* replace newline plus comments by `---`
# 	* print line
# Separate expressions are necessary because labels cannot be delimited by
# semicolon; see <http://stackoverflow.com/a/11799865/1968>
.PHONY: help
help:
	@echo "$$(tput bold)Available rules:$$(tput sgr0)"
	@echo
	@sed -n -e "/^## / { \
		h; \
		s/.*//; \
		:doc" \
		-e "H; \
		n; \
		s/^## //; \
		t doc" \
		-e "s/:.*//; \
		G; \
		s/\\n## /---/; \
		s/\\n/ /g; \
		p; \
	}" ${MAKEFILE_LIST} \
	| LC_ALL='C' sort --ignore-case \
	| awk -F '---' \
		-v ncol=$$(tput cols) \
		-v indent=19 \
		-v col_on="$$(tput setaf 6)" \
		-v col_off="$$(tput sgr0)" \
	'{ \
		printf "%s%*s%s ", col_on, -indent, $$1, col_off; \
		n = split($$2, words, " "); \
		line_length = ncol - indent; \
		for (i = 1; i <= n; i++) { \
			line_length -= length(words[i]) + 1; \
			if (line_length <= 0) { \
				line_length = ncol - indent - length(words[i]) - 1; \
				printf "\n%*s ", -indent, " "; \
			} \
			printf "%s ", words[i]; \
		} \
		printf "\n"; \
	}' \
	| more $(shell test $(shell uname) = Darwin && echo '--no-init --raw-control-chars')
