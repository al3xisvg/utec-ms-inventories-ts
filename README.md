```
~ docker-compose up --build
```

```
~ docker build -t alexisvgutec/repo-utec-ms-inventories-ts:latest . --platform linux/amd64
~ docker tag alexisvgutec/repo-utec-ms-inventories-ts:latest alexisvgutec/repo-utec-ms-inventories-ts:1
~ docker push alexisvgutec/repo-utec-ms-inventories-ts:1
```

```
~ docker pull alexisvgutec/repo-utec-ms-inventories-ts:1
~ docker run -d -p 5000:5002 --name container-inventories alexisvgutec/repo-utec-ms-inventories-ts:1
```
