# Setup Dashboard For Kubernetes

## Install Dashboard UI
- Run commands below to install Dashboard UI

```sh linenums="1"

# Add kubernetes-dashboard repository
helm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/
# Deploy a Helm Release named "kubernetes-dashboard" using the kubernetes-dashboard chart
helm upgrade --install kubernetes-dashboard kubernetes-dashboard/kubernetes-dashboard --create-namespace --namespace kubernetes-dashboard

```

## Setup Service Account For kubernetes-dashboard
- Create admin-user service account. Create file `service-account.yaml` and put the content as below.

```yaml linenums="1"

apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard

```

- Then run the command below to create service account with name `admin-user` on the namespace `kubernetes-dashboard`

```sh linenums="1"

kubectl create serviceaccount admin-user -n kubernetes-dashboard

```

## Getting a Bearer Token for ServiceAccount

- Now we need to find the token we can use to log in. Execute the following command:

```sh linenums="1"

kubectl -n kubernetes-dashboard create token admin-user

```

- It should print something like:

```text

eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLXY1N253Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiIwMzAzMjQzYy00MDQwLTRhNTgtOGE0Ny04NDllZTliYTc5YzEiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZXJuZXRlcy1kYXNoYm9hcmQ6YWRtaW4tdXNlciJ9.Z2JrQlitASVwWbc-s6deLRFVk5DWD3P_vjUFXsqVSY10pbjFLG4njoZwh8p3tLxnX_VBsr7_6bwxhWSYChp9hwxznemD5x5HLtjb16kI9Z7yFWLtohzkTwuFbqmQaMoget_nYcQBUC5fDmBHRfFvNKePh_vSSb2h_aYXa8GV5AcfPQpY7r461itme1EXHQJqv-SN-zUnguDguCTjD80pFZ_CmnSE1z9QdMHPB8hoB4V68gtswR1VLa6mSYdgPwCHauuOobojALSaMc3RH7MmFUumAgguhqAkX3Omqd3rJbYOMRuMjhANqd08piDC3aIabINX6gP5-Tuuw2svnV6NYQ


```

- [More information](https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md)

## Access Kubernetes Dashboard By Kubectl Proxy
- Run the command below.

```sh linenums="1"

kubectl proxy

```

- Then access the Dashboard UI at url:

```url

http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/

```

## Access Kubernetes Dashboard By Port Forwading
- Run the command below.

```sh linenums="1"

kubectl -n kubernetes-dashboard port-forward svc/kubernetes-dashboard-kong-proxy --address 0.0.0.0 8443:443

```

- Then access the Dashboard UI at url:

```sh linenums="1"

https://{your-host-address}:8443/#/login

```

