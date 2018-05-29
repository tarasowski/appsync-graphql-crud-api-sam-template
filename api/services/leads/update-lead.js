const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB()

const tableName = process.env.TABLE_NAME

exports.handler = async (event) => {
    const customerId = event.customerId
    const leadId = event.leadId
    const name = event.name
    const email = event.email
    const company = event.company
    
    const params = {
        ExpressionAttributeNames: {
            "#n": "name",
            "#e": "email",
            "#c": "company"
        },
        ExpressionAttributeValues: {
            ":n": {
                S: name
            },
            ":e": {
                S: email
            },
            ":c": {
                S: company
            }
        },
        Key: {
            "customerId": {
                S: customerId
            },
            "leadId": {
                S: leadId
            }
        },
        ReturnValues: "ALL_NEW",
        TableName: tableName,
        UpdateExpression: "SET #n = :n, #e = :e, #c = :c"
    }
    
    return dynamodb.updateItem(params).promise()
                .then(data => {
                    const body = data.Attributes
                    return {
                        customerId: body.customerId.S,
                        leadId: body.leadId.S, 
                        name: body.name.S,
                        email: body.email.S,
                        company: body.company.S
                    }
                })
                .catch(err => console.log(err))
};
