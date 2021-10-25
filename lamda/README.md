#AWS API Gateway & Lambda

## AWS Lamda

- create lambda function
- create test function
- save lamda as demoAPI

- upload zip file to lamda, including node_modules folder
  - all uploaded folder and files should be at lamda root folder

## AWS API Gateway

- create resource, e.g /users
- create method, e.g GET, POST
  - pointing to demoAPI
  - in Integration Request, add mapping template, so that event arg has all neccessary params
- deploy API, to stage, e,g prod

## AWS API Gateway authorizer

- create authorizer, lambda
  - check AuthorizationToken in header
  - return allow or deny IAM policy
- add authorizor to api gateway resource, and redeploy

```
{
   "principalId":"abc123",
   "policyDocument":{
      "Version":"2012-10-17",
      "Statement":[
         {
            "Action":"execute-api:Invoke",
            "Resource":[
               "arn:aws:execute-api:us-east-1:YOURACCOUNTNUMBER:YOURLAMBDAID/*/*"
            ],
            "Effect":"auth"
         }
      ]
   }
}
```
