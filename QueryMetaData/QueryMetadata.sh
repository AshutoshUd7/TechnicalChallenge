sudo apt gt install curl
sudo apt get install jq
curl -H Metadata:True "http://169.254.169.254/metadata/instance?api-version=2020-09-01&formst=json" | jq .
