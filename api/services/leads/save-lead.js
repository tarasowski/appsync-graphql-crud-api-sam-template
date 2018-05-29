const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB()

const tableName = process.env.TABLE_NAME

exports.handler = async(event) => {
    const customerId = event.customerId
    const leadId = event.leadId
    const name = event.name
    const email = event.email
    const company = event.company

    const params = {
        Item: {
            "customerId": {
                S: customerId
            },
            "leadId": {
                S: leadId
            },
            "name": {
                S: name
            },
            "email": {
                S: email
            },
            "company": {
                S: company
            }
        },
        ReturnConsumedCapacity: "TOTAL",
        TableName: tableName
    }

    return dynamodb.putItem(params).promise()
        .then(data => {
            console.log(data)
            return {
                customerId,
                leadId,
                name,
                email,
                company
            }
        })
        .catch(err => {
            console.log(err)
        })

}
