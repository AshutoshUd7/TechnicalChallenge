# Challenge #2

We need to write code which will query the meta data of an instance within AWS and provide a json formatted output. The choice of language and implementation is up to you.
Bonus Points
The code allows for a particular data key to be retrieved individually
Hints
·         Aws Documentation (https://docs.aws.amazon.com/)
·         Azure Documentation (https://docs.microsoft.com/en-us/azure/?product=featured)
·         Google Documentation (https://cloud.google.com/docs)

# For Solution,

Shell Scripting has been used to implement the solution for the defined problem statement.

Here instead of AWS, I'm fetching metadata of Azure instance API.(Reason being I'm most familiar with Azure Cloud Services)

Using shell scripting, curl and jq(JSON Query) dependencies have been installed. Then using the script I'm making an instance API call and fetching the metadata in a JSON format. 169.254.169.254 represents the IPv4 link-local address which is meant to communicate within a network segment.They are most often assigned as a result of OS procedures like address autoconfiguration for unrecognised or stateless address.

Please refer the shell script named "QueryMetadata.sh"
