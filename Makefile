generateEnv:
	.scripts/generateEnv.sh
.PHONY: generateEnv

cms-deps: generateEnv
	cd cms && composer install

.PHONY: cms-deps

storefront-deps: generateEnv
	cd storefront && npm install
.PHONY: storefront-deps


all: storefront-deps cms-deps
	docker-compose up -d
	.scripts/setupWordPress.sh
.PHONY: all

clean:
	docker compose stop
	docker compose rm -f
	docker volume rm -f test-devcontainers_db
	rm -rf cms/vendor cms/wordpress
	rm -rf storefront/node_modules
	rm -rf storefront/.next
.PHONY: clean
