
- connect with local docker to push image to minikube docker repo

```sh

eval $(minikube docker-env)
docker build . -t json-schema-validator:0.0.1-SNAPSHOT

```

- helm list

```sh

helm list

```

- helm install

```sh

helm install -f helm/sample/values-test.yaml my-sample-test helm/sample/

```

- helm uninstall

```sh

helm uninstall my-sample-test

```

- helm upgrade

```sh

helm upgrade -f helm/sample/values-test.yaml my-sample-test helm/sample/

```