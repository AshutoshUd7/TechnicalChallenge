Shell Scripting has been used to implement the solution for the problem statement.

Here instead of AWS, we are fetching metadata of Azure instance API.(Reason being I'm most familiar with Azure Cloud Services)

Using shell scripting, curl and jq(JSON Query) dependencies have been installed. Then using the script we are making an instance API call and fetching the metadata in a JSON format. 169.254.169.254 represents the IPv4 link-local address which is meant to communicate within a network segment.They are most often assigned as a result of OS procedures like address autoconfiguration for unrecognised or stateless address.
