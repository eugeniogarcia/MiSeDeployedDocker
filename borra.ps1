$b=docker images |where-object {$_.Contains("none") -eq "True"}
foreach($c in $b){
$d=$c.Substring(40).Trim().Split(" ")[0]
docker rmi $d
}