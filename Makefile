build:
	docker-compose build

up:
	docker-compose up -d

stop:
	docker-compose stop

down:
	docker-compose down

restart:
	docker-compose restart

c:
	docker-compose run --rm backend bin/rails console

model:
	docker-compose run --rm backend bin/rails generate model $(ARGS)

migrate:
	docker-compose run --rm backend bin/rails db:migrate

bundle:
	docker-compose run --rm backend bundle install

seed:
	docker-compose run --rm backend bin/rails db:seed

rubocop:
	docker-compose run --rm backend bundle exec rubocop

rubocop-fix:
	docker-compose run --rm backend bundle exec rubocop -a
