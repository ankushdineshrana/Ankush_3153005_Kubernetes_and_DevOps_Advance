#NAGP Devops Assignment 2023

Github Repo Link: https://github.com/ankushdineshrana/Ankush_3153005_Kubernetes_and_DevOps_Advance

Docker Image Link (API Tier): https://hub.docker.com/repository/docker/ankushdrana/node-app-nagp

Check Health Of API Tier: GET http://34.128.69.15:30080/health

Fetch Data from DataBase Tier: GET http://34.128.69.15:30080/getdata

Video Links: https://drive.google.com/drive/folders/1V1QmiLuNGPPWt9PivIqokh2fW7ArBktV?usp=sharing

Steps to Redploy Cluster:
1. Spin a standard K8 cluster on GCP
2. Upload all YAML files in the folder 'k8-deployment-files'
3. Do Kubectl apply -f on all YAML files number wise 
        i.e. start with 1-NAGP-DB-Tier-MySQL.yaml then 2-NAGP-App-ConfigMap.yaml etc
4. Check the External Node IP with command 'kubectl get node -o wide'
5. Hit the health end-point http://xx.xx.xx.xx:30080/health
6. Hit the data endpoint http://xx.xx.xx.xx:30080/getdata

