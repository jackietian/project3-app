#AWS API Gateway & Lamda

## AWS Lamda

- create lamda function
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
