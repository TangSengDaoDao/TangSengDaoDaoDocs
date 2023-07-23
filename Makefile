build:
	docker build -t tangsengdaodaodocs .
deploy:
	docker build -t tangsengdaodaodocs  .
	docker tag tangsengdaodaodocs wukongim/tangsengdaodaodocs:latest
	docker push wukongim/tangsengdaodaodocs:latest