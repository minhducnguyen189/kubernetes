
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

helm install -f helm/zero-downtime/values.yaml sample-dev helm/zero-downtime/

```

- helm uninstall

```sh

helm uninstall sample-dev

```

- helm upgrade

```sh

helm upgrade -f helm/zero-downtime/values.yaml sample-dev helm/zero-downtime/

```