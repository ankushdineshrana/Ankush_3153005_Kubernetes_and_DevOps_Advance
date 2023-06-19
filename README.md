#NAGP Devops Assignment 2023

Github Repo Link: https://github.com/ankushdineshrana/Ankush_3153005_Kubernetes_and_DevOps_Advance

Docker Image Link (API Tier): https://hub.docker.com/repository/docker/ankushdrana/node-app-nagp

Check Health Of API Tier: GET http://34.128.69.15:30080/health

Fetch Data from DataBase Tier: GET http://34.128.69.15:30080/getdata

Video Links: https://drive.google.com/drive/folders/1V1QmiLuNGPPWt9PivIqokh2fW7ArBktV?usp=sharing
  -  There are two videos one is for '1-Cluster Demo' it has all details of the assignment
  -  '2-Code&YAML-Overview' gives overview about all the code and yaml files

Steps to Redploy Cluster:
1. Spin a standard K8 cluster on GCP
2. Upload all YAML files in the folder 'k8-deployment-files'
3. Do Kubectl apply -f on all YAML files number wise 
        i.e. start with 1-NAGP-DB-Tier-MySQL.yaml then 2-NAGP-App-ConfigMap.yaml etc
4. Open bash terminal for sql stateful set -- 'kubectl exec -it nagp-mysql-db-0 bash'
5. Create Table and insert data like this--
    a. mysql -u root -p
    b. Enter Password: admin
    c. use nagp_db;
    d. CREATE TABLE IF NOT EXISTS nagp_table (assignment_id int NOT NULL AUTO_INCREMENT, assignment_name VARCHAR(255) NOT NULL,      status VARCHAR(255), PRIMARY KEY (task_id));
    e. INSERT INTO nagp_table (assignment_name, status) VALUES ('Container Orchestration','complete');
    f. Enter random entries like above
4. Check the External Node IP with command 'kubectl get node -o wide'
5. Hit the health end-point http://xx.xx.xx.xx:30080/health
6. Hit the data endpoint http://xx.xx.xx.xx:30080/getdata

