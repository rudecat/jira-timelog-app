#!make
include .env
export $(shell sed 's/=.*//' .env)

build: clean build_timelog_app
package: package_docker_image publish_docker_image

clean:
	echo "Clean up past build artefacts"
	rm -rf build

build_timelog_app:
	echo "Building timelog app"
	yarn build

package_docker_image:
	echo "Package docker image"
	rm -rf ./docker/html/*
	cp -r ./build ./docker/html
	cd docker && docker build . -t rudecat/timelog:${version}

publish_docker_image:
	echo "Tag and push docker image to docker hub"
	docker tag rudecat/timelog:${version} rudecat/timelog:latest
	docker push rudecat/timelog:${version}
	docker push rudecat/timelog:latest