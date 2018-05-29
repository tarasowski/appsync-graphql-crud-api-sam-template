const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB()

const tableName = process.env.TABLE_NAME

exports.handler = async(event) => {
    const customerId = event.customerId
    const leadId = event.leadId

    const params = {
        Key: {
            "customerId": {
                S: customerId
            },
            "leadId": {
                S: leadId
            }
        },
        TableName: tableName
    }


    return dynamodb.deleteItem(params).promise()
        .then(data => {
            console.log(data)
            return {
                customerId,
                leadId
            }

        })
        .catch(err => console.log(err))
};
