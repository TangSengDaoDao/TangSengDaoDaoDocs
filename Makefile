build:
	docker build -t tangsengdaodaodocs . --platform linux/amd64
deploy:
	docker build -t tangsengdaodaodocs  . --platform linux/amd64
	docker tag tangsengdaodaodocs registry.cn-shanghai.aliyuncs.com/wukongim/tangsengdaodaodocs:latest
	docker push registry.cn-shanghai.aliyuncs.com/wukongim/tangsengdaodaodocs:latest