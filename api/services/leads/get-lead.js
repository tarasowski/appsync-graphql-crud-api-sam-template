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

    return dynamodb.getItem(params).promise()
        .then(data => {
            const body = data.Item
            console.log(body.name.S)
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
