#Install Curl Dependencies
sudo apt-get install curl

#Install JSON Dependencies
sudo apt-get install jq

#Querying Azure Instance metadata
curl -H Metadata:True "http://169.254.169.254/metadata/instance?api-version=2020-09-01&formst=json" | jq .
