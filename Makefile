IMAGE_NAME=gt_online_frontend
CONTAINER_NAME=gt-online-frontend

docker-build:
	docker build -t $(IMAGE_NAME) .

docker-run:
	docker run -p 3000:3000 -d --name $(CONTAINER_NAME) $(IMAGE_NAME)

docker-stop:
	docker stop $(CONTAINER_NAME)