build:
	docker build -t tangsengdaodaodocs .
deploy:
	docker build -t tangsengdaodaodocs  .
	docker tag tangsengdaodaodocs registry.cn-shanghai.aliyuncs.com/wukongim/tangsengdaodaodocs:latest
	docker push registry.cn-shanghai.aliyuncs.com/wukongim/tangsengdaodaodocs:latest