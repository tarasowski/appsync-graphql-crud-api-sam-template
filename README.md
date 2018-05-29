# AppSync GraphQL CRUD API SAM Template

You can find here a basic serverless CRUD AppSync GraphQL API. You can save, retrieve, update and delete a lead/contact. 

## Todo:

1. `git clone` this repository
2. **Important:** change the name of the bucket inside `package.json` (bucket names must be unique)
3. `npm run qd` it will automatically start the packaging and deployment process
4. Once it's done, go into [AWS AppSync Console](https://console.aws.amazon.com/appsync/home?region=us-east-1#/)
5. Choose your API e.g.`AppSyncApi-dev` and click on Queries
6. Have fun

## Some Sample Queries

```graphql
mutation save {
  saveLead(customerId: "001", leadId: "001", name: "Dimitri Tarasowski", company: "Amazon LLC", email: "dimitri@amazon.com") {
    name
    company
    email
  }
}

query get {
  getLead(customerId: "001", leadId: "001") {
    name
    company
    email
  }
}

mutation update {
  updateLead(customerId: "001", leadId: "001", name: "Jeff Bezos", company: "Google LLC", email: "jeff@google.com") {
    name
    company
    email
  }
}

mutation delete {
  deleteLead(customerId: "001", leadId:"001") {
    customerId
    leadId
  }
}
```
