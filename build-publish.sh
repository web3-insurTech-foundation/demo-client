 #!/bin/bash
echo "to deploy all files, use the all argument"
echo "you need the AWS s3-uploader credentials to run this script"

allfiles="all"

ng build --configuration production

if [ $# -gt 0 ]
  then
    if [ $1 = $allfiles ]
      then aws s3 sync ./dist/web3/ s3://public-demo-client
    fi
  else aws s3 sync ./dist/web3/ s3://public-demo-client --exclude "*assets/*" 
fi


