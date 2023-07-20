build:
	docker build -t wukongimdocs .
deploy:
	docker build -t wukongimdocs  .
	docker tag wukongimdocs wukongim/wukongimdocs:latest
	docker push wukongim/wukongimdocs:latest