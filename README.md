# graphql_test
use this command to install all the required lib

npm install graphql express express-graphql --save

npm install babel-preset-env


npm install babel-polyfill


npm install mongodb


npm install cors

npm install --save-dev babel-plugin-transform-object-rest-spread


npm install graphql-type-json


then run###########

 node config.js



 mutation ($project: ProjectInputType) {
   addProject (project:$project) {
     id
   }
 }

 

 {
   "project": {
     "project_name": "shreyanshu",
     "project_description": "project demo 1",
     "start_date": "12-02-2018",
     "end_date": "24-12-2018",
     "leader": "shreyanshu",
     "members": "shreyanshu abc def",
     "progress_rate": "5"
   }
 }
